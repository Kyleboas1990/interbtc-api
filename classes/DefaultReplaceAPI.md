[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultReplaceAPI

# Class: DefaultReplaceAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultReplaceAPI`**

## Implements

- [`ReplaceAPI`](/interfaces/ReplaceAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultReplaceAPI.md#constructor)

### Properties

- [api](/classes/DefaultReplaceAPI.md#api)
- [btcNetwork](/classes/DefaultReplaceAPI.md#btcnetwork)
- [feeAPI](/classes/DefaultReplaceAPI.md#feeapi)
- [vaultsAPI](/classes/DefaultReplaceAPI.md#vaultsapi)

### Methods

- [accept](/classes/DefaultReplaceAPI.md#accept)
- [execute](/classes/DefaultReplaceAPI.md#execute)
- [getAccount](/classes/DefaultReplaceAPI.md#getaccount)
- [getDustValue](/classes/DefaultReplaceAPI.md#getdustvalue)
- [getNewVaultReplaceRequests](/classes/DefaultReplaceAPI.md#getnewvaultreplacerequests)
- [getOldVaultReplaceRequests](/classes/DefaultReplaceAPI.md#getoldvaultreplacerequests)
- [getReplacePeriod](/classes/DefaultReplaceAPI.md#getreplaceperiod)
- [getRequestById](/classes/DefaultReplaceAPI.md#getrequestbyid)
- [list](/classes/DefaultReplaceAPI.md#list)
- [map](/classes/DefaultReplaceAPI.md#map)
- [mapReplaceRequests](/classes/DefaultReplaceAPI.md#mapreplacerequests)
- [parseRequestsAsync](/classes/DefaultReplaceAPI.md#parserequestsasync)
- [request](/classes/DefaultReplaceAPI.md#request)
- [sendLogged](/classes/DefaultReplaceAPI.md#sendlogged)
- [setAccount](/classes/DefaultReplaceAPI.md#setaccount)
- [withdraw](/classes/DefaultReplaceAPI.md#withdraw)
- [doesArrayContainEvent](/classes/DefaultReplaceAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultReplaceAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultReplaceAPI.md#printevents)
- [waitForEvent](/classes/DefaultReplaceAPI.md#waitforevent)

## Constructors

### constructor

• **new DefaultReplaceAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `collateralCurrency`, `account?`)

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

[src/parachain/replace.ts:107](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L107)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

___

### btcNetwork

• `Private` **btcNetwork**: [`Network`](/interfaces/bitcoin.networks.Network.md)

#### Defined in

[src/parachain/replace.ts:103](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L103)

___

### feeAPI

• `Private` **feeAPI**: [`FeeAPI`](/interfaces/FeeAPI.md)

#### Defined in

[src/parachain/replace.ts:104](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L104)

___

### vaultsAPI

• `Private` **vaultsAPI**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Defined in

[src/parachain/replace.ts:105](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L105)

## Methods

### accept

▸ **accept**(`oldVault`, `amount`, `collateral`, `btcAddress`): `Promise`<`void`\>

Accept a replace request

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldVault` | `AccountId` |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateral` | `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `btcAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[accept](/interfaces/ReplaceAPI.md#accept)

#### Defined in

[src/parachain/replace.ts:161](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L161)

___

### execute

▸ **execute**(`requestId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Execute a replace request

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |
| `btcTxId?` | `string` |
| `merkleProof?` | `Bytes` |
| `rawTx?` | `Bytes` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[execute](/interfaces/ReplaceAPI.md#execute)

#### Defined in

[src/parachain/replace.ts:185](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L185)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[getAccount](/interfaces/ReplaceAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/transaction.ts#L26)

___

### getDustValue

▸ **getDustValue**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The minimum amount of btc that is accepted for replace requests; any lower values would
risk the bitcoin client to reject the payment

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[getDustValue](/interfaces/ReplaceAPI.md#getdustvalue)

#### Defined in

[src/parachain/replace.ts:192](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L192)

___

### getNewVaultReplaceRequests

▸ **getNewVaultReplaceRequests**(`vaultAccountId`): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

#### Defined in

[src/parachain/replace.ts:266](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L266)

___

### getOldVaultReplaceRequests

▸ **getOldVaultReplaceRequests**(`vaultAccountId`): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

#### Defined in

[src/parachain/replace.ts:262](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L262)

___

### getReplacePeriod

▸ **getReplacePeriod**(): `Promise`<`BlockNumber`\>

#### Returns

`Promise`<`BlockNumber`\>

The time difference in number of blocks between when a replace request is created
and required completion time by a vault. The replace period has an upper limit
to prevent griefing of vault collateral.

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[getReplacePeriod](/interfaces/ReplaceAPI.md#getreplaceperiod)

#### Defined in

[src/parachain/replace.ts:198](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L198)

___

### getRequestById

▸ **getRequestById**(`replaceId`): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `replaceId` | `string` \| `H256` |

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>

A replace request object

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[getRequestById](/interfaces/ReplaceAPI.md#getrequestbyid)

#### Defined in

[src/parachain/replace.ts:240](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L240)

___

### list

▸ **list**(): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

An array containing the replace requests

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[list](/interfaces/ReplaceAPI.md#list)

#### Defined in

[src/parachain/replace.ts:203](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L203)

___

### map

▸ **map**(): `Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>\>

#### Returns

`Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>\>

A mapping from the replace request ID to the replace request object

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[map](/interfaces/ReplaceAPI.md#map)

#### Defined in

[src/parachain/replace.ts:214](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L214)

___

### mapReplaceRequests

▸ **mapReplaceRequests**(`vaultAccountId`): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

Fetch the replace requests associated with a vault. In the returned requests,
the vault is either the replaced or the replacing one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

An array with replace requests involving said vault

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[mapReplaceRequests](/interfaces/ReplaceAPI.md#mapreplacerequests)

#### Defined in

[src/parachain/replace.ts:250](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L250)

___

### parseRequestsAsync

▸ **parseRequestsAsync**(`requestPairs`): `Promise`<[`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestPairs` | [`H256`, `InterbtcPrimitivesReplaceReplaceRequest`][] |

#### Returns

`Promise`<[`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)][]\>

#### Defined in

[src/parachain/replace.ts:270](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L270)

___

### request

▸ **request**(`amount`, `collateralCurrency`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[request](/interfaces/ReplaceAPI.md#request)

#### Defined in

[src/parachain/replace.ts:121](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L121)

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

[ReplaceAPI](/interfaces/ReplaceAPI.md).[sendLogged](/interfaces/ReplaceAPI.md#sendlogged)

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

[ReplaceAPI](/interfaces/ReplaceAPI.md).[setAccount](/interfaces/ReplaceAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/transaction.ts#L22)

___

### withdraw

▸ **withdraw**(`amount`, `collateralCurrency`): `Promise`<`void`\>

Wihdraw a replace request

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[withdraw](/interfaces/ReplaceAPI.md#withdraw)

#### Defined in

[src/parachain/replace.ts:151](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/replace.ts#L151)

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
