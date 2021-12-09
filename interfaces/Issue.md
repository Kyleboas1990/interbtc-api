[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / Issue

# Interface: Issue

## Table of contents

### Properties

- [bridgeFee](/interfaces/Issue.md#bridgefee)
- [btcAmountSubmittedByUser](/interfaces/Issue.md#btcamountsubmittedbyuser)
- [btcBlockHeight](/interfaces/Issue.md#btcblockheight)
- [btcTxId](/interfaces/Issue.md#btctxid)
- [confirmations](/interfaces/Issue.md#confirmations)
- [creationBlock](/interfaces/Issue.md#creationblock)
- [creationTimestamp](/interfaces/Issue.md#creationtimestamp)
- [executedAmountWrapped](/interfaces/Issue.md#executedamountwrapped)
- [griefingCollateral](/interfaces/Issue.md#griefingcollateral)
- [id](/interfaces/Issue.md#id)
- [refundAmountWrapped](/interfaces/Issue.md#refundamountwrapped)
- [refundBtcAddress](/interfaces/Issue.md#refundbtcaddress)
- [status](/interfaces/Issue.md#status)
- [userParachainAddress](/interfaces/Issue.md#userparachainaddress)
- [vaultId](/interfaces/Issue.md#vaultid)
- [vaultWalletPubkey](/interfaces/Issue.md#vaultwalletpubkey)
- [vaultWrappedAddress](/interfaces/Issue.md#vaultwrappedaddress)
- [wrappedAmount](/interfaces/Issue.md#wrappedamount)

## Properties

### bridgeFee

• **bridgeFee**: `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:11](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L11)

___

### btcAmountSubmittedByUser

• `Optional` **btcAmountSubmittedByUser**: `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:21](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L21)

___

### btcBlockHeight

• `Optional` **btcBlockHeight**: `number`

#### Defined in

[src/types/requestTypes.ts:20](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L20)

___

### btcTxId

• `Optional` **btcTxId**: `string`

#### Defined in

[src/types/requestTypes.ts:18](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L18)

___

### confirmations

• `Optional` **confirmations**: `number`

#### Defined in

[src/types/requestTypes.ts:19](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L19)

___

### creationBlock

• **creationBlock**: `number`

#### Defined in

[src/types/requestTypes.ts:14](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L14)

___

### creationTimestamp

• `Optional` **creationTimestamp**: `number`

#### Defined in

[src/types/requestTypes.ts:15](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L15)

___

### executedAmountWrapped

• `Optional` **executedAmountWrapped**: `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:25](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L25)

___

### griefingCollateral

• **griefingCollateral**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:12](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L12)

___

### id

• **id**: `string`

#### Defined in

[src/types/requestTypes.ts:8](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L8)

___

### refundAmountWrapped

• `Optional` **refundAmountWrapped**: `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:24](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L24)

___

### refundBtcAddress

• `Optional` **refundBtcAddress**: `string`

#### Defined in

[src/types/requestTypes.ts:23](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L23)

___

### status

• **status**: [`IssueStatus`](/enums/IssueStatus.md)

#### Defined in

[src/types/requestTypes.ts:22](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L22)

___

### userParachainAddress

• **userParachainAddress**: `string`

#### Defined in

[src/types/requestTypes.ts:10](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L10)

___

### vaultId

• **vaultId**: [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

[src/types/requestTypes.ts:17](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L17)

___

### vaultWalletPubkey

• **vaultWalletPubkey**: `string`

#### Defined in

[src/types/requestTypes.ts:13](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L13)

___

### vaultWrappedAddress

• **vaultWrappedAddress**: `string`

#### Defined in

[src/types/requestTypes.ts:16](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L16)

___

### wrappedAmount

• **wrappedAmount**: `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:9](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L9)
