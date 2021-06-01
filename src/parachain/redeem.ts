import { ApiPromise } from "@polkadot/api";
import { AddressOrPair, SubmittableExtrinsic } from "@polkadot/api/submittable/types";
import { AccountId, Hash, H256, Header } from "@polkadot/types/interfaces";
import { EventRecord } from "@polkadot/types/interfaces/system";
import { Bytes } from "@polkadot/types";
import { Network } from "bitcoinjs-lib";
import Big from "big.js";

import { VaultsAPI, DefaultVaultsAPI } from "./vaults";
import {
    decodeBtcAddress,
    decodeFixedPointType,
    encodeParachainRequest,
    btcToSat,
    satToBTC,
    getTxProof,
} from "../utils";
import { stripHexPrefix } from "../utils";
import { allocateAmountsToVaults, getRequestIdsFromEvents, RequestOptions } from "../utils/issueRedeem";
import { CollateralAPI } from ".";
import { DefaultCollateralAPI } from "./collateral";
import { ElectrsAPI } from "../external";
import { DefaultTransactionAPI, TransactionAPI } from "./transaction";
import { RedeemRequest } from "../interfaces/default";
import { DefaultOracleAPI, OracleAPI } from "./oracle";

export type RequestResult = { id: Hash; redeemRequest: RedeemRequestExt };

export interface RedeemRequestExt extends Omit<RedeemRequest, "btc_address"> {
    // network encoded btc address
    btc_address: string;
}

export function encodeRedeemRequest(req: RedeemRequest, network: Network): RedeemRequestExt {
    return encodeParachainRequest<RedeemRequest, RedeemRequestExt>(req, network);
}

/**
 * @category PolkaBTC Bridge
 * The type Big represents DOT or PolkaBTC denominations,
 * while the type BN represents Planck or Satoshi denominations.
 */
export interface RedeemAPI extends TransactionAPI {
    /**
     * @returns An array containing the redeem requests
     */
    list(): Promise<RedeemRequestExt[]>;
    /**
     * Send a redeem request transaction
     * @param amount PolkaBTC amount (denoted in Bitcoin) to redeem
>>>>>>> 54d4ba92bf8213f6bda540fd4851b5ea46e6fd84
     * @param btcAddressEnc Bitcoin address where the redeemed BTC should be sent
     * @param options (optional): an object specifying
     * - atomic (optional) Whether the request should be handled atomically or not. Only makes a difference
     * if more than one vault is needed to fulfil it. Defaults to false.
     * - availableVaults (optional) A list of all vaults usable for redeem. If not provided, will fetch from the parachain.
     * - retries (optional) Number of times to re-try redeeming, if some of the requests fail. Defaults to 0.
     * @returns An array of type {redeemId, redeemRequest} if the requests succeeded. The function throws an error otherwise.
     */
    request(amount: Big, btcAddressEnc: string, options?: RequestOptions): Promise<RequestResult[]>;

    /**
     * Send a batch of aggregated redeem transactions (to one or more vaults)
     * @param amountsPerVault A mapping of vaults to redeem from, and PolkaBTC amounts (in Satoshi) to redeem using each vault
     * @param btcAddressEnc Bitcoin address where the redeemed BTC should be sent
     * @param atomic Whether the issue request should be handled atomically or not. Only makes a difference if more than
     * one vault is needed to fulfil it.
     * @returns An array of type {redeemId, vault} if the requests succeeded.
     * @throws Rejects the promise if none of the requests succeeded (or if at least one failed, when atomic=true).
     */
    requestAdvanced(
        amountsPerVault: Map<AccountId, Big>,
        btcAddressEnc: string,
        atomic: boolean
    ): Promise<RequestResult[]>;

    /**
     * Send a redeem execution transaction
     * @remarks If `txId` is not set, the `merkleProof` and `rawTx` must both be set.
     *
     * @param redeemId The ID generated by the redeem request transaction
     * @param txId (Optional) The ID of the Bitcoin transaction that sends funds from the vault to the redeemer's address
     * @param merkleProof (Optional) The merkle inclusion proof of the Bitcoin transaction.
     * @param rawTx (Optional) The raw bytes of the Bitcoin transaction
     * @returns A boolean value indicating whether the execution was successful. The function throws an error otherwise.
     */
    execute(redeemId: string, txId?: string, merkleProof?: Bytes, rawTx?: Bytes): Promise<boolean>;
    /**
     * Send a redeem cancellation transaction. After the redeem period has elapsed,
     * the redeemal of PolkaBTC can be cancelled. As a result, the griefing collateral
     * of the vault will be slashed and sent to the redeemer
     * @param redeemId The ID returned by the redeem request transaction
     * @param reimburse (Optional) In case of redeem failure:
     *  - `false` = retry redeeming, with a different Vault
     *  - `true` = accept reimbursement in polkaBTC
     */
    cancel(redeemId: H256, reimburse?: boolean): Promise<void>;
    /**
     * @remarks Testnet utility function
     * @param blocks The time difference in number of blocks between a redeem request
     * is created and required completion time by a vault.
     * The redeem period has an upper limit to ensure the user gets their BTC in time
     * and to potentially punish a vault for inactivity or stealing BTC.
     */
    setRedeemPeriod(blocks: number): Promise<void>;
     /**
     *
     * @returns The time difference in number of blocks between a redeem request
     * is created and required completion time by a vault.
     * The redeem period has an upper limit to ensure the user gets their BTC in time
     * and to potentially punish a vault for inactivity or stealing BTC.
     */
    getRedeemPeriod(): Promise<number>;
    /**
     * Set an account to use when sending transactions from this API
     * @param account Keyring account
     */
    setAccount(account: AddressOrPair): void;
    /**
     * @param account The ID of the account whose redeem requests are to be retrieved
     * @returns A mapping from the redeem request ID to the redeem request object, corresponding to the requests of
     * the given account
     */
    mapForUser(account: AccountId): Promise<Map<H256, RedeemRequestExt>>;
    /**
     * @param redeemId The ID of the redeem request to fetch
     * @returns A redeem request object
     */
    getRequestById(redeemId: H256): Promise<RedeemRequestExt>;
    getRequestsById(redeemIds: H256[]): Promise<RedeemRequestExt[]>;
    /**
     * Whenever a redeem request associated with `account` expires, call the callback function with the
     * ID of the expired request. Already expired requests are stored in memory, so as not to call back
     * twice for the same request.
     * @param account The ID of the account whose redeem requests are to be checked for expiry
     * @param callback Function to be called whenever a redeem request expires
     */
    subscribeToRedeemExpiry(account: AccountId, callback: (requestRedeemId: H256) => void): Promise<() => void>;
    /**
     * @returns The minimum amount of btc that is accepted for redeem requests; any lower values would
     * risk the bitcoin client to reject the payment
     */
    getDustValue(): Promise<Big>;
    /**
     * @returns The fee charged for redeeming. For instance, "0.005" stands for 0.5%
     */
    getFeeRate(): Promise<Big>;
    /**
     * @param amountBtc The amount, in BTC, for which to compute the redeem fees
     * @returns The fees, in BTC
     */
    getFeesToPay(amount: Big): Promise<Big>;
    /**
     * @returns If users execute a redeem with a Vault flagged for premium redeem,
     * they can earn a DOT premium, slashed from the Vault's collateral.
     */
    getPremiumRedeemFee(): Promise<string>;
    /**
     * Burn wrapped tokens for a premium
     * @param amount The amount of PolkaBTC to burn, denominated as PolkaBTC
     */
    burn(amount: Big): Promise<void>;
    /**
     * @returns The maximum amount of tokens that can be burned through a liquidation redeem
     */
    getMaxBurnableTokens(): Promise<Big>;
    /**
     * @returns The exchange rate (collateral currency to wrapped token currency)
     * used when burning tokens
     */
    getBurnExchangeRate(): Promise<Big>;
    /**
     * @returns The current inclusion fee based on the expected number of bytes
     * in the transaction, and the inclusion fee rate reported by the oracle
     */
    getCurrentInclusionFee(): Promise<Big>;
}

export class DefaultRedeemAPI extends DefaultTransactionAPI implements RedeemAPI {
    private vaultsAPI: VaultsAPI;
    private collateralAPI: CollateralAPI;
    private oracleAPI: OracleAPI;
    requestHash: Hash = this.api.createType("Hash");
    events: EventRecord[] = [];

    constructor(api: ApiPromise, private btcNetwork: Network, private electrsAPI: ElectrsAPI, account?: AddressOrPair) {
        super(api, account);
        this.vaultsAPI = new DefaultVaultsAPI(api, btcNetwork, account);
        this.collateralAPI = new DefaultCollateralAPI(api, account);
        this.oracleAPI = new DefaultOracleAPI(api, account);
    }

    private getRedeemIdsFromEvents(events: EventRecord[]): Hash[] {
        return getRequestIdsFromEvents(events, this.api.events.redeem.RequestRedeem, this.api);
    }

    async request(amount: Big, btcAddressEnc: string, options?: RequestOptions): Promise<RequestResult[]> {
        try {
            const availableVaults = options?.availableVaults || await this.vaultsAPI.getVaultsWithRedeemableTokens();
            const atomic = !!options?.atomic;
            const retries = options?.retries || 0;
            console.log("Available vaults on REDEEM:");
            [...availableVaults.entries()].map(([vaultId, amount]) => {
                console.log(`${amount.toString()} available with ${vaultId.toString()}`);
            });
            const amountsPerVault = allocateAmountsToVaults(availableVaults, amount);
            console.log("Allocated vaults on REDEEM:");
            [...amountsPerVault.entries()].map(([vaultId, amount]) => {
                console.log(`${amount.toString()} allocated to ${vaultId.toString()}`);
            });
            const result = await this.requestAdvanced(amountsPerVault, btcAddressEnc, atomic);
            const successfulSum = result.reduce((sum, req) => sum.plus(req.redeemRequest.amount_btc.toString()), new Big(0));
            const remainder = amount.sub(successfulSum);
            if (remainder.eq(0) || retries === 0) return result;
            else {
                return (await this.request(remainder, btcAddressEnc, {availableVaults, atomic, retries: retries - 1})).concat(result);
            }
        } catch (e) {
            return Promise.reject(e.message);
        }
    }

    async requestAdvanced(
        amountsPerVault: Map<AccountId, Big>,
        btcAddressEnc: string,
        atomic: boolean
    ): Promise<RequestResult[]> {
        const btcAddress = this.api.createType("BtcAddress", decodeBtcAddress(btcAddressEnc, this.btcNetwork));
        const txes = new Array<SubmittableExtrinsic<"promise">>();
        console.log("USING VAULTS on REDEEM:");
        [...amountsPerVault.entries()].map(([vaultId, amount]) => {
            console.log(`Redeeming ${amount.toString()} with vault ${vaultId.toString()}`);
        });
        for (const [vault, amount] of amountsPerVault) {
            console.log(`BBBBBBBBBBBBBBBBBBBBBBBBBB amountSat: ${btcToSat(amount.toString())}, to vaultId: ${vault.toString()}`);
            const amountWrapped = this.api.createType("Wrapped", btcToSat(amount.toString()));
            txes.push(this.api.tx.redeem.requestRedeem(amountWrapped, btcAddress, vault));
        }
        const batch = (atomic ? this.api.tx.utility.batchAll : this.api.tx.utility.batch)(txes);
        try {
            const result = await this.sendLogged(batch, this.api.events.issue.RequestRedeem);
            const ids = this.getRedeemIdsFromEvents(result.events);
            const redeemRequests = await this.getRequestsById(ids);
            return ids.map((id, idx) => ({ id, redeemRequest: redeemRequests[idx] }));
        } catch (e) {
            return Promise.reject(e);
        }
    }

    async execute(requestId: string, btcTxId?: string, merkleProof?: Bytes, rawTx?: Bytes): Promise<boolean> {
        const parsedRequestId = this.api.createType("H256", requestId);
        [merkleProof, rawTx] = await getTxProof(this.electrsAPI, btcTxId, merkleProof, rawTx);
        const executeRedeemTx = this.api.tx.redeem.executeRedeem(parsedRequestId, merkleProof, rawTx);
        const result = await this.sendLogged(executeRedeemTx, this.api.events.redeem.ExecuteRedeem);
        const ids = this.getRedeemIdsFromEvents(result.events);
        if (ids.length > 1) {
            throw new Error("Unexpected multiple redeem events from single execute transaction!");
        }
        else if (ids.length === 1) {
            return true;
        }
        return false;
    }

    async cancel(redeemId: H256, reimburse?: boolean): Promise<void> {
        const reimburseValue = reimburse ? reimburse : false;
        const cancelRedeemTx = this.api.tx.redeem.cancelRedeem(redeemId, reimburseValue);
        await this.sendLogged(cancelRedeemTx, this.api.events.redeem.CancelRedeem);
    }

    async burn(amount: Big): Promise<void> {
        const amountSat = this.api.createType("Balance", btcToSat(amount.toString()));
        const burnRedeemTx = this.api.tx.redeem.liquidationRedeem(amountSat);
        await this.sendLogged(burnRedeemTx, this.api.events.redeem.LiquidationRedeem);
    }

    async setRedeemPeriod(blocks: number): Promise<void> {
        const period = this.api.createType("BlockNumber", blocks);
        const tx = this.api.tx.sudo
            .sudo(
                this.api.tx.redeem.setRedeemPeriod(period)
            );
        await this.sendLogged(tx);
    }

    async getRedeemPeriod(): Promise<number> {
        const blockNumber = await this.api.query.redeem.redeemPeriod();
        return blockNumber.toNumber();
    }

    async getMaxBurnableTokens(): Promise<Big> {
        const liquidationVault = await this.vaultsAPI.getLiquidationVault();
        return new Big(satToBTC(liquidationVault.issued_tokens.toString()));
    }

    async getBurnExchangeRate(): Promise<Big> {
        const liquidationVault = await this.vaultsAPI.getLiquidationVault();
        const wrappedSatoshi = liquidationVault.issued_tokens.add(liquidationVault.to_be_issued_tokens);
        if(wrappedSatoshi.isZero()) {
            return Promise.reject("There are no burnable tokens. The burn exchange rate is undefined");
        }
        const wrappedBtc = new Big(satToBTC(wrappedSatoshi.toString()));
        const liquidationVaultId = await this.vaultsAPI.getLiquidationVaultId();
        const collateralDot = await this.collateralAPI.balanceLocked(
            this.api.createType("AccountId", liquidationVaultId)
        );
        return collateralDot.div(wrappedBtc);
    }

    async getCurrentInclusionFee(): Promise<Big> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const [size, satoshiFees] = await Promise.all([
            this.api.query.redeem.redeemTransactionSize.at(head),
            this.oracleAPI.getBtcTxFeesPerByte()
        ]);
        const btcFees = new Big(satToBTC(satoshiFees.fast.toString()));
        return btcFees.mul(new Big(size.toString()));
    }

    async list(): Promise<RedeemRequestExt[]> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const redeemRequests = await this.api.query.redeem.redeemRequests.entriesAt(head);
        return redeemRequests.map((v) => encodeRedeemRequest(v[1], this.btcNetwork));
    }

    async mapForUser(account: AccountId): Promise<Map<H256, RedeemRequestExt>> {
        const redeemRequestPairs: [H256, RedeemRequest][] = await this.api.rpc.redeem.getRedeemRequests(account);
        const mapForUser: Map<H256, RedeemRequestExt> = new Map<H256, RedeemRequestExt>();
        redeemRequestPairs.forEach((redeemRequestPair) =>
            mapForUser.set(redeemRequestPair[0], encodeRedeemRequest(redeemRequestPair[1], this.btcNetwork))
        );
        return mapForUser;
    }

    async subscribeToRedeemExpiry(account: AccountId, callback: (requestRedeemId: H256) => void): Promise<() => void> {
        const expired = new Set();
        try {
            const unsubscribe = await this.api.rpc.chain.subscribeFinalizedHeads(async (header: Header) => {
                const redeemRequests = await this.mapForUser(account);
                const redeemPeriod = this.api.createType("BlockNumber", await this.getRedeemPeriod());
                const currentParachainBlockHeight = header.number.toBn();
                redeemRequests.forEach((request, id) => {
                    if (request.opentime.add(redeemPeriod).lte(currentParachainBlockHeight) && !expired.has(id)) {
                        expired.add(id);
                        callback(this.api.createType("H256", stripHexPrefix(id.toString())));
                    }
                });
            });
            return unsubscribe;
        } catch (error) {
            console.log(`Error during expired redeem callback: ${error}`);
        }
        // as a fallback, return an empty void function
        return () => {
            return;
        };
    }

    async getFeesToPay(amount: Big): Promise<Big> {
        const feePercentage = await this.getFeeRate();
        return amount.mul(feePercentage);
    }

    async getFeeRate(): Promise<Big> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const redeemFee = await this.api.query.fee.redeemFee.at(head);
        return new Big(decodeFixedPointType(redeemFee));
    }

    async getDustValue(): Promise<Big> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const dustValueSat = await this.api.query.redeem.redeemBtcDustValue.at(head);
        return new Big(satToBTC(dustValueSat.toString()));
    }

    async getPremiumRedeemFee(): Promise<string> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const premiumRedeemFee = await this.api.query.fee.premiumRedeemFee.at(head);
        return decodeFixedPointType(premiumRedeemFee);
    }

    async getRequestById(redeemId: H256): Promise<RedeemRequestExt> {
        return (await this.getRequestsById([redeemId]))[0];
    }

    async getRequestsById(redeemIds: H256[]): Promise<RedeemRequestExt[]> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        return Promise.all(
            redeemIds.map(async (redeemId) =>
                encodeRedeemRequest(await this.api.query.redeem.redeemRequests.at(head, redeemId), this.btcNetwork)
            )
        );
    }
}
