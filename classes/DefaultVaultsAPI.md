[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultVaultsAPI

# Class: DefaultVaultsAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultVaultsAPI`**

## Implements

- [`VaultsAPI`](/interfaces/VaultsAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultVaultsAPI.md#constructor)

### Properties

- [api](/classes/DefaultVaultsAPI.md#api)
- [btcNetwork](/classes/DefaultVaultsAPI.md#btcnetwork)
- [feeAPI](/classes/DefaultVaultsAPI.md#feeapi)
- [oracleAPI](/classes/DefaultVaultsAPI.md#oracleapi)
- [rewardsAPI](/classes/DefaultVaultsAPI.md#rewardsapi)
- [tokensAPI](/classes/DefaultVaultsAPI.md#tokensapi)

### Methods

- [calculateCapacity](/classes/DefaultVaultsAPI.md#calculatecapacity)
- [computeBackingCollateral](/classes/DefaultVaultsAPI.md#computebackingcollateral)
- [depositCollateral](/classes/DefaultVaultsAPI.md#depositcollateral)
- [get](/classes/DefaultVaultsAPI.md#get)
- [getAPY](/classes/DefaultVaultsAPI.md#getapy)
- [getAccount](/classes/DefaultVaultsAPI.md#getaccount)
- [getCollateral](/classes/DefaultVaultsAPI.md#getcollateral)
- [getCollateralizationFromVault](/classes/DefaultVaultsAPI.md#getcollateralizationfromvault)
- [getCollateralizationFromVaultAndCollateral](/classes/DefaultVaultsAPI.md#getcollateralizationfromvaultandcollateral)
- [getIssuableAmount](/classes/DefaultVaultsAPI.md#getissuableamount)
- [getIssuedAmount](/classes/DefaultVaultsAPI.md#getissuedamount)
- [getLiquidationCollateralThreshold](/classes/DefaultVaultsAPI.md#getliquidationcollateralthreshold)
- [getLiquidationVault](/classes/DefaultVaultsAPI.md#getliquidationvault)
- [getLiquidationVaultId](/classes/DefaultVaultsAPI.md#getliquidationvaultid)
- [getMaxNominationRatio](/classes/DefaultVaultsAPI.md#getmaxnominationratio)
- [getPremiumRedeemThreshold](/classes/DefaultVaultsAPI.md#getpremiumredeemthreshold)
- [getPremiumRedeemVaults](/classes/DefaultVaultsAPI.md#getpremiumredeemvaults)
- [getPunishmentFee](/classes/DefaultVaultsAPI.md#getpunishmentfee)
- [getRequiredCollateralForVault](/classes/DefaultVaultsAPI.md#getrequiredcollateralforvault)
- [getSecureCollateralThreshold](/classes/DefaultVaultsAPI.md#getsecurecollateralthreshold)
- [getStakingCapacity](/classes/DefaultVaultsAPI.md#getstakingcapacity)
- [getSystemCollateralization](/classes/DefaultVaultsAPI.md#getsystemcollateralization)
- [getTotalIssuableAmount](/classes/DefaultVaultsAPI.md#gettotalissuableamount)
- [getTotalIssuedAmount](/classes/DefaultVaultsAPI.md#gettotalissuedamount)
- [getVaultCollateralization](/classes/DefaultVaultsAPI.md#getvaultcollateralization)
- [getVaultsWithIssuableTokens](/classes/DefaultVaultsAPI.md#getvaultswithissuabletokens)
- [getVaultsWithRedeemableTokens](/classes/DefaultVaultsAPI.md#getvaultswithredeemabletokens)
- [getWrappedCurrency](/classes/DefaultVaultsAPI.md#getwrappedcurrency)
- [isBelowPremiumThreshold](/classes/DefaultVaultsAPI.md#isbelowpremiumthreshold)
- [isNoTokensIssuedError](/classes/DefaultVaultsAPI.md#isnotokensissuederror)
- [isVaultFlaggedForTheft](/classes/DefaultVaultsAPI.md#isvaultflaggedfortheft)
- [list](/classes/DefaultVaultsAPI.md#list)
- [parseVault](/classes/DefaultVaultsAPI.md#parsevault)
- [parseVaultStatus](/classes/DefaultVaultsAPI.md#parsevaultstatus)
- [register](/classes/DefaultVaultsAPI.md#register)
- [reportVaultTheft](/classes/DefaultVaultsAPI.md#reportvaulttheft)
- [selectRandomVaultIssue](/classes/DefaultVaultsAPI.md#selectrandomvaultissue)
- [selectRandomVaultRedeem](/classes/DefaultVaultsAPI.md#selectrandomvaultredeem)
- [sendLogged](/classes/DefaultVaultsAPI.md#sendlogged)
- [setAccount](/classes/DefaultVaultsAPI.md#setaccount)
- [unwrapCurrency](/classes/DefaultVaultsAPI.md#unwrapcurrency)
- [withdrawCollateral](/classes/DefaultVaultsAPI.md#withdrawcollateral)
- [wrapCurrency](/classes/DefaultVaultsAPI.md#wrapcurrency)
- [doesArrayContainEvent](/classes/DefaultVaultsAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultVaultsAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultVaultsAPI.md#printevents)
- [waitForEvent](/classes/DefaultVaultsAPI.md#waitforevent)

## Constructors

### constructor

• **new DefaultVaultsAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `collateralCurrency`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `btcNetwork` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[constructor](/classes/DefaultTransactionAPI.md#constructor)

#### Defined in

[src/parachain/vaults.ts:270](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L270)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

___

### btcNetwork

• `Private` **btcNetwork**: [`Network`](/interfaces/bitcoin.networks.Network.md)

#### Defined in

[src/parachain/vaults.ts:264](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L264)

___

### feeAPI

• **feeAPI**: [`FeeAPI`](/interfaces/FeeAPI.md)

#### Defined in

[src/parachain/vaults.ts:267](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L267)

___

### oracleAPI

• **oracleAPI**: [`OracleAPI`](/interfaces/OracleAPI.md)

#### Defined in

[src/parachain/vaults.ts:266](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L266)

___

### rewardsAPI

• **rewardsAPI**: [`RewardsAPI`](/interfaces/RewardsAPI.md)

#### Defined in

[src/parachain/vaults.ts:268](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L268)

___

### tokensAPI

• **tokensAPI**: [`TokensAPI`](/interfaces/TokensAPI.md)

#### Defined in

[src/parachain/vaults.ts:265](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L265)

## Methods

### calculateCapacity

▸ `Private` **calculateCapacity**<`C`\>(`collateral`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateral` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Defined in

[src/parachain/vaults.ts:572](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L572)

___

### computeBackingCollateral

▸ **computeBackingCollateral**(`vaultId`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |
| `nonce?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The entire collateral backing a vault's issued tokens.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[computeBackingCollateral](/interfaces/VaultsAPI.md#computebackingcollateral)

#### Defined in

[src/parachain/vaults.ts:369](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L369)

___

### depositCollateral

▸ **depositCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[depositCollateral](/interfaces/VaultsAPI.md#depositcollateral)

#### Defined in

[src/parachain/vaults.ts:312](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L312)

___

### get

▸ **get**(`vaultAccountId`, `collateralCurrencyIdLiteral`): `Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A vault object

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[get](/interfaces/VaultsAPI.md#get)

#### Defined in

[src/parachain/vaults.ts:333](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L333)

___

### getAPY

▸ **getAPY**(`vaultAccountId`, `collateralCurrency`): `Promise`<`Big`\>

Get the total APY for a vault based on the income in wrapped and collateral tokens
divided by the locked collateral.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrency` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`Big`\>

the APY as a percentage string

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getAPY](/interfaces/VaultsAPI.md#getapy)

#### Defined in

[src/parachain/vaults.ts:722](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L722)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getAccount](/interfaces/VaultsAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/transaction.ts#L26)

___

### getCollateral

▸ **getCollateral**(`vaultId`, `collateralCurrencyIdLiteral`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The collateral of a vault, taking slashes into account.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getCollateral](/interfaces/VaultsAPI.md#getcollateral)

#### Defined in

[src/parachain/vaults.ts:354](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L354)

___

### getCollateralizationFromVault

▸ **getCollateralizationFromVault**(`vaultId`, `onlyIssued?`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | `undefined` |
| `onlyIssued` | `boolean` | `false` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/vaults.ts:466](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L466)

___

### getCollateralizationFromVaultAndCollateral

▸ **getCollateralizationFromVaultAndCollateral**<`C`\>(`vaultId`, `newCollateral`, `onlyIssued`): `Promise`<`Big`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |
| `newCollateral` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |
| `onlyIssued` | `boolean` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/vaults.ts:475](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L475)

___

### getIssuableAmount

▸ **getIssuableAmount**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrency` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The amount of wrapped tokens issuable by this vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getIssuableAmount](/interfaces/VaultsAPI.md#getissuableamount)

#### Defined in

[src/parachain/vaults.ts:529](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L529)

___

### getIssuedAmount

▸ **getIssuedAmount**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrency` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The amount of wrapped tokens issued by the given vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getIssuedAmount](/interfaces/VaultsAPI.md#getissuedamount)

#### Defined in

[src/parachain/vaults.ts:521](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L521)

___

### getLiquidationCollateralThreshold

▸ **getLiquidationCollateralThreshold**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`Big`\>

The lower bound for vault collateralization.
If a Vault’s collateral rate
drops below this, automatic liquidation (forced Redeem) is triggered.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getLiquidationCollateralThreshold](/interfaces/VaultsAPI.md#getliquidationcollateralthreshold)

#### Defined in

[src/parachain/vaults.ts:695](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L695)

___

### getLiquidationVault

▸ **getLiquidationVault**(`collateralCurrency`): `Promise`<[`SystemVaultExt`](/interfaces/SystemVaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<[`SystemVaultExt`](/interfaces/SystemVaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A vault object representing the liquidation vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getLiquidationVault](/interfaces/VaultsAPI.md#getliquidationvault)

#### Defined in

[src/parachain/vaults.ts:406](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L406)

___

### getLiquidationVaultId

▸ **getLiquidationVaultId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The account id of the liquidation vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getLiquidationVaultId](/interfaces/VaultsAPI.md#getliquidationvaultid)

#### Defined in

[src/parachain/vaults.ts:400](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L400)

___

### getMaxNominationRatio

▸ **getMaxNominationRatio**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`Big`\>

The maximum collateral a vault can accept as nomination, as a ratio of its own collateral

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getMaxNominationRatio](/interfaces/VaultsAPI.md#getmaxnominationratio)

#### Defined in

[src/parachain/vaults.ts:361](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L361)

___

### getPremiumRedeemThreshold

▸ **getPremiumRedeemThreshold**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`Big`\>

The collateral rate at which users receive
a premium allocated from the Vault’s collateral, when performing a redeem with this Vault.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getPremiumRedeemThreshold](/interfaces/VaultsAPI.md#getpremiumredeemthreshold)

#### Defined in

[src/parachain/vaults.ts:705](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L705)

___

### getPremiumRedeemVaults

▸ **getPremiumRedeemVaults**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

Vaults below the premium redeem threshold, sorted in descending order of their redeemable tokens

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getPremiumRedeemVaults](/interfaces/VaultsAPI.md#getpremiumredeemvaults)

#### Defined in

[src/parachain/vaults.ts:609](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L609)

___

### getPunishmentFee

▸ **getPunishmentFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

Fee that a Vault has to pay, as a percentage, if it fails to execute
redeem or replace requests (for redeem, on top of the slashed wrapped-token-to-collateral
value of the request). The fee is paid in collateral currency based on the wrapped token
amount at the current exchange rate.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getPunishmentFee](/interfaces/VaultsAPI.md#getpunishmentfee)

#### Defined in

[src/parachain/vaults.ts:738](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L738)

___

### getRequiredCollateralForVault

▸ **getRequiredCollateralForVault**<`C`\>(`vaultAccountId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Get the amount of collateral required for the given vault to be at the
current SecureCollateralThreshold with the current exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The required collateral the vault needs to deposit to stay
above the threshold limit

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getRequiredCollateralForVault](/interfaces/VaultsAPI.md#getrequiredcollateralforvault)

#### Defined in

[src/parachain/vaults.ts:497](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L497)

___

### getSecureCollateralThreshold

▸ **getSecureCollateralThreshold**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`Big`\>

The over-collateralization rate for collateral locked
by Vaults, necessary for issuing wrapped tokens

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getSecureCollateralThreshold](/interfaces/VaultsAPI.md#getsecurecollateralthreshold)

#### Defined in

[src/parachain/vaults.ts:715](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L715)

___

### getStakingCapacity

▸ **getStakingCapacity**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrency` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

Staking capacity, as a collateral currency (e.g. DOT)

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getStakingCapacity](/interfaces/VaultsAPI.md#getstakingcapacity)

#### Defined in

[src/parachain/vaults.ts:386](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L386)

___

### getSystemCollateralization

▸ **getSystemCollateralization**(): `Promise`<`undefined` \| `Big`\>

#### Returns

`Promise`<`undefined` \| `Big`\>

#### Defined in

[src/parachain/vaults.ts:492](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L492)

___

### getTotalIssuableAmount

▸ **getTotalIssuableAmount**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total amount of wrapped tokens that can be issued, considering the collateral
locked by the vaults

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getTotalIssuableAmount](/interfaces/VaultsAPI.md#gettotalissuableamount)

#### Defined in

[src/parachain/vaults.ts:553](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L553)

___

### getTotalIssuedAmount

▸ **getTotalIssuedAmount**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total amount of wrapped tokens issued by the vaults

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getTotalIssuedAmount](/interfaces/VaultsAPI.md#gettotalissuedamount)

#### Defined in

[src/parachain/vaults.ts:548](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L548)

___

### getVaultCollateralization

▸ **getVaultCollateralization**<`C`\>(`vaultAccountId`, `collateralCurrencyIdLiteral`, `newCollateral?`, `onlyIssued?`): `Promise`<`undefined` \| `Big`\>

Get the collateralization of a single vault measured by dividing the value of issued (wrapped) tokens
by the value of total locked collateral.

**`remarks`** Undefined collateralization is handled as infinite collateralization in the UI.
If no tokens have been issued, the `collateralFunds / issuedFunds` ratio divides by zero,
which means collateralization is infinite.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | `undefined` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | `undefined` |
| `newCollateral?` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | `undefined` |
| `onlyIssued` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| `Big`\>

the vault collateralization

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getVaultCollateralization](/interfaces/VaultsAPI.md#getvaultcollateralization)

#### Defined in

[src/parachain/vaults.ts:430](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L430)

___

### getVaultsWithIssuableTokens

▸ **getVaultsWithIssuableTokens**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

Vaults with issuable tokens

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getVaultsWithIssuableTokens](/interfaces/VaultsAPI.md#getvaultswithissuabletokens)

#### Defined in

[src/parachain/vaults.ts:630](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L630)

___

### getVaultsWithRedeemableTokens

▸ **getVaultsWithRedeemableTokens**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

Vaults with redeemable tokens

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getVaultsWithRedeemableTokens](/interfaces/VaultsAPI.md#getvaultswithredeemabletokens)

#### Defined in

[src/parachain/vaults.ts:661](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L661)

___

### getWrappedCurrency

▸ **getWrappedCurrency**(): `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Returns

`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

The wrapped currency issued by the vaults

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getWrappedCurrency](/interfaces/VaultsAPI.md#getwrappedcurrency)

#### Defined in

[src/parachain/vaults.ts:286](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L286)

___

### isBelowPremiumThreshold

▸ **isBelowPremiumThreshold**(`vaultId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/parachain/vaults.ts:420](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L420)

___

### isNoTokensIssuedError

▸ `Private` **isNoTokensIssuedError**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Error` |

#### Returns

`boolean`

#### Defined in

[src/parachain/vaults.ts:416](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L416)

___

### isVaultFlaggedForTheft

▸ **isVaultFlaggedForTheft**(`vaultAccountId`, `collateralCurrencyIdLiteral`, `btcTxId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `btcTxId` | `string` |

#### Returns

`Promise`<`boolean`\>

A bollean value

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[isVaultFlaggedForTheft](/interfaces/VaultsAPI.md#isvaultflaggedfortheft)

#### Defined in

[src/parachain/vaults.ts:678](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L678)

___

### list

▸ **list**(`atBlock?`): `Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `atBlock?` | `BlockHash` |

#### Returns

`Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>[]\>

An array containing the vaults with non-zero backing collateral

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[list](/interfaces/VaultsAPI.md#list)

#### Defined in

[src/parachain/vaults.ts:323](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L323)

___

### parseVault

▸ **parseVault**(`vault`, `network`): `Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vault` | [`VaultRegistryVault`](/interfaces/VaultRegistryVault.md) |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

`Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Defined in

[src/parachain/vaults.ts:775](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L775)

___

### parseVaultStatus

▸ `Private` **parseVaultStatus**(`status`): [`VaultStatusExt`](/enums/VaultStatusExt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `VaultRegistryVaultStatus` |

#### Returns

[`VaultStatusExt`](/enums/VaultStatusExt.md)

#### Defined in

[src/parachain/vaults.ts:763](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L763)

___

### register

▸ **register**<`C`\>(`amount`, `publicKey`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |
| `publicKey` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:290](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L290)

___

### reportVaultTheft

▸ **reportVaultTheft**(`vaultAccountId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

A relayer may report Vault misbehavior by providing a fraud proof
(malicious Bitcoin transaction and transaction inclusion proof).

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `btcTxId?` | `string` |
| `merkleProof?` | `Bytes` |
| `rawTx?` | `Bytes` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[reportVaultTheft](/interfaces/VaultsAPI.md#reportvaulttheft)

#### Defined in

[src/parachain/vaults.ts:796](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L796)

___

### selectRandomVaultIssue

▸ **selectRandomVaultIssue**(`amount`): `Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

A vault that has sufficient collateral to issue the given amount

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[selectRandomVaultIssue](/interfaces/VaultsAPI.md#selectrandomvaultissue)

#### Defined in

[src/parachain/vaults.ts:588](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L588)

___

### selectRandomVaultRedeem

▸ **selectRandomVaultRedeem**(`amount`): `Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

A vault that has issued sufficient wrapped tokens to redeem the given amount

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[selectRandomVaultRedeem](/interfaces/VaultsAPI.md#selectrandomvaultredeem)

#### Defined in

[src/parachain/vaults.ts:598](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L598)

___

### sendLogged

▸ **sendLogged**<`T`\>(`transaction`, `successEventType?`): `Promise`<`ISubmittableResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `SubmittableExtrinsic`<``"promise"``, `ISubmittableResult`\> |
| `successEventType?` | `AugmentedEvent`<`ApiTypes`, `T`\> |

#### Returns

`Promise`<`ISubmittableResult`\>

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[sendLogged](/interfaces/VaultsAPI.md#sendlogged)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[sendLogged](/classes/DefaultTransactionAPI.md#sendlogged)

#### Defined in

[src/parachain/transaction.ts:30](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/transaction.ts#L30)

___

### setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |

#### Returns

`void`

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[setAccount](/interfaces/VaultsAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/transaction.ts#L22)

___

### unwrapCurrency

▸ `Private` **unwrapCurrency**<`C`\>(`wrappedBalance`): `MonetaryAmount`<`Currency`<`C`\>, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrappedBalance` | [`BalanceWrapper`](/interfaces/BalanceWrapper.md) |

#### Returns

`MonetaryAmount`<`Currency`<`C`\>, `C`\>

#### Defined in

[src/parachain/vaults.ts:754](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L754)

___

### withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[withdrawCollateral](/interfaces/VaultsAPI.md#withdrawcollateral)

#### Defined in

[src/parachain/vaults.ts:301](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L301)

___

### wrapCurrency

▸ `Private` **wrapCurrency**<`C`\>(`amount`): [`BalanceWrapper`](/interfaces/BalanceWrapper.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

[`BalanceWrapper`](/interfaces/BalanceWrapper.md)

#### Defined in

[src/parachain/vaults.ts:744](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L744)

___

### doesArrayContainEvent

▸ `Static` **doesArrayContainEvent**<`T`\>(`events`, `eventType`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `EventRecord`[] |
| `eventType` | `AugmentedEvent`<`ApiTypes`, `T`\> |

#### Returns

`boolean`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[doesArrayContainEvent](/classes/DefaultTransactionAPI.md#doesarraycontainevent)

#### Defined in

[src/parachain/transaction.ts:141](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/transaction.ts#L141)

___

### isDispatchError

▸ `Static` **isDispatchError**(`eventData`): eventData is DispatchError

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | `unknown` |

#### Returns

eventData is DispatchError

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[isDispatchError](/classes/DefaultTransactionAPI.md#isdispatcherror)

#### Defined in

[src/parachain/transaction.ts:137](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/transaction.ts#L137)

___

### printEvents

▸ `Static` **printEvents**(`api`, `events`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `events` | `EventRecord`[] |

#### Returns

`void`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[printEvents](/classes/DefaultTransactionAPI.md#printevents)

#### Defined in

[src/parachain/transaction.ts:78](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/transaction.ts#L78)

___

### waitForEvent

▸ `Static` **waitForEvent**<`T`\>(`api`, `event`, `timeoutMs`): `Promise`<`boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `event` | `AugmentedEvent`<`ApiTypes`, `T`\> |
| `timeoutMs` | `number` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[waitForEvent](/classes/DefaultTransactionAPI.md#waitforevent)

#### Defined in

[src/parachain/transaction.ts:108](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/transaction.ts#L108)
