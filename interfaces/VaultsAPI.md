[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / VaultsAPI

# Interface: VaultsAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/TransactionAPI.md)

  ↳ **`VaultsAPI`**

## Implemented by

- [`DefaultVaultsAPI`](/classes/DefaultVaultsAPI.md)

## Table of contents

### Methods

- [computeBackingCollateral](/interfaces/VaultsAPI.md#computebackingcollateral)
- [depositCollateral](/interfaces/VaultsAPI.md#depositcollateral)
- [get](/interfaces/VaultsAPI.md#get)
- [getAPY](/interfaces/VaultsAPI.md#getapy)
- [getAccount](/interfaces/VaultsAPI.md#getaccount)
- [getCollateral](/interfaces/VaultsAPI.md#getcollateral)
- [getIssuableAmount](/interfaces/VaultsAPI.md#getissuableamount)
- [getIssuedAmount](/interfaces/VaultsAPI.md#getissuedamount)
- [getLiquidationCollateralThreshold](/interfaces/VaultsAPI.md#getliquidationcollateralthreshold)
- [getLiquidationVault](/interfaces/VaultsAPI.md#getliquidationvault)
- [getLiquidationVaultId](/interfaces/VaultsAPI.md#getliquidationvaultid)
- [getMaxNominationRatio](/interfaces/VaultsAPI.md#getmaxnominationratio)
- [getPremiumRedeemThreshold](/interfaces/VaultsAPI.md#getpremiumredeemthreshold)
- [getPremiumRedeemVaults](/interfaces/VaultsAPI.md#getpremiumredeemvaults)
- [getPunishmentFee](/interfaces/VaultsAPI.md#getpunishmentfee)
- [getRequiredCollateralForVault](/interfaces/VaultsAPI.md#getrequiredcollateralforvault)
- [getSecureCollateralThreshold](/interfaces/VaultsAPI.md#getsecurecollateralthreshold)
- [getStakingCapacity](/interfaces/VaultsAPI.md#getstakingcapacity)
- [getTotalIssuableAmount](/interfaces/VaultsAPI.md#gettotalissuableamount)
- [getTotalIssuedAmount](/interfaces/VaultsAPI.md#gettotalissuedamount)
- [getVaultCollateralization](/interfaces/VaultsAPI.md#getvaultcollateralization)
- [getVaultsWithIssuableTokens](/interfaces/VaultsAPI.md#getvaultswithissuabletokens)
- [getVaultsWithRedeemableTokens](/interfaces/VaultsAPI.md#getvaultswithredeemabletokens)
- [getWrappedCurrency](/interfaces/VaultsAPI.md#getwrappedcurrency)
- [isVaultFlaggedForTheft](/interfaces/VaultsAPI.md#isvaultflaggedfortheft)
- [list](/interfaces/VaultsAPI.md#list)
- [reportVaultTheft](/interfaces/VaultsAPI.md#reportvaulttheft)
- [selectRandomVaultIssue](/interfaces/VaultsAPI.md#selectrandomvaultissue)
- [selectRandomVaultRedeem](/interfaces/VaultsAPI.md#selectrandomvaultredeem)
- [sendLogged](/interfaces/VaultsAPI.md#sendlogged)
- [setAccount](/interfaces/VaultsAPI.md#setaccount)
- [withdrawCollateral](/interfaces/VaultsAPI.md#withdrawcollateral)

## Methods

### computeBackingCollateral

▸ **computeBackingCollateral**(`vaultId`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | Vault ID object |
| `nonce?` | `number` | Nonce of the staking pool |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The entire collateral backing a vault's issued tokens.

#### Defined in

[src/parachain/vaults.ts:242](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L242)

___

### depositCollateral

▸ **depositCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | The amount of extra collateral to lock |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:204](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L204)

___

### get

▸ **get**(`vaultAccountId`, `collateralCurrencyIdLiteral`): `Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The ID of the vault to fetch |
| `collateralCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | Collateral used by vault |

#### Returns

`Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A vault object

#### Defined in

[src/parachain/vaults.ts:58](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L58)

___

### getAPY

▸ **getAPY**(`vaultAccountId`, `collateralCurrency`): `Promise`<`Big`\>

Get the total APY for a vault based on the income in wrapped and collateral tokens
divided by the locked collateral.

**`note`** this does not account for interest compounding

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault account ID |
| `collateralCurrency` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`Big`\>

the APY as a percentage string

#### Defined in

[src/parachain/vaults.ts:189](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L189)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Inherited from

[TransactionAPI](/interfaces/TransactionAPI.md).[getAccount](/interfaces/TransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:12](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/transaction.ts#L12)

___

### getCollateral

▸ **getCollateral**(`vaultId`, `collateralCurrencyIdLiteral`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The collateral of a vault, taking slashes into account.

#### Defined in

[src/parachain/vaults.ts:219](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L219)

___

### getIssuableAmount

▸ **getIssuableAmount**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault account ID |
| `collateralCurrency` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The amount of wrapped tokens issuable by this vault

#### Defined in

[src/parachain/vaults.ts:114](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L114)

___

### getIssuedAmount

▸ **getIssuedAmount**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault account ID |
| `collateralCurrency` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The amount of wrapped tokens issued by the given vault

#### Defined in

[src/parachain/vaults.ts:105](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L105)

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

#### Defined in

[src/parachain/vaults.ts:166](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L166)

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

#### Defined in

[src/parachain/vaults.ts:213](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L213)

___

### getLiquidationVaultId

▸ **getLiquidationVaultId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The account id of the liquidation vault

#### Defined in

[src/parachain/vaults.ts:208](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L208)

___

### getMaxNominationRatio

▸ **getMaxNominationRatio**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> | The collateral currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`Big`\>

The maximum collateral a vault can accept as nomination, as a ratio of its own collateral

#### Defined in

[src/parachain/vaults.ts:227](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L227)

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

#### Defined in

[src/parachain/vaults.ts:172](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L172)

___

### getPremiumRedeemVaults

▸ **getPremiumRedeemVaults**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

Vaults below the premium redeem threshold, sorted in descending order of their redeemable tokens

#### Defined in

[src/parachain/vaults.ts:140](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L140)

___

### getPunishmentFee

▸ **getPunishmentFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

Fee that a Vault has to pay, as a percentage, if it fails to execute
redeem or replace requests (for redeem, on top of the slashed wrapped-token-to-collateral
value of the request). The fee is paid in collateral currency based on the wrapped token
amount at the current exchange rate.

#### Defined in

[src/parachain/vaults.ts:196](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L196)

___

### getRequiredCollateralForVault

▸ **getRequiredCollateralForVault**<`C`\>(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Get the amount of collateral required for the given vault to be at the
current SecureCollateralThreshold with the current exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault account ID |
| `collateralCurrency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The required collateral the vault needs to deposit to stay
above the threshold limit

#### Defined in

[src/parachain/vaults.ts:96](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L96)

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

#### Defined in

[src/parachain/vaults.ts:178](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L178)

___

### getStakingCapacity

▸ **getStakingCapacity**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault account ID |
| `collateralCurrency` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

Staking capacity, as a collateral currency (e.g. DOT)

#### Defined in

[src/parachain/vaults.ts:233](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L233)

___

### getTotalIssuableAmount

▸ **getTotalIssuableAmount**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total amount of wrapped tokens that can be issued, considering the collateral
locked by the vaults

#### Defined in

[src/parachain/vaults.ts:126](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L126)

___

### getTotalIssuedAmount

▸ **getTotalIssuedAmount**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total amount of wrapped tokens issued by the vaults

#### Defined in

[src/parachain/vaults.ts:121](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L121)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | the vault account id |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral used by vault |
| `newCollateral?` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | use this instead of the vault's actual collateral |
| `onlyIssued?` | `boolean` | optional, defaults to `false`. Specifies whether the collateralization should only include the issued tokens, leaving out unsettled ("to-be-issued") tokens |

#### Returns

`Promise`<`undefined` \| `Big`\>

the vault collateralization

#### Defined in

[src/parachain/vaults.ts:73](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L73)

___

### getVaultsWithIssuableTokens

▸ **getVaultsWithIssuableTokens**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

Vaults with issuable tokens

#### Defined in

[src/parachain/vaults.ts:144](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L144)

___

### getVaultsWithRedeemableTokens

▸ **getVaultsWithRedeemableTokens**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

Vaults with redeemable tokens

#### Defined in

[src/parachain/vaults.ts:148](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L148)

___

### getWrappedCurrency

▸ **getWrappedCurrency**(): `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Returns

`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

The wrapped currency issued by the vaults

#### Defined in

[src/parachain/vaults.ts:260](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L260)

___

### isVaultFlaggedForTheft

▸ **isVaultFlaggedForTheft**(`vaultAccountId`, `collateralCurrencyIdLiteral`, `btcTxId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault account ID |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | - |
| `btcTxId` | `string` | ID of the Bitcoin transaction to check |

#### Returns

`Promise`<`boolean`\>

A bollean value

#### Defined in

[src/parachain/vaults.ts:155](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L155)

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

#### Defined in

[src/parachain/vaults.ts:52](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L52)

___

### reportVaultTheft

▸ **reportVaultTheft**(`vaultId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

A relayer may report Vault misbehavior by providing a fraud proof
(malicious Bitcoin transaction and transaction inclusion proof).

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The account of the vault to check. |
| `btcTxId?` | `string` | The hash of the transaction |
| `merkleProof?` | `Bytes` | The proof of tx inclusion. |
| `rawTx?` | `Bytes` | The raw Bitcoin transaction. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:256](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L256)

___

### selectRandomVaultIssue

▸ **selectRandomVaultIssue**(`amount`): `Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | Wrapped tokens amount to issue |

#### Returns

`Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

A vault that has sufficient collateral to issue the given amount

#### Defined in

[src/parachain/vaults.ts:131](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L131)

___

### selectRandomVaultRedeem

▸ **selectRandomVaultRedeem**(`amount`): `Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | Wrapped tokens amount to redeem |

#### Returns

`Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

A vault that has issued sufficient wrapped tokens to redeem the given amount

#### Defined in

[src/parachain/vaults.ts:136](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L136)

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

#### Inherited from

[TransactionAPI](/interfaces/TransactionAPI.md).[sendLogged](/interfaces/TransactionAPI.md#sendlogged)

#### Defined in

[src/parachain/transaction.ts:13](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/transaction.ts#L13)

___

### setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |

#### Returns

`void`

#### Inherited from

[TransactionAPI](/interfaces/TransactionAPI.md).[setAccount](/interfaces/TransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:11](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/transaction.ts#L11)

___

### withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | The amount of collateral to withdraw |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:200](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/vaults.ts#L200)
