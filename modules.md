[@interlay/interbtc-api](/README.md) / Exports

# @interlay/interbtc-api

## Table of contents

### Namespaces

- [bitcoin](/modules/bitcoin.md)

### Enumerations

- [CurrencyIdLiteral](/enums/CurrencyIdLiteral.md)
- [ExecuteRedeem](/enums/ExecuteRedeem.md)
- [IssueStatus](/enums/IssueStatus.md)
- [NominationStatus](/enums/NominationStatus.md)
- [RedeemStatus](/enums/RedeemStatus.md)
- [VaultStatusExt](/enums/VaultStatusExt.md)

### InterBTC Bridge Classes

- [DefaultInterBTCAPI](/classes/DefaultInterBTCAPI.md)

### Clients Classes

- [FaucetClient](/classes/FaucetClient.md)

### Other Classes

- [BitcoinCoreClient](/classes/BitcoinCoreClient.md)
- [DefaultBTCRelayAPI](/classes/DefaultBTCRelayAPI.md)
- [DefaultConstantsAPI](/classes/DefaultConstantsAPI.md)
- [DefaultElectrsAPI](/classes/DefaultElectrsAPI.md)
- [DefaultFeeAPI](/classes/DefaultFeeAPI.md)
- [DefaultIssueAPI](/classes/DefaultIssueAPI.md)
- [DefaultNominationAPI](/classes/DefaultNominationAPI.md)
- [DefaultOracleAPI](/classes/DefaultOracleAPI.md)
- [DefaultRedeemAPI](/classes/DefaultRedeemAPI.md)
- [DefaultRefundAPI](/classes/DefaultRefundAPI.md)
- [DefaultReplaceAPI](/classes/DefaultReplaceAPI.md)
- [DefaultRewardsAPI](/classes/DefaultRewardsAPI.md)
- [DefaultSystemAPI](/classes/DefaultSystemAPI.md)
- [DefaultTokensAPI](/classes/DefaultTokensAPI.md)
- [DefaultTransactionAPI](/classes/DefaultTransactionAPI.md)
- [DefaultVaultsAPI](/classes/DefaultVaultsAPI.md)
- [VaultExt](/classes/VaultExt.md)

### InterBTC Bridge Interfaces

- [BTCRelayAPI](/interfaces/BTCRelayAPI.md)
- [FeeAPI](/interfaces/FeeAPI.md)
- [IssueAPI](/interfaces/IssueAPI.md)
- [NominationAPI](/interfaces/NominationAPI.md)
- [OracleAPI](/interfaces/OracleAPI.md)
- [RedeemAPI](/interfaces/RedeemAPI.md)
- [RefundAPI](/interfaces/RefundAPI.md)
- [ReplaceAPI](/interfaces/ReplaceAPI.md)
- [SystemAPI](/interfaces/SystemAPI.md)
- [TokensAPI](/interfaces/TokensAPI.md)
- [VaultsAPI](/interfaces/VaultsAPI.md)

### Bitcoin Core Interfaces

- [ElectrsAPI](/interfaces/ElectrsAPI.md)

### InterBTC Bridge
The type Big represents Wrapped or Collateral token denominations,
while the type BN represents Planck or Satoshi denominations. Interfaces

- [ConstantsAPI](/interfaces/ConstantsAPI.md)

### Other Interfaces

- [BalanceWrapper](/interfaces/BalanceWrapper.md)
- [DecodedRequest](/interfaces/DecodedRequest.md)
- [DecodedRequestExt](/interfaces/DecodedRequestExt.md)
- [FundAccountJsonRpcRequest](/interfaces/FundAccountJsonRpcRequest.md)
- [InterBTCAPI](/interfaces/InterBTCAPI.md)
- [InterbtcPrimitivesCurrencyId](/interfaces/InterbtcPrimitivesCurrencyId.md)
- [InterbtcPrimitivesVaultId](/interfaces/InterbtcPrimitivesVaultId.md)
- [Issue](/interfaces/Issue.md)
- [IssueResult](/interfaces/IssueResult.md)
- [Redeem](/interfaces/Redeem.md)
- [RefundRequestExt](/interfaces/RefundRequestExt.md)
- [ReplaceRequestExt](/interfaces/ReplaceRequestExt.md)
- [RewardsAPI](/interfaces/RewardsAPI.md)
- [SignedFixedPoint](/interfaces/SignedFixedPoint.md)
- [SystemVaultExt](/interfaces/SystemVaultExt.md)
- [TransactionAPI](/interfaces/TransactionAPI.md)
- [UnsignedFixedPoint](/interfaces/UnsignedFixedPoint.md)
- [VaultRegistryVault](/interfaces/VaultRegistryVault.md)
- [WalletExt](/interfaces/WalletExt.md)

### Type aliases

- [BitcoinNetwork](/modules.md#bitcoinnetwork)
- [CollateralAmount](/modules.md#collateralamount)
- [CollateralCurrency](/modules.md#collateralcurrency)
- [CollateralIdLiteral](/modules.md#collateralidliteral)
- [CollateralUnit](/modules.md#collateralunit)
- [CurrencyUnit](/modules.md#currencyunit)
- [PHANTOM\_DEFAULT](/modules.md#phantom_default)
- [WrappedAmount](/modules.md#wrappedamount)
- [WrappedCurrency](/modules.md#wrappedcurrency)
- [WrappedIdLiteral](/modules.md#wrappedidliteral)

### Variables

- [ACCOUNT\_NOT\_SET\_ERROR\_MESSAGE](/modules.md#account_not_set_error_message)
- [CollateralAmount](/modules.md#collateralamount)
- [CollateralCurrency](/modules.md#collateralcurrency)
- [CollateralUnit](/modules.md#collateralunit)
- [CurrencyUnit](/modules.md#currencyunit)
- [FIXEDI128\_SCALING\_FACTOR](/modules.md#fixedi128_scaling_factor)
- [IGNORED\_ERROR\_MESSAGES](/modules.md#ignored_error_messages)
- [MBTC\_IN\_SAT](/modules.md#mbtc_in_sat)
- [PERCENTAGE\_GRANULARITY](/modules.md#percentage_granularity)
- [SLEEP\_TIME\_MS](/modules.md#sleep_time_ms)
- [WrappedAmount](/modules.md#wrappedamount)
- [WrappedCurrency](/modules.md#wrappedcurrency)

### Functions

- [addHexPrefix](/modules.md#addhexprefix)
- [allocateAmountsToVaults](/modules.md#allocateamountstovaults)
- [btcAddressFromParams](/modules.md#btcaddressfromparams)
- [computeLazyDistribution](/modules.md#computelazydistribution)
- [convertMoment](/modules.md#convertmoment)
- [createAPIRegistry](/modules.md#createapiregistry)
- [createExchangeRateOracleKey](/modules.md#createexchangerateoraclekey)
- [createInclusionOracleKey](/modules.md#createinclusionoraclekey)
- [createInterbtcAPI](/modules.md#createinterbtcapi)
- [createPolkadotAPI](/modules.md#createpolkadotapi)
- [createProvider](/modules.md#createprovider)
- [currencyIdToLiteral](/modules.md#currencyidtoliteral)
- [currencyIdToMonetaryCurrency](/modules.md#currencyidtomonetarycurrency)
- [decodeBtcAddress](/modules.md#decodebtcaddress)
- [decodeFixedPointType](/modules.md#decodefixedpointtype)
- [decodeVaultId](/modules.md#decodevaultid)
- [encodeBtcAddress](/modules.md#encodebtcaddress)
- [encodeUnsignedFixedPoint](/modules.md#encodeunsignedfixedpoint)
- [encodeVaultId](/modules.md#encodevaultid)
- [ensureHashEncoded](/modules.md#ensurehashencoded)
- [getAPITypes](/modules.md#getapitypes)
- [getBitcoinNetwork](/modules.md#getbitcoinnetwork)
- [getRPCTypes](/modules.md#getrpctypes)
- [getRequestIdsFromEvents](/modules.md#getrequestidsfromevents)
- [getStorageKey](/modules.md#getstoragekey)
- [getTxProof](/modules.md#gettxproof)
- [issueAndRedeem](/modules.md#issueandredeem)
- [issueSingle](/modules.md#issuesingle)
- [newAccountId](/modules.md#newaccountid)
- [newCollateralBTCExchangeRate](/modules.md#newcollateralbtcexchangerate)
- [newCurrencyId](/modules.md#newcurrencyid)
- [newMonetaryAmount](/modules.md#newmonetaryamount)
- [newVaultCurrencyPair](/modules.md#newvaultcurrencypair)
- [newVaultId](/modules.md#newvaultid)
- [parseIssueRequest](/modules.md#parseissuerequest)
- [parseRedeemRequest](/modules.md#parseredeemrequest)
- [parseRefundRequest](/modules.md#parserefundrequest)
- [parseReplaceRequest](/modules.md#parsereplacerequest)
- [parseSystemVault](/modules.md#parsesystemvault)
- [parseWallet](/modules.md#parsewallet)
- [queryNominationsMap](/modules.md#querynominationsmap)
- [redeem](/modules.md#redeem)
- [reverseEndianness](/modules.md#reverseendianness)
- [reverseEndiannessHex](/modules.md#reverseendiannesshex)
- [roundLastNDigits](/modules.md#roundlastndigits)
- [roundTwoDecimals](/modules.md#roundtwodecimals)
- [satToMBTC](/modules.md#sattombtc)
- [setCodecStorage](/modules.md#setcodecstorage)
- [setNumericStorage](/modules.md#setnumericstorage)
- [sleep](/modules.md#sleep)
- [storageKeyToNthInner](/modules.md#storagekeytonthinner)
- [stripHexPrefix](/modules.md#striphexprefix)
- [tickerToCurrencyIdLiteral](/modules.md#tickertocurrencyidliteral)
- [tickerToMonetaryCurrency](/modules.md#tickertomonetarycurrency)
- [uint8ArrayToString](/modules.md#uint8arraytostring)
- [unwrapRawExchangeRate](/modules.md#unwraprawexchangerate)
- [waitForBlockFinalization](/modules.md#waitforblockfinalization)
- [waitForBlockRelaying](/modules.md#waitforblockrelaying)

## Type aliases

### BitcoinNetwork

Ƭ **BitcoinNetwork**: ``"mainnet"`` \| ``"testnet"`` \| ``"regtest"``

#### Defined in

[src/types/bitcoinTypes.ts:1](https://github.com/interlay/interbtc-api/blob/3128908/src/types/bitcoinTypes.ts#L1)

___

### CollateralAmount

Ƭ **CollateralAmount**: typeof [`CollateralAmount`](/modules.md#collateralamount)[`number`]

#### Defined in

[src/types/currency.ts:40](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L40)

___

### CollateralCurrency

Ƭ **CollateralCurrency**: typeof [`CollateralCurrency`](/modules.md#collateralcurrency)[`number`]

#### Defined in

[src/types/currency.ts:43](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L43)

___

### CollateralIdLiteral

Ƭ **CollateralIdLiteral**: [`DOT`](/enums/CurrencyIdLiteral.md#dot) \| [`KSM`](/enums/CurrencyIdLiteral.md#ksm) \| [`KINT`](/enums/CurrencyIdLiteral.md#kint) \| [`INTR`](/enums/CurrencyIdLiteral.md#intr)

#### Defined in

[src/types/currency.ts:33](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L33)

___

### CollateralUnit

Ƭ **CollateralUnit**: typeof [`CollateralUnit`](/modules.md#collateralunit)[`number`]

#### Defined in

[src/types/currency.ts:46](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L46)

___

### CurrencyUnit

Ƭ **CurrencyUnit**: typeof [`CurrencyUnit`](/modules.md#currencyunit)[`number`]

#### Defined in

[src/types/currency.ts:49](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L49)

___

### PHANTOM\_DEFAULT

Ƭ **PHANTOM\_DEFAULT**: ``"default"``

#### Defined in

src/interfaces/default/types.ts:35

___

### WrappedAmount

Ƭ **WrappedAmount**: typeof [`WrappedAmount`](/modules.md#wrappedamount)[`number`]

#### Defined in

[src/types/currency.ts:55](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L55)

___

### WrappedCurrency

Ƭ **WrappedCurrency**: typeof [`WrappedCurrency`](/modules.md#wrappedcurrency)[`number`]

#### Defined in

[src/types/currency.ts:52](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L52)

___

### WrappedIdLiteral

Ƭ **WrappedIdLiteral**: [`INTERBTC`](/enums/CurrencyIdLiteral.md#interbtc) \| [`KBTC`](/enums/CurrencyIdLiteral.md#kbtc)

#### Defined in

[src/types/currency.ts:32](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L32)

## Variables

### ACCOUNT\_NOT\_SET\_ERROR\_MESSAGE

• **ACCOUNT\_NOT\_SET\_ERROR\_MESSAGE**: ``"cannot request without setting account"``

#### Defined in

[src/utils/constants.ts:8](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/constants.ts#L8)

___

### CollateralAmount

• **CollateralAmount**: (typeof `PolkadotAmount` \| typeof `KusamaAmount`)[]

#### Defined in

[src/types/currency.ts:39](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L39)

___

### CollateralCurrency

• **CollateralCurrency**: readonly [`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\>, `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\>]

#### Defined in

[src/types/currency.ts:42](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L42)

___

### CollateralUnit

• **CollateralUnit**: ({ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  })[]

#### Defined in

[src/types/currency.ts:45](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L45)

___

### CurrencyUnit

• **CurrencyUnit**: ({ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  })[]

#### Defined in

[src/types/currency.ts:48](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L48)

___

### FIXEDI128\_SCALING\_FACTOR

• **FIXEDI128\_SCALING\_FACTOR**: ``18``

#### Defined in

[src/utils/constants.ts:2](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/constants.ts#L2)

___

### IGNORED\_ERROR\_MESSAGES

• **IGNORED\_ERROR\_MESSAGES**: `string`[]

#### Defined in

[src/utils/constants.ts:6](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/constants.ts#L6)

___

### MBTC\_IN\_SAT

• **MBTC\_IN\_SAT**: ``100000``

#### Defined in

[src/utils/currency.ts:13](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/currency.ts#L13)

___

### PERCENTAGE\_GRANULARITY

• **PERCENTAGE\_GRANULARITY**: ``3``

#### Defined in

[src/utils/constants.ts:1](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/constants.ts#L1)

___

### SLEEP\_TIME\_MS

• **SLEEP\_TIME\_MS**: ``1000``

#### Defined in

[src/utils/issueRedeem.ts:29](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/issueRedeem.ts#L29)

___

### WrappedAmount

• **WrappedAmount**: typeof `InterBtcAmount`[]

#### Defined in

[src/types/currency.ts:54](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L54)

___

### WrappedCurrency

• **WrappedCurrency**: `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>[]

#### Defined in

[src/types/currency.ts:51](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L51)

## Functions

### addHexPrefix

▸ **addHexPrefix**(`str`): `string`

Ensure the `0x` hex prefix is present

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:79](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L79)

___

### allocateAmountsToVaults

▸ **allocateAmountsToVaults**<`U`\>(`vaultsWithAvailableAmounts`, `amountToAllocate`): `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

Given a list of vaults with availabilities (e.g. collateral for issue, tokens
for redeem) and an amount to allocate, selects one or more vaults to fulfil
the request.
If the amount cannot be allocated by a single vault, greedily selects the vault
with highest available amount and tries again for the remainder. If at leaast
one vault can fulfil a request alone, a random one among them is selected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultsWithAvailableAmounts` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<`U`\>, `U`\>\> |
| `amountToAllocate` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> |

#### Returns

`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

#### Defined in

[src/utils/issueRedeem.ts:75](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/issueRedeem.ts#L75)

___

### btcAddressFromParams

▸ **btcAddressFromParams**(`registry`, `params`): `BitcoinAddress`

#### Parameters

| Name | Type |
| :------ | :------ |
| `registry` | `TypeRegistry` |
| `params` | { `p2pkh`: `string` \| `H160`  } \| { `p2sh`: `string` \| `H160`  } \| { `p2wpkhv0`: `string` \| `H160`  } |

#### Returns

`BitcoinAddress`

#### Defined in

[src/utils/bitcoin.ts:59](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/bitcoin.ts#L59)

___

### computeLazyDistribution

▸ **computeLazyDistribution**(`stake`, `perToken`, `tally`): `Big`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stake` | `Big` |
| `perToken` | `Big` |
| `tally` | `Big` |

#### Returns

`Big`

#### Defined in

[src/utils/currency.ts:25](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/currency.ts#L25)

___

### convertMoment

▸ **convertMoment**(`moment`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moment` | `Moment` |

#### Returns

`Date`

#### Defined in

[src/utils/encoding.ts:301](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L301)

___

### createAPIRegistry

▸ **createAPIRegistry**(): `TypeRegistry`

#### Returns

`TypeRegistry`

#### Defined in

[src/factory.ts:49](https://github.com/interlay/interbtc-api/blob/3128908/src/factory.ts#L49)

___

### createExchangeRateOracleKey

▸ **createExchangeRateOracleKey**<`U`\>(`api`, `collateralCurrency`): `InterbtcPrimitivesOracleKey`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `collateralCurrency` | `Currency`<`U`\> |

#### Returns

`InterbtcPrimitivesOracleKey`

#### Defined in

[src/utils/currency.ts:66](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/currency.ts#L66)

___

### createInclusionOracleKey

▸ **createInclusionOracleKey**(`api`, `type`): `InterbtcPrimitivesOracleKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `type` | `FeeEstimationType` |

#### Returns

`InterbtcPrimitivesOracleKey`

#### Defined in

[src/utils/currency.ts:62](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/currency.ts#L62)

___

### createInterbtcAPI

▸ **createInterbtcAPI**(`endpoint`, `collateralCurrency`, `network?`, `wrappedCurrency?`, `account?`, `autoConnect?`): `Promise`<[`InterBTCAPI`](/interfaces/InterBTCAPI.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> | `undefined` |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"mainnet"` |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `InterBtc` |
| `account?` | `AddressOrPair` | `undefined` |
| `autoConnect?` | `number` \| ``false`` | `undefined` |

#### Returns

`Promise`<[`InterBTCAPI`](/interfaces/InterBTCAPI.md)\>

#### Defined in

[src/factory.ts:29](https://github.com/interlay/interbtc-api/blob/3128908/src/factory.ts#L29)

___

### createPolkadotAPI

▸ **createPolkadotAPI**(`endpoint`, `autoConnect?`): `Promise`<`ApiPromise`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `autoConnect?` | `number` \| ``false`` |

#### Returns

`Promise`<`ApiPromise`\>

#### Defined in

[src/factory.ts:24](https://github.com/interlay/interbtc-api/blob/3128908/src/factory.ts#L24)

___

### createProvider

▸ **createProvider**(`endpoint`, `autoConnect?`): `ProviderInterface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `autoConnect?` | `number` \| ``false`` |

#### Returns

`ProviderInterface`

#### Defined in

[src/factory.ts:14](https://github.com/interlay/interbtc-api/blob/3128908/src/factory.ts#L14)

___

### currencyIdToLiteral

▸ **currencyIdToLiteral**(`currencyId`): [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | `InterbtcPrimitivesCurrencyId` |

#### Returns

[`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md)

#### Defined in

[src/types/currency.ts:98](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L98)

___

### currencyIdToMonetaryCurrency

▸ **currencyIdToMonetaryCurrency**<`U`\>(`currencyId`): `Currency`<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | `InterbtcPrimitivesCurrencyId` |

#### Returns

`Currency`<`U`\>

#### Defined in

[src/types/currency.ts:81](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L81)

___

### decodeBtcAddress

▸ **decodeBtcAddress**(`address`, `network`): { `p2pkh`: `string`  } \| { `p2sh`: `string`  } \| { `p2wpkhv0`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

{ `p2pkh`: `string`  } \| { `p2sh`: `string`  } \| { `p2wpkhv0`: `string`  }

#### Defined in

[src/utils/bitcoin.ts:69](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/bitcoin.ts#L69)

___

### decodeFixedPointType

▸ **decodeFixedPointType**(`x`): `Big`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`SignedFixedPoint`](/interfaces/SignedFixedPoint.md) \| [`UnsignedFixedPoint`](/interfaces/UnsignedFixedPoint.md) |

#### Returns

`Big`

#### Defined in

[src/utils/encoding.ts:116](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L116)

___

### decodeVaultId

▸ **decodeVaultId**(`api`, `id`): [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `id` | `string` |

#### Returns

[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

[src/utils/encoding.ts:315](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L315)

___

### encodeBtcAddress

▸ **encodeBtcAddress**(`address`, `network`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `BitcoinAddress` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

`string`

#### Defined in

[src/utils/bitcoin.ts:13](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/bitcoin.ts#L13)

___

### encodeUnsignedFixedPoint

▸ **encodeUnsignedFixedPoint**(`api`, `x`): [`UnsignedFixedPoint`](/interfaces/UnsignedFixedPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `x` | `Big` |

#### Returns

[`UnsignedFixedPoint`](/interfaces/UnsignedFixedPoint.md)

#### Defined in

[src/utils/encoding.ts:122](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L122)

___

### encodeVaultId

▸ **encodeVaultId**(`id`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:309](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L309)

___

### ensureHashEncoded

▸ **ensureHashEncoded**(`api`, `hash`): `H256`

Ensure a hash value is an encoded H256

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | The polkadot API promise used to encode if necessary |
| `hash` | `string` \| `H256` | The either H256 or string encoded hash |

#### Returns

`H256`

#### Defined in

[src/utils/encoding.ts:88](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L88)

___

### getAPITypes

▸ **getAPITypes**(): `RegistryTypes`

#### Returns

`RegistryTypes`

#### Defined in

[src/factory.ts:41](https://github.com/interlay/interbtc-api/blob/3128908/src/factory.ts#L41)

___

### getBitcoinNetwork

▸ **getBitcoinNetwork**(`network?`): [`Network`](/interfaces/bitcoin.networks.Network.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"mainnet"` |

#### Returns

[`Network`](/interfaces/bitcoin.networks.Network.md)

#### Defined in

[src/interbtc-api.ts:28](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L28)

___

### getRPCTypes

▸ **getRPCTypes**(): `Record`<`string`, `Record`<`string`, `DefinitionRpc` \| `DefinitionRpcSub`\>\>

#### Returns

`Record`<`string`, `Record`<`string`, `DefinitionRpc` \| `DefinitionRpcSub`\>\>

#### Defined in

[src/factory.ts:45](https://github.com/interlay/interbtc-api/blob/3128908/src/factory.ts#L45)

___

### getRequestIdsFromEvents

▸ **getRequestIdsFromEvents**(`events`, `eventToFind`, `api`): `Hash`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `EventRecord`[] | The EventRecord array returned after sending a transaction |
| `eventToFind` | `AugmentedEvent`<`ApiTypes`, `AnyTuple`\> | - |
| `api` | `ApiPromise` | - |

#### Returns

`Hash`[]

The id associated with the transaction. If the EventRecord array does not
contain required events, the function throws an error.

#### Defined in

[src/utils/issueRedeem.ts:49](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/issueRedeem.ts#L49)

___

### getStorageKey

▸ **getStorageKey**(`moduleName`, `storageItemName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `storageItemName` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/storage.ts:11](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/storage.ts#L11)

___

### getTxProof

▸ **getTxProof**(`electrsAPI`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<[`Bytes`, `Bytes`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `btcTxId?` | `string` |
| `merkleProof?` | `Bytes` |
| `rawTx?` | `Bytes` |

#### Returns

`Promise`<[`Bytes`, `Bytes`]\>

#### Defined in

[src/utils/bitcoin.ts:85](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/bitcoin.ts#L85)

___

### issueAndRedeem

▸ **issueAndRedeem**(`api`, `electrsAPI`, `btcRelayAPI`, `bitcoinCoreClient`, `account`, `collateralCurrency`, `vaultId?`, `issueAmount?`, `redeemAmount?`, `autoExecuteIssue?`, `autoExecuteRedeem?`, `triggerRefund?`, `network?`, `atomic?`): `Promise`<[[`Issue`](/interfaces/Issue.md), [`Redeem`](/interfaces/Redeem.md)]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) | `undefined` |
| `btcRelayAPI` | [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md) | `undefined` |
| `bitcoinCoreClient` | [`BitcoinCoreClient`](/classes/BitcoinCoreClient.md) | `undefined` |
| `account` | `KeyringPair` | `undefined` |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> | `undefined` |
| `vaultId?` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | `undefined` |
| `issueAmount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `undefined` |
| `redeemAmount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `undefined` |
| `autoExecuteIssue` | `boolean` | `true` |
| `autoExecuteRedeem` | [`ExecuteRedeem`](/enums/ExecuteRedeem.md) | `ExecuteRedeem.Auto` |
| `triggerRefund` | `boolean` | `false` |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"regtest"` |
| `atomic` | `boolean` | `true` |

#### Returns

`Promise`<[[`Issue`](/interfaces/Issue.md), [`Redeem`](/interfaces/Redeem.md)]\>

#### Defined in

[src/utils/issueRedeem.ts:249](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/issueRedeem.ts#L249)

___

### issueSingle

▸ **issueSingle**(`api`, `electrsAPI`, `bitcoinCoreClient`, `issuingAccount`, `amount`, `collateralCurrency`, `vaultId?`, `autoExecute?`, `triggerRefund?`, `network?`, `atomic?`): `Promise`<[`IssueResult`](/interfaces/IssueResult.md)<`BitcoinUnit`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) | `undefined` |
| `bitcoinCoreClient` | [`BitcoinCoreClient`](/classes/BitcoinCoreClient.md) | `undefined` |
| `issuingAccount` | `KeyringPair` | `undefined` |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `undefined` |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> | `undefined` |
| `vaultId?` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | `undefined` |
| `autoExecute` | `boolean` | `true` |
| `triggerRefund` | `boolean` | `false` |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"regtest"` |
| `atomic` | `boolean` | `true` |

#### Returns

`Promise`<[`IssueResult`](/interfaces/IssueResult.md)<`BitcoinUnit`\>\>

#### Defined in

[src/utils/issueRedeem.ts:112](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/issueRedeem.ts#L112)

___

### newAccountId

▸ **newAccountId**(`api`, `accountId`): `AccountId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `accountId` | `string` |

#### Returns

`AccountId`

#### Defined in

[src/utils/encoding.ts:165](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L165)

___

### newCollateralBTCExchangeRate

▸ **newCollateralBTCExchangeRate**<`U`\>(`rate`, `counterCurrency`, `useBaseUnits?`): `ExchangeRate`<`Bitcoin`, `BitcoinUnit`, `Currency`<`U`\>, `U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rate` | `Big` | `undefined` |
| `counterCurrency` | `Currency`<`U`\> | `undefined` |
| `useBaseUnits` | `boolean` | `false` |

#### Returns

`ExchangeRate`<`Bitcoin`, `BitcoinUnit`, `Currency`<`U`\>, `U`\>

#### Defined in

[src/utils/currency.ts:45](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/currency.ts#L45)

___

### newCurrencyId

▸ **newCurrencyId**(`api`, `currency`): `InterbtcPrimitivesCurrencyId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `currency` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |

#### Returns

`InterbtcPrimitivesCurrencyId`

#### Defined in

[src/utils/encoding.ts:195](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L195)

___

### newMonetaryAmount

▸ **newMonetaryAmount**<`U`\>(`amount`, `currency`, `base?`): `MonetaryAmount`<`Currency`<`U`\>, `U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `BigSource` | `undefined` |
| `currency` | `Currency`<`U`\> | `undefined` |
| `base` | `boolean` | `false` |

#### Returns

`MonetaryAmount`<`Currency`<`U`\>, `U`\>

#### Defined in

[src/utils/currency.ts:36](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/currency.ts#L36)

___

### newVaultCurrencyPair

▸ **newVaultCurrencyPair**(`api`, `collateralCurrency`, `wrappedCurrency`): `InterbtcPrimitivesVaultCurrencyPair`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`InterbtcPrimitivesVaultCurrencyPair`

#### Defined in

[src/utils/encoding.ts:180](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L180)

___

### newVaultId

▸ **newVaultId**(`api`, `accountId`, `collateralCurrency`, `wrappedCurrency`): [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `accountId` | `string` |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

[src/utils/encoding.ts:169](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L169)

___

### parseIssueRequest

▸ **parseIssueRequest**(`vaultsAPI`, `req`, `network`, `id`): `Promise`<[`Issue`](/interfaces/Issue.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultsAPI` | [`VaultsAPI`](/interfaces/VaultsAPI.md) |
| `req` | `InterbtcPrimitivesIssueIssueRequest` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `id` | `string` \| `H256` |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)\>

#### Defined in

[src/utils/encoding.ts:242](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L242)

___

### parseRedeemRequest

▸ **parseRedeemRequest**(`vaultsAPI`, `req`, `network`, `id`): `Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultsAPI` | [`VaultsAPI`](/interfaces/VaultsAPI.md) |
| `req` | `InterbtcPrimitivesRedeemRedeemRequest` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `id` | `string` \| `H256` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Defined in

[src/utils/encoding.ts:270](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L270)

___

### parseRefundRequest

▸ **parseRefundRequest**(`req`, `network`, `wrappedCurrency`): [`RefundRequestExt`](/interfaces/RefundRequestExt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `InterbtcPrimitivesRefundRefundRequest` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

[`RefundRequestExt`](/interfaces/RefundRequestExt.md)

#### Defined in

[src/utils/encoding.ts:199](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L199)

___

### parseReplaceRequest

▸ **parseReplaceRequest**(`vaultsAPI`, `req`, `network`, `wrappedCurrency`): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultsAPI` | [`VaultsAPI`](/interfaces/VaultsAPI.md) |
| `req` | `InterbtcPrimitivesReplaceReplaceRequest` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>

#### Defined in

[src/utils/encoding.ts:216](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L216)

___

### parseSystemVault

▸ **parseSystemVault**(`vault`, `wrappedCurrency`): [`SystemVaultExt`](/interfaces/SystemVaultExt.md)<`BitcoinUnit`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vault` | `VaultRegistrySystemVault` |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

[`SystemVaultExt`](/interfaces/SystemVaultExt.md)<`BitcoinUnit`\>

#### Defined in

[src/utils/encoding.ts:157](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L157)

___

### parseWallet

▸ **parseWallet**(`wallet`, `network`): [`WalletExt`](/interfaces/WalletExt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `VaultRegistryWallet` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

[`WalletExt`](/interfaces/WalletExt.md)

#### Defined in

[src/utils/encoding.ts:143](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L143)

___

### queryNominationsMap

▸ **queryNominationsMap**(`map`, `vaultId`): `number` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `number`\> |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |

#### Returns

`number` \| `undefined`

#### Defined in

[src/utils/encoding.ts:340](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L340)

___

### redeem

▸ **redeem**(`api`, `electrsAPI`, `bitcoinCoreClient`, `btcRelayAPI`, `redeemingAccount`, `amount`, `collateralCurrency`, `vaultId?`, `autoExecute?`, `network?`, `atomic?`, `timeout?`, `retries?`): `Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) | `undefined` |
| `bitcoinCoreClient` | [`BitcoinCoreClient`](/classes/BitcoinCoreClient.md) | `undefined` |
| `btcRelayAPI` | [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md) | `undefined` |
| `redeemingAccount` | `KeyringPair` | `undefined` |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `undefined` |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> | `undefined` |
| `vaultId?` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | `undefined` |
| `autoExecute` | [`ExecuteRedeem`](/enums/ExecuteRedeem.md) | `ExecuteRedeem.Auto` |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"regtest"` |
| `atomic` | `boolean` | `true` |
| `timeout` | `number` | `undefined` |
| `retries` | `number` | `0` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Defined in

[src/utils/issueRedeem.ts:197](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/issueRedeem.ts#L197)

___

### reverseEndianness

▸ **reverseEndianness**(`bytes`): `Uint8Array`

Converts endianness of a Uint8Array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | Uint8Array, to be converted LE<>BE |

#### Returns

`Uint8Array`

#### Defined in

[src/utils/encoding.ts:49](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L49)

___

### reverseEndiannessHex

▸ **reverseEndiannessHex**(`hex`): `string`

Reverse the endianness of the given hex string

**`dev`** Will remove `0x` prefix if present

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:101](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L101)

___

### roundLastNDigits

▸ **roundLastNDigits**(`n`, `x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `x` | `string` \| `Big` \| `BN` |

#### Returns

`string`

#### Defined in

[src/utils/currency.ts:29](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/currency.ts#L29)

___

### roundTwoDecimals

▸ **roundTwoDecimals**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/currency.ts:15](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/currency.ts#L15)

___

### satToMBTC

▸ **satToMBTC**(`sat`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sat` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/currency.ts:20](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/currency.ts#L20)

___

### setCodecStorage

▸ **setCodecStorage**(`api`, `moduleName`, `storageItemName`, `value`, `transactionAPI`, `isLittleEndian?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `moduleName` | `string` | `undefined` |
| `storageItemName` | `string` | `undefined` |
| `value` | `Codec` | `undefined` |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) | `undefined` |
| `isLittleEndian` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/storage.ts:28](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/storage.ts#L28)

___

### setNumericStorage

▸ **setNumericStorage**(`api`, `moduleName`, `storageItemName`, `value`, `transactionAPI`, `bits?`, `isLittleEndian?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `moduleName` | `string` | `undefined` |
| `storageItemName` | `string` | `undefined` |
| `value` | `BN` | `undefined` |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) | `undefined` |
| `bits` | `number` | `32` |
| `isLittleEndian` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/storage.ts:15](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/storage.ts#L15)

___

### sleep

▸ **sleep**(`ms`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/issueRedeem.ts:193](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/issueRedeem.ts#L193)

___

### storageKeyToNthInner

▸ **storageKeyToNthInner**<`T`\>(`s`, `n?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `s` | `StorageKey`<`T`[]\> | `undefined` |
| `n` | `number` | `0` |

#### Returns

`T`

#### Defined in

[src/utils/encoding.ts:130](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L130)

___

### stripHexPrefix

▸ **stripHexPrefix**(`str`): `string`

Remove the `0x` hex prefix if present

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:71](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L71)

___

### tickerToCurrencyIdLiteral

▸ **tickerToCurrencyIdLiteral**(`ticker`): [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticker` | `string` |

#### Returns

[`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md)

#### Defined in

[src/types/currency.ts:57](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L57)

___

### tickerToMonetaryCurrency

▸ **tickerToMonetaryCurrency**<`U`\>(`api`, `ticker`): `Currency`<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `ticker` | `string` |

#### Returns

`Currency`<`U`\>

#### Defined in

[src/types/currency.ts:103](https://github.com/interlay/interbtc-api/blob/3128908/src/types/currency.ts#L103)

___

### uint8ArrayToString

▸ **uint8ArrayToString**(`bytes`): `string`

Converts a Uint8Array to string

**`dev`** Will remove `0x` prefix if present

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:112](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L112)

___

### unwrapRawExchangeRate

▸ **unwrapRawExchangeRate**(`option`): [`UnsignedFixedPoint`](/interfaces/UnsignedFixedPoint.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `Option`<[`UnsignedFixedPoint`](/interfaces/UnsignedFixedPoint.md)\> |

#### Returns

[`UnsignedFixedPoint`](/interfaces/UnsignedFixedPoint.md) \| `undefined`

#### Defined in

[src/utils/encoding.ts:305](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/encoding.ts#L305)

___

### waitForBlockFinalization

▸ **waitForBlockFinalization**(`bitcoinCoreClient`, `btcRelayAPI`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitcoinCoreClient` | [`BitcoinCoreClient`](/classes/BitcoinCoreClient.md) |
| `btcRelayAPI` | [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bitcoin.ts:111](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/bitcoin.ts#L111)

___

### waitForBlockRelaying

▸ **waitForBlockRelaying**(`btcRelayAPI`, `blockHash`, `sleepMs?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `btcRelayAPI` | [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md) | `undefined` |
| `blockHash` | `string` | `undefined` |
| `sleepMs` | `number` | `SLEEP_TIME_MS` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bitcoin.ts:100](https://github.com/interlay/interbtc-api/blob/3128908/src/utils/bitcoin.ts#L100)
