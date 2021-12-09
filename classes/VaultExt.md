[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / VaultExt

# Class: VaultExt<WrappedUnit\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `WrappedUnit` | extends `BitcoinUnit` |

## Table of contents

### Constructors

- [constructor](/classes/VaultExt.md#constructor)

### Properties

- [backingCollateral](/classes/VaultExt.md#backingcollateral)
- [bannedUntil](/classes/VaultExt.md#banneduntil)
- [id](/classes/VaultExt.md#id)
- [issuedTokens](/classes/VaultExt.md#issuedtokens)
- [liquidatedCollateral](/classes/VaultExt.md#liquidatedcollateral)
- [replaceCollateral](/classes/VaultExt.md#replacecollateral)
- [status](/classes/VaultExt.md#status)
- [toBeIssuedTokens](/classes/VaultExt.md#tobeissuedtokens)
- [toBeRedeemedTokens](/classes/VaultExt.md#toberedeemedtokens)
- [toBeReplacedTokens](/classes/VaultExt.md#tobereplacedtokens)
- [wallet](/classes/VaultExt.md#wallet)

### Methods

- [computeBackingCollateral](/classes/VaultExt.md#computebackingcollateral)
- [getBackedTokens](/classes/VaultExt.md#getbackedtokens)
- [getFreeCollateral](/classes/VaultExt.md#getfreecollateral)
- [getIssuableTokens](/classes/VaultExt.md#getissuabletokens)
- [getRedeemableTokens](/classes/VaultExt.md#getredeemabletokens)
- [getSecureCollateralThreshold](/classes/VaultExt.md#getsecurecollateralthreshold)
- [getStakingPoolNonce](/classes/VaultExt.md#getstakingpoolnonce)
- [getUsedCollateral](/classes/VaultExt.md#getusedcollateral)
- [isBanned](/classes/VaultExt.md#isbanned)

## Constructors

### constructor

• **new VaultExt**<`WrappedUnit`\>(`api`, `wallet`, `backingCollateral`, `id`, `status`, `bannedUntil`, `toBeIssuedTokens`, `issuedTokens`, `toBeRedeemedTokens`, `toBeReplacedTokens`, `replaceCollateral`, `liquidatedCollateral`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `WrappedUnit` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `wallet` | [`WalletExt`](/interfaces/WalletExt.md) |
| `backingCollateral` | `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `id` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |
| `status` | [`VaultStatusExt`](/enums/VaultStatusExt.md) |
| `bannedUntil` | `undefined` \| `number` |
| `toBeIssuedTokens` | `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\> |
| `issuedTokens` | `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\> |
| `toBeRedeemedTokens` | `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\> |
| `toBeReplacedTokens` | `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\> |
| `replaceCollateral` | `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `liquidatedCollateral` | `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Defined in

[src/types/vault.ts:37](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L37)

## Properties

### backingCollateral

• **backingCollateral**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/vault.ts:26](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L26)

___

### bannedUntil

• **bannedUntil**: `undefined` \| `number`

#### Defined in

[src/types/vault.ts:29](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L29)

___

### id

• **id**: [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

[src/types/vault.ts:27](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L27)

___

### issuedTokens

• **issuedTokens**: `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:31](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L31)

___

### liquidatedCollateral

• **liquidatedCollateral**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/vault.ts:35](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L35)

___

### replaceCollateral

• **replaceCollateral**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/vault.ts:34](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L34)

___

### status

• **status**: [`VaultStatusExt`](/enums/VaultStatusExt.md)

#### Defined in

[src/types/vault.ts:28](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L28)

___

### toBeIssuedTokens

• **toBeIssuedTokens**: `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:30](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L30)

___

### toBeRedeemedTokens

• **toBeRedeemedTokens**: `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:32](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L32)

___

### toBeReplacedTokens

• **toBeReplacedTokens**: `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:33](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L33)

___

### wallet

• **wallet**: [`WalletExt`](/interfaces/WalletExt.md)

#### Defined in

[src/types/vault.ts:25](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L25)

## Methods

### computeBackingCollateral

▸ **computeBackingCollateral**(`nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nonce?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Defined in

[src/types/vault.ts:123](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L123)

___

### getBackedTokens

▸ **getBackedTokens**(): `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Returns

`MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:90](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L90)

___

### getFreeCollateral

▸ **getFreeCollateral**(): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Defined in

[src/types/vault.ts:94](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L94)

___

### getIssuableTokens

▸ **getIssuableTokens**(): `Promise`<`MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>\>

#### Defined in

[src/types/vault.ts:68](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L68)

___

### getRedeemableTokens

▸ **getRedeemableTokens**(): `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Returns

`MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:64](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L64)

___

### getSecureCollateralThreshold

▸ **getSecureCollateralThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/types/vault.ts:117](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L117)

___

### getStakingPoolNonce

▸ **getStakingPoolNonce**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[src/types/vault.ts:137](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L137)

___

### getUsedCollateral

▸ **getUsedCollateral**(): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Defined in

[src/types/vault.ts:100](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L100)

___

### isBanned

▸ **isBanned**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/types/vault.ts:81](https://github.com/interlay/interbtc-api/blob/3128908/src/types/vault.ts#L81)
