[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultInterBTCAPI

# Class: DefaultInterBTCAPI

## Implements

- [`InterBTCAPI`](/interfaces/InterBTCAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultInterBTCAPI.md#constructor)

### Properties

- [api](/classes/DefaultInterBTCAPI.md#api)
- [btcRelay](/classes/DefaultInterBTCAPI.md#btcrelay)
- [electrsAPI](/classes/DefaultInterBTCAPI.md#electrsapi)
- [faucet](/classes/DefaultInterBTCAPI.md#faucet)
- [fee](/classes/DefaultInterBTCAPI.md#fee)
- [issue](/classes/DefaultInterBTCAPI.md#issue)
- [nomination](/classes/DefaultInterBTCAPI.md#nomination)
- [oracle](/classes/DefaultInterBTCAPI.md#oracle)
- [pools](/classes/DefaultInterBTCAPI.md#pools)
- [redeem](/classes/DefaultInterBTCAPI.md#redeem)
- [refund](/classes/DefaultInterBTCAPI.md#refund)
- [replace](/classes/DefaultInterBTCAPI.md#replace)
- [system](/classes/DefaultInterBTCAPI.md#system)
- [tokens](/classes/DefaultInterBTCAPI.md#tokens)
- [vaults](/classes/DefaultInterBTCAPI.md#vaults)

### Accessors

- [account](/classes/DefaultInterBTCAPI.md#account)

### Methods

- [setAccount](/classes/DefaultInterBTCAPI.md#setaccount)

## Constructors

### constructor

• **new DefaultInterBTCAPI**(`api`, `collateralCurrency`, `network?`, `wrappedCurrency?`, `_account?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> | `undefined` |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"mainnet"` |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `InterBtc` |
| `_account?` | `AddressOrPair` | `undefined` |

#### Defined in

[src/interbtc-api.ts:78](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L78)

## Properties

### api

• `Readonly` **api**: `ApiPromise`

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[api](/interfaces/InterBTCAPI.md#api)

___

### btcRelay

• `Readonly` **btcRelay**: [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[btcRelay](/interfaces/InterBTCAPI.md#btcrelay)

#### Defined in

[src/interbtc-api.ts:70](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L70)

___

### electrsAPI

• `Readonly` **electrsAPI**: [`ElectrsAPI`](/interfaces/ElectrsAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[electrsAPI](/interfaces/InterBTCAPI.md#electrsapi)

#### Defined in

[src/interbtc-api.ts:69](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L69)

___

### faucet

• `Readonly` **faucet**: [`FaucetClient`](/classes/FaucetClient.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[faucet](/interfaces/InterBTCAPI.md#faucet)

#### Defined in

[src/interbtc-api.ts:67](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L67)

___

### fee

• `Readonly` **fee**: [`FeeAPI`](/interfaces/FeeAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[fee](/interfaces/InterBTCAPI.md#fee)

#### Defined in

[src/interbtc-api.ts:74](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L74)

___

### issue

• `Readonly` **issue**: [`IssueAPI`](/interfaces/IssueAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[issue](/interfaces/InterBTCAPI.md#issue)

#### Defined in

[src/interbtc-api.ts:64](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L64)

___

### nomination

• `Readonly` **nomination**: [`NominationAPI`](/interfaces/NominationAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[nomination](/interfaces/InterBTCAPI.md#nomination)

#### Defined in

[src/interbtc-api.ts:75](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L75)

___

### oracle

• `Readonly` **oracle**: [`OracleAPI`](/interfaces/OracleAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[oracle](/interfaces/InterBTCAPI.md#oracle)

#### Defined in

[src/interbtc-api.ts:68](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L68)

___

### pools

• `Readonly` **pools**: [`RewardsAPI`](/interfaces/RewardsAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[pools](/interfaces/InterBTCAPI.md#pools)

#### Defined in

[src/interbtc-api.ts:76](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L76)

___

### redeem

• `Readonly` **redeem**: [`RedeemAPI`](/interfaces/RedeemAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[redeem](/interfaces/InterBTCAPI.md#redeem)

#### Defined in

[src/interbtc-api.ts:65](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L65)

___

### refund

• `Readonly` **refund**: [`RefundAPI`](/interfaces/RefundAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[refund](/interfaces/InterBTCAPI.md#refund)

#### Defined in

[src/interbtc-api.ts:66](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L66)

___

### replace

• `Readonly` **replace**: [`ReplaceAPI`](/interfaces/ReplaceAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[replace](/interfaces/InterBTCAPI.md#replace)

#### Defined in

[src/interbtc-api.ts:73](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L73)

___

### system

• `Readonly` **system**: [`SystemAPI`](/interfaces/SystemAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[system](/interfaces/InterBTCAPI.md#system)

#### Defined in

[src/interbtc-api.ts:72](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L72)

___

### tokens

• `Readonly` **tokens**: [`TokensAPI`](/interfaces/TokensAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[tokens](/interfaces/InterBTCAPI.md#tokens)

#### Defined in

[src/interbtc-api.ts:71](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L71)

___

### vaults

• `Readonly` **vaults**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[vaults](/interfaces/InterBTCAPI.md#vaults)

#### Defined in

[src/interbtc-api.ts:63](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L63)

## Accessors

### account

• `get` **account**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[account](/interfaces/InterBTCAPI.md#account)

#### Defined in

[src/interbtc-api.ts:133](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L133)

## Methods

### setAccount

▸ **setAccount**(`account`, `signer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |
| `signer?` | `Signer` |

#### Returns

`void`

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[setAccount](/interfaces/InterBTCAPI.md#setaccount)

#### Defined in

[src/interbtc-api.ts:116](https://github.com/interlay/interbtc-api/blob/3128908/src/interbtc-api.ts#L116)
