[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / ReplaceRequestExt

# Interface: ReplaceRequestExt

## Table of contents

### Properties

- [acceptTime](/interfaces/ReplaceRequestExt.md#accepttime)
- [amount](/interfaces/ReplaceRequestExt.md#amount)
- [btcAddress](/interfaces/ReplaceRequestExt.md#btcaddress)
- [btcHeight](/interfaces/ReplaceRequestExt.md#btcheight)
- [collateral](/interfaces/ReplaceRequestExt.md#collateral)
- [griefingCollateral](/interfaces/ReplaceRequestExt.md#griefingcollateral)
- [newVault](/interfaces/ReplaceRequestExt.md#newvault)
- [oldVault](/interfaces/ReplaceRequestExt.md#oldvault)
- [period](/interfaces/ReplaceRequestExt.md#period)
- [status](/interfaces/ReplaceRequestExt.md#status)

## Properties

### acceptTime

• **acceptTime**: `number`

#### Defined in

[src/types/requestTypes.ts:91](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L91)

___

### amount

• **amount**: `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:88](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L88)

___

### btcAddress

• **btcAddress**: `string`

#### Defined in

[src/types/requestTypes.ts:85](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L85)

___

### btcHeight

• **btcHeight**: `number`

#### Defined in

[src/types/requestTypes.ts:93](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L93)

___

### collateral

• **collateral**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:90](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L90)

___

### griefingCollateral

• **griefingCollateral**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:89](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L89)

___

### newVault

• **newVault**: [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

[src/types/requestTypes.ts:86](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L86)

___

### oldVault

• **oldVault**: [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

[src/types/requestTypes.ts:87](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L87)

___

### period

• **period**: `number`

#### Defined in

[src/types/requestTypes.ts:92](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L92)

___

### status

• **status**: `InterbtcPrimitivesReplaceReplaceRequestStatus`

#### Defined in

[src/types/requestTypes.ts:94](https://github.com/interlay/interbtc-api/blob/3128908/src/types/requestTypes.ts#L94)
