[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultRewardsAPI

# Class: DefaultRewardsAPI

## Implements

- [`RewardsAPI`](/interfaces/RewardsAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultRewardsAPI.md#constructor)

### Properties

- [api](/classes/DefaultRewardsAPI.md#api)

### Methods

- [backingCollateralProportion](/classes/DefaultRewardsAPI.md#backingcollateralproportion)
- [computeCollateralInStakingPool](/classes/DefaultRewardsAPI.md#computecollateralinstakingpool)
- [computeReward](/classes/DefaultRewardsAPI.md#computereward)
- [computeRewardInRewardsPool](/classes/DefaultRewardsAPI.md#computerewardinrewardspool)
- [computeRewardInStakingPool](/classes/DefaultRewardsAPI.md#computerewardinstakingpool)
- [getFeesWrapped](/classes/DefaultRewardsAPI.md#getfeeswrapped)
- [getRewardsPoolRewardPerToken](/classes/DefaultRewardsAPI.md#getrewardspoolrewardpertoken)
- [getRewardsPoolRewardTally](/classes/DefaultRewardsAPI.md#getrewardspoolrewardtally)
- [getRewardsPoolStake](/classes/DefaultRewardsAPI.md#getrewardspoolstake)
- [getStakingPoolNonce](/classes/DefaultRewardsAPI.md#getstakingpoolnonce)
- [getStakingPoolRewardPerToken](/classes/DefaultRewardsAPI.md#getstakingpoolrewardpertoken)
- [getStakingPoolRewardTally](/classes/DefaultRewardsAPI.md#getstakingpoolrewardtally)
- [getStakingPoolSlashPerToken](/classes/DefaultRewardsAPI.md#getstakingpoolslashpertoken)
- [getStakingPoolSlashTally](/classes/DefaultRewardsAPI.md#getstakingpoolslashtally)
- [getStakingPoolStake](/classes/DefaultRewardsAPI.md#getstakingpoolstake)

## Constructors

### constructor

• **new DefaultRewardsAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `collateralCurrency`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `btcNetwork` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Defined in

[src/parachain/rewards.ts:151](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L151)

## Properties

### api

• **api**: `ApiPromise`

## Methods

### backingCollateralProportion

▸ **backingCollateralProportion**(`vaultAccountId`, `nominatorId`, `collateralCurrencyIdLiteral`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/rewards.ts:345](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L345)

___

### computeCollateralInStakingPool

▸ **computeCollateralInStakingPool**(`vaultAccountId`, `nominatorId`, `collateralCurrencyIdLiteral`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the collateral in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeCollateralInStakingPool](/interfaces/RewardsAPI.md#computecollateralinstakingpool)

#### Defined in

[src/parachain/rewards.ts:242](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L242)

___

### computeReward

▸ **computeReward**(`vaultAccountId`, `nominatorId`, `collateralCurrencyId`, `rewardCurrencyId`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

Compute the total reward, including the staking (local) pool and the rewards (global) pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `rewardCurrencyId` | [`WrappedIdLiteral`](/modules.md#wrappedidliteral) |
| `nonce?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A Monetary.js amount object, representing the total reward in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeReward](/interfaces/RewardsAPI.md#computereward)

#### Defined in

[src/parachain/rewards.ts:366](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L366)

___

### computeRewardInRewardsPool

▸ **computeRewardInRewardsPool**(`rewardCurrencyIdLiteral`, `vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A Monetary.js amount object, representing the reward in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeRewardInRewardsPool](/interfaces/RewardsAPI.md#computerewardinrewardspool)

#### Defined in

[src/parachain/rewards.ts:297](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L297)

___

### computeRewardInStakingPool

▸ **computeRewardInStakingPool**(`vaultAccountId`, `nominatorId`, `collateralCurrencyId`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `nonce?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A Monetary.js amount object, representing the reward in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeRewardInStakingPool](/interfaces/RewardsAPI.md#computerewardinstakingpool)

#### Defined in

[src/parachain/rewards.ts:159](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L159)

___

### getFeesWrapped

▸ **getFeesWrapped**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrency` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total wrapped token reward collected by the vault

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getFeesWrapped](/interfaces/RewardsAPI.md#getfeeswrapped)

#### Defined in

[src/parachain/rewards.ts:382](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L382)

___

### getRewardsPoolRewardPerToken

▸ **getRewardsPoolRewardPerToken**(`currencyId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |

#### Returns

`Promise`<`Big`\>

The reward per token, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardsPoolRewardPerToken](/interfaces/RewardsAPI.md#getrewardspoolrewardpertoken)

#### Defined in

[src/parachain/rewards.ts:338](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L338)

___

### getRewardsPoolRewardTally

▸ **getRewardsPoolRewardTally**(`rewardCurrencyIdLiteral`, `vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`Big`\>

The reward tally, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardsPoolRewardTally](/interfaces/RewardsAPI.md#getrewardspoolrewardtally)

#### Defined in

[src/parachain/rewards.ts:323](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L323)

___

### getRewardsPoolStake

▸ **getRewardsPoolStake**(`vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardsPoolStake](/interfaces/RewardsAPI.md#getrewardspoolstake)

#### Defined in

[src/parachain/rewards.ts:314](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L314)

___

### getStakingPoolNonce

▸ **getStakingPoolNonce**(`collateralCurrencyIdLiteral`, `vaultAccountId`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`number`\>

The current nonce of the staking pool

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolNonce](/interfaces/RewardsAPI.md#getstakingpoolnonce)

#### Defined in

[src/parachain/rewards.ts:175](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L175)

___

### getStakingPoolRewardPerToken

▸ **getStakingPoolRewardPerToken**(`wrappedCurrencyId`, `vaultAccountId`, `collateralCurrencyIdLiteral`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrappedCurrencyId` | [`WrappedIdLiteral`](/modules.md#wrappedidliteral) |
| `vaultAccountId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The reward per token, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolRewardPerToken](/interfaces/RewardsAPI.md#getstakingpoolrewardpertoken)

#### Defined in

[src/parachain/rewards.ts:225](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L225)

___

### getStakingPoolRewardTally

▸ **getStakingPoolRewardTally**(`currencyId`, `vaultAccountId`, `nominatorId`, `collateralCurrencyIdLiteral`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | [`WrappedIdLiteral`](/modules.md#wrappedidliteral) |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The reward tally, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolRewardTally](/interfaces/RewardsAPI.md#getstakingpoolrewardtally)

#### Defined in

[src/parachain/rewards.ts:205](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L205)

___

### getStakingPoolSlashPerToken

▸ **getStakingPoolSlashPerToken**(`vaultCollateralIdLiteral`, `vaultAccountId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/rewards.ts:264](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L264)

___

### getStakingPoolSlashTally

▸ **getStakingPoolSlashTally**(`collateralCurrencyIdLiteral`, `vaultAccountId`, `nominatorId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/rewards.ts:280](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L280)

___

### getStakingPoolStake

▸ **getStakingPoolStake**(`collateralCurrencyIdLiteral`, `vaultAccountId`, `nominatorId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolStake](/interfaces/RewardsAPI.md#getstakingpoolstake)

#### Defined in

[src/parachain/rewards.ts:188](https://github.com/interlay/interbtc-api/blob/3128908/src/parachain/rewards.ts#L188)
