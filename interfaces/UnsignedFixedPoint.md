[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / UnsignedFixedPoint

# Interface: UnsignedFixedPoint

**`name`** UnsignedFixedPoint

## Hierarchy

- `FixedU128`

  ↳ **`UnsignedFixedPoint`**

## Table of contents

### Properties

- [#private](/interfaces/UnsignedFixedPoint.md##private)
- [createdAtHash](/interfaces/UnsignedFixedPoint.md#createdathash)
- [encodedLength](/interfaces/UnsignedFixedPoint.md#encodedlength)
- [registry](/interfaces/UnsignedFixedPoint.md#registry)

### Accessors

- [hash](/interfaces/UnsignedFixedPoint.md#hash)
- [isEmpty](/interfaces/UnsignedFixedPoint.md#isempty)
- [isUnsigned](/interfaces/UnsignedFixedPoint.md#isunsigned)

### Methods

- [abs](/interfaces/UnsignedFixedPoint.md#abs)
- [add](/interfaces/UnsignedFixedPoint.md#add)
- [addn](/interfaces/UnsignedFixedPoint.md#addn)
- [and](/interfaces/UnsignedFixedPoint.md#and)
- [andln](/interfaces/UnsignedFixedPoint.md#andln)
- [bincn](/interfaces/UnsignedFixedPoint.md#bincn)
- [bitLength](/interfaces/UnsignedFixedPoint.md#bitlength)
- [byteLength](/interfaces/UnsignedFixedPoint.md#bytelength)
- [clone](/interfaces/UnsignedFixedPoint.md#clone)
- [cmp](/interfaces/UnsignedFixedPoint.md#cmp)
- [cmpn](/interfaces/UnsignedFixedPoint.md#cmpn)
- [div](/interfaces/UnsignedFixedPoint.md#div)
- [divRound](/interfaces/UnsignedFixedPoint.md#divround)
- [divn](/interfaces/UnsignedFixedPoint.md#divn)
- [egcd](/interfaces/UnsignedFixedPoint.md#egcd)
- [eq](/interfaces/UnsignedFixedPoint.md#eq)
- [eqn](/interfaces/UnsignedFixedPoint.md#eqn)
- [fromTwos](/interfaces/UnsignedFixedPoint.md#fromtwos)
- [gcd](/interfaces/UnsignedFixedPoint.md#gcd)
- [gt](/interfaces/UnsignedFixedPoint.md#gt)
- [gte](/interfaces/UnsignedFixedPoint.md#gte)
- [gten](/interfaces/UnsignedFixedPoint.md#gten)
- [gtn](/interfaces/UnsignedFixedPoint.md#gtn)
- [iabs](/interfaces/UnsignedFixedPoint.md#iabs)
- [iadd](/interfaces/UnsignedFixedPoint.md#iadd)
- [iaddn](/interfaces/UnsignedFixedPoint.md#iaddn)
- [iand](/interfaces/UnsignedFixedPoint.md#iand)
- [idivn](/interfaces/UnsignedFixedPoint.md#idivn)
- [imaskn](/interfaces/UnsignedFixedPoint.md#imaskn)
- [imul](/interfaces/UnsignedFixedPoint.md#imul)
- [imuln](/interfaces/UnsignedFixedPoint.md#imuln)
- [ineg](/interfaces/UnsignedFixedPoint.md#ineg)
- [inotn](/interfaces/UnsignedFixedPoint.md#inotn)
- [invm](/interfaces/UnsignedFixedPoint.md#invm)
- [ior](/interfaces/UnsignedFixedPoint.md#ior)
- [isEven](/interfaces/UnsignedFixedPoint.md#iseven)
- [isMax](/interfaces/UnsignedFixedPoint.md#ismax)
- [isNeg](/interfaces/UnsignedFixedPoint.md#isneg)
- [isOdd](/interfaces/UnsignedFixedPoint.md#isodd)
- [isZero](/interfaces/UnsignedFixedPoint.md#iszero)
- [ishln](/interfaces/UnsignedFixedPoint.md#ishln)
- [ishrn](/interfaces/UnsignedFixedPoint.md#ishrn)
- [isqr](/interfaces/UnsignedFixedPoint.md#isqr)
- [isub](/interfaces/UnsignedFixedPoint.md#isub)
- [isubn](/interfaces/UnsignedFixedPoint.md#isubn)
- [iuand](/interfaces/UnsignedFixedPoint.md#iuand)
- [iuor](/interfaces/UnsignedFixedPoint.md#iuor)
- [iushln](/interfaces/UnsignedFixedPoint.md#iushln)
- [iushrn](/interfaces/UnsignedFixedPoint.md#iushrn)
- [iuxor](/interfaces/UnsignedFixedPoint.md#iuxor)
- [ixor](/interfaces/UnsignedFixedPoint.md#ixor)
- [lt](/interfaces/UnsignedFixedPoint.md#lt)
- [lte](/interfaces/UnsignedFixedPoint.md#lte)
- [lten](/interfaces/UnsignedFixedPoint.md#lten)
- [ltn](/interfaces/UnsignedFixedPoint.md#ltn)
- [maskn](/interfaces/UnsignedFixedPoint.md#maskn)
- [mod](/interfaces/UnsignedFixedPoint.md#mod)
- [modn](/interfaces/UnsignedFixedPoint.md#modn)
- [mul](/interfaces/UnsignedFixedPoint.md#mul)
- [muln](/interfaces/UnsignedFixedPoint.md#muln)
- [neg](/interfaces/UnsignedFixedPoint.md#neg)
- [notn](/interfaces/UnsignedFixedPoint.md#notn)
- [or](/interfaces/UnsignedFixedPoint.md#or)
- [pow](/interfaces/UnsignedFixedPoint.md#pow)
- [setn](/interfaces/UnsignedFixedPoint.md#setn)
- [shln](/interfaces/UnsignedFixedPoint.md#shln)
- [shrn](/interfaces/UnsignedFixedPoint.md#shrn)
- [sqr](/interfaces/UnsignedFixedPoint.md#sqr)
- [sub](/interfaces/UnsignedFixedPoint.md#sub)
- [subn](/interfaces/UnsignedFixedPoint.md#subn)
- [testn](/interfaces/UnsignedFixedPoint.md#testn)
- [toArray](/interfaces/UnsignedFixedPoint.md#toarray)
- [toArrayLike](/interfaces/UnsignedFixedPoint.md#toarraylike)
- [toBigInt](/interfaces/UnsignedFixedPoint.md#tobigint)
- [toBn](/interfaces/UnsignedFixedPoint.md#tobn)
- [toBuffer](/interfaces/UnsignedFixedPoint.md#tobuffer)
- [toHex](/interfaces/UnsignedFixedPoint.md#tohex)
- [toHuman](/interfaces/UnsignedFixedPoint.md#tohuman)
- [toJSON](/interfaces/UnsignedFixedPoint.md#tojson)
- [toNumber](/interfaces/UnsignedFixedPoint.md#tonumber)
- [toRawType](/interfaces/UnsignedFixedPoint.md#torawtype)
- [toRed](/interfaces/UnsignedFixedPoint.md#tored)
- [toString](/interfaces/UnsignedFixedPoint.md#tostring)
- [toTwos](/interfaces/UnsignedFixedPoint.md#totwos)
- [toU8a](/interfaces/UnsignedFixedPoint.md#tou8a)
- [uand](/interfaces/UnsignedFixedPoint.md#uand)
- [ucmp](/interfaces/UnsignedFixedPoint.md#ucmp)
- [umod](/interfaces/UnsignedFixedPoint.md#umod)
- [uor](/interfaces/UnsignedFixedPoint.md#uor)
- [ushln](/interfaces/UnsignedFixedPoint.md#ushln)
- [ushrn](/interfaces/UnsignedFixedPoint.md#ushrn)
- [uxor](/interfaces/UnsignedFixedPoint.md#uxor)
- [xor](/interfaces/UnsignedFixedPoint.md#xor)
- [zeroBits](/interfaces/UnsignedFixedPoint.md#zerobits)

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

FixedU128.#private

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:14

___

### createdAtHash

• `Optional` **createdAtHash**: `Hash`

#### Inherited from

FixedU128.createdAtHash

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:16

___

### encodedLength

• `Readonly` **encodedLength**: `number`

#### Inherited from

FixedU128.encodedLength

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:17

___

### registry

• `Readonly` **registry**: `Registry`

#### Inherited from

FixedU128.registry

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:15

## Accessors

### hash

• `get` **hash**(): `CodecHash`

**`description`** returns a hash of the contents

#### Returns

`CodecHash`

#### Inherited from

FixedU128.hash

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:22

___

### isEmpty

• `get` **isEmpty**(): `boolean`

**`description`** Checks if the value is a zero value (align elsewhere)

#### Returns

`boolean`

#### Inherited from

FixedU128.isEmpty

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:26

___

### isUnsigned

• `get` **isUnsigned**(): `boolean`

**`description`** Checks if the value is an unsigned type

#### Returns

`boolean`

#### Inherited from

FixedU128.isUnsigned

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:30

## Methods

### abs

▸ **abs**(): `BN`

**`description`** absolute value

#### Returns

`BN`

#### Inherited from

FixedU128.abs

#### Defined in

node_modules/@types/bn.js/index.d.ts:232

___

### add

▸ **add**(`b`): `BN`

**`description`** addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.add

#### Defined in

node_modules/@types/bn.js/index.d.ts:242

___

### addn

▸ **addn**(`b`): `BN`

**`description`** addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.addn

#### Defined in

node_modules/@types/bn.js/index.d.ts:252

___

### and

▸ **and**(`b`): `BN`

**`description`** and

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.and

#### Defined in

node_modules/@types/bn.js/index.d.ts:373

___

### andln

▸ **andln**(`b`): `BN`

**`description`** and (NOTE: `andln` is going to be replaced with `andn` in future)

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.andln

#### Defined in

node_modules/@types/bn.js/index.d.ts:393

___

### bincn

▸ **bincn**(`b`): `BN`

**`description`** add `1 << b` to the number

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.bincn

#### Defined in

node_modules/@types/bn.js/index.d.ts:477

___

### bitLength

▸ **bitLength**(): `number`

**`description`** Returns the number of bits in the value

#### Returns

`number`

#### Inherited from

FixedU128.bitLength

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:34

___

### byteLength

▸ **byteLength**(): `number`

**`description`** return number of bytes occupied

#### Returns

`number`

#### Inherited from

FixedU128.byteLength

#### Defined in

node_modules/@types/bn.js/index.d.ts:122

___

### clone

▸ **clone**(): `BN`

**`description`** clone number

#### Returns

`BN`

#### Inherited from

FixedU128.clone

#### Defined in

node_modules/@types/bn.js/index.d.ts:67

___

### cmp

▸ **cmp**(`b`): ``0`` \| ``1`` \| ``-1``

**`description`** compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Inherited from

FixedU128.cmp

#### Defined in

node_modules/@types/bn.js/index.d.ts:147

___

### cmpn

▸ **cmpn**(`b`): ``0`` \| ``1`` \| ``-1``

**`description`** compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Inherited from

FixedU128.cmpn

#### Defined in

node_modules/@types/bn.js/index.d.ts:157

___

### div

▸ **div**(`b`): `BN`

**`description`** divide

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.div

#### Defined in

node_modules/@types/bn.js/index.d.ts:317

___

### divRound

▸ **divRound**(`b`): `BN`

**`description`** rounded division

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.divRound

#### Defined in

node_modules/@types/bn.js/index.d.ts:348

___

### divn

▸ **divn**(`b`): `BN`

**`description`** divide

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.divn

#### Defined in

node_modules/@types/bn.js/index.d.ts:322

___

### egcd

▸ **egcd**(`b`): `Object`

**`description`** Extended GCD results `({ a: ..., b: ..., gcd: ... })`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `a` | `BN` |
| `b` | `BN` |
| `gcd` | `BN` |

#### Inherited from

FixedU128.egcd

#### Defined in

node_modules/@types/bn.js/index.d.ts:497

___

### eq

▸ **eq**(`other?`): `boolean`

**`description`** Compares the value of the input to see if there is a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `other?` | `unknown` |

#### Returns

`boolean`

#### Inherited from

FixedU128.eq

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:38

___

### eqn

▸ **eqn**(`b`): `boolean`

**`description`** a equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

#### Inherited from

FixedU128.eqn

#### Defined in

node_modules/@types/bn.js/index.d.ts:207

___

### fromTwos

▸ **fromTwos**(`width`): `BN`

**`description`** convert from two's complement representation, where width is the bit width

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.fromTwos

#### Defined in

node_modules/@types/bn.js/index.d.ts:217

___

### gcd

▸ **gcd**(`b`): `BN`

**`description`** GCD

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.gcd

#### Defined in

node_modules/@types/bn.js/index.d.ts:492

___

### gt

▸ **gt**(`b`): `boolean`

**`description`** a greater than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`boolean`

#### Inherited from

FixedU128.gt

#### Defined in

node_modules/@types/bn.js/index.d.ts:182

___

### gte

▸ **gte**(`b`): `boolean`

**`description`** a greater than or equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`boolean`

#### Inherited from

FixedU128.gte

#### Defined in

node_modules/@types/bn.js/index.d.ts:192

___

### gten

▸ **gten**(`b`): `boolean`

**`description`** a greater than or equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

#### Inherited from

FixedU128.gten

#### Defined in

node_modules/@types/bn.js/index.d.ts:197

___

### gtn

▸ **gtn**(`b`): `boolean`

**`description`** a greater than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

#### Inherited from

FixedU128.gtn

#### Defined in

node_modules/@types/bn.js/index.d.ts:187

___

### iabs

▸ **iabs**(): `BN`

**`description`** absolute value

#### Returns

`BN`

#### Inherited from

FixedU128.iabs

#### Defined in

node_modules/@types/bn.js/index.d.ts:237

___

### iadd

▸ **iadd**(`b`): `BN`

**`description`** addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.iadd

#### Defined in

node_modules/@types/bn.js/index.d.ts:247

___

### iaddn

▸ **iaddn**(`b`): `BN`

**`description`** addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.iaddn

#### Defined in

node_modules/@types/bn.js/index.d.ts:257

___

### iand

▸ **iand**(`b`): `BN`

**`description`** and

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.iand

#### Defined in

node_modules/@types/bn.js/index.d.ts:378

___

### idivn

▸ **idivn**(`b`): `BN`

**`description`** divide

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.idivn

#### Defined in

node_modules/@types/bn.js/index.d.ts:327

___

### imaskn

▸ **imaskn**(`b`): `BN`

**`description`** clear bits with indexes higher or equal to `b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.imaskn

#### Defined in

node_modules/@types/bn.js/index.d.ts:473

___

### imul

▸ **imul**(`b`): `BN`

**`description`** multiply

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.imul

#### Defined in

node_modules/@types/bn.js/index.d.ts:287

___

### imuln

▸ **imuln**(`b`): `BN`

**`description`** multiply

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.imuln

#### Defined in

node_modules/@types/bn.js/index.d.ts:297

___

### ineg

▸ **ineg**(): `BN`

**`description`** negate sign

#### Returns

`BN`

#### Inherited from

FixedU128.ineg

#### Defined in

node_modules/@types/bn.js/index.d.ts:227

___

### inotn

▸ **inotn**(`w`): `BN`

**`description`** not (for the width specified by `w`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.inotn

#### Defined in

node_modules/@types/bn.js/index.d.ts:487

___

### invm

▸ **invm**(`b`): `BN`

**`description`** inverse `a` modulo `b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.invm

#### Defined in

node_modules/@types/bn.js/index.d.ts:502

___

### ior

▸ **ior**(`b`): `BN`

**`description`** or

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.ior

#### Defined in

node_modules/@types/bn.js/index.d.ts:358

___

### isEven

▸ **isEven**(): `boolean`

**`description`** check if value is even

#### Returns

`boolean`

#### Inherited from

FixedU128.isEven

#### Defined in

node_modules/@types/bn.js/index.d.ts:132

___

### isMax

▸ **isMax**(): `boolean`

**`description`** True if this value is the max of the type

#### Returns

`boolean`

#### Inherited from

FixedU128.isMax

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:42

___

### isNeg

▸ **isNeg**(): `boolean`

**`description`** true if the number is negative

#### Returns

`boolean`

#### Inherited from

FixedU128.isNeg

#### Defined in

node_modules/@types/bn.js/index.d.ts:127

___

### isOdd

▸ **isOdd**(): `boolean`

**`description`** check if value is odd

#### Returns

`boolean`

#### Inherited from

FixedU128.isOdd

#### Defined in

node_modules/@types/bn.js/index.d.ts:137

___

### isZero

▸ **isZero**(): `boolean`

**`description`** check if value is zero

#### Returns

`boolean`

#### Inherited from

FixedU128.isZero

#### Defined in

node_modules/@types/bn.js/index.d.ts:142

___

### ishln

▸ **ishln**(`b`): `BN`

**`description`** shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.ishln

#### Defined in

node_modules/@types/bn.js/index.d.ts:428

___

### ishrn

▸ **ishrn**(`b`): `BN`

**`description`** shift right (unimplemented https://github.com/indutny/bn.js/blob/master/lib/bn.js#L2086)

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.ishrn

#### Defined in

node_modules/@types/bn.js/index.d.ts:448

___

### isqr

▸ **isqr**(): `BN`

**`description`** square

#### Returns

`BN`

#### Inherited from

FixedU128.isqr

#### Defined in

node_modules/@types/bn.js/index.d.ts:307

___

### isub

▸ **isub**(`b`): `BN`

**`description`** subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.isub

#### Defined in

node_modules/@types/bn.js/index.d.ts:267

___

### isubn

▸ **isubn**(`b`): `BN`

**`description`** subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.isubn

#### Defined in

node_modules/@types/bn.js/index.d.ts:277

___

### iuand

▸ **iuand**(`b`): `BN`

**`description`** and

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.iuand

#### Defined in

node_modules/@types/bn.js/index.d.ts:388

___

### iuor

▸ **iuor**(`b`): `BN`

**`description`** or

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.iuor

#### Defined in

node_modules/@types/bn.js/index.d.ts:368

___

### iushln

▸ **iushln**(`b`): `BN`

**`description`** shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.iushln

#### Defined in

node_modules/@types/bn.js/index.d.ts:438

___

### iushrn

▸ **iushrn**(`b`): `BN`

**`description`** shift right

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.iushrn

#### Defined in

node_modules/@types/bn.js/index.d.ts:458

___

### iuxor

▸ **iuxor**(`b`): `BN`

**`description`** xor

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.iuxor

#### Defined in

node_modules/@types/bn.js/index.d.ts:413

___

### ixor

▸ **ixor**(`b`): `BN`

**`description`** xor

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.ixor

#### Defined in

node_modules/@types/bn.js/index.d.ts:403

___

### lt

▸ **lt**(`b`): `boolean`

**`description`** a less than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`boolean`

#### Inherited from

FixedU128.lt

#### Defined in

node_modules/@types/bn.js/index.d.ts:162

___

### lte

▸ **lte**(`b`): `boolean`

**`description`** a less than or equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`boolean`

#### Inherited from

FixedU128.lte

#### Defined in

node_modules/@types/bn.js/index.d.ts:172

___

### lten

▸ **lten**(`b`): `boolean`

**`description`** a less than or equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

#### Inherited from

FixedU128.lten

#### Defined in

node_modules/@types/bn.js/index.d.ts:177

___

### ltn

▸ **ltn**(`b`): `boolean`

**`description`** a less than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

#### Inherited from

FixedU128.ltn

#### Defined in

node_modules/@types/bn.js/index.d.ts:167

___

### maskn

▸ **maskn**(`b`): `BN`

**`description`** clear bits with indexes higher or equal to `b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.maskn

#### Defined in

node_modules/@types/bn.js/index.d.ts:468

___

### mod

▸ **mod**(`b`): `BN`

**`description`** reduct

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.mod

#### Defined in

node_modules/@types/bn.js/index.d.ts:332

___

### modn

▸ **modn**(`b`): `number`

**`see`** API consistency https://github.com/indutny/bn.js/pull/130

**`description`** reduct

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`number`

#### Inherited from

FixedU128.modn

#### Defined in

node_modules/@types/bn.js/index.d.ts:343

___

### mul

▸ **mul**(`b`): `BN`

**`description`** multiply

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.mul

#### Defined in

node_modules/@types/bn.js/index.d.ts:282

___

### muln

▸ **muln**(`b`): `BN`

**`description`** multiply

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.muln

#### Defined in

node_modules/@types/bn.js/index.d.ts:292

___

### neg

▸ **neg**(): `BN`

**`description`** negate sign

#### Returns

`BN`

#### Inherited from

FixedU128.neg

#### Defined in

node_modules/@types/bn.js/index.d.ts:222

___

### notn

▸ **notn**(`w`): `BN`

**`description`** not (for the width specified by `w`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.notn

#### Defined in

node_modules/@types/bn.js/index.d.ts:482

___

### or

▸ **or**(`b`): `BN`

**`description`** or

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.or

#### Defined in

node_modules/@types/bn.js/index.d.ts:353

___

### pow

▸ **pow**(`b`): `BN`

**`description`** raise `a` to the power of `b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.pow

#### Defined in

node_modules/@types/bn.js/index.d.ts:312

___

### setn

▸ **setn**(`b`): `BN`

**`description`** set specified bit to 1

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.setn

#### Defined in

node_modules/@types/bn.js/index.d.ts:418

___

### shln

▸ **shln**(`b`): `BN`

**`description`** shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.shln

#### Defined in

node_modules/@types/bn.js/index.d.ts:423

___

### shrn

▸ **shrn**(`b`): `BN`

**`description`** shift right

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.shrn

#### Defined in

node_modules/@types/bn.js/index.d.ts:443

___

### sqr

▸ **sqr**(): `BN`

**`description`** square

#### Returns

`BN`

#### Inherited from

FixedU128.sqr

#### Defined in

node_modules/@types/bn.js/index.d.ts:302

___

### sub

▸ **sub**(`b`): `BN`

**`description`** subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.sub

#### Defined in

node_modules/@types/bn.js/index.d.ts:262

___

### subn

▸ **subn**(`b`): `BN`

**`description`** subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.subn

#### Defined in

node_modules/@types/bn.js/index.d.ts:272

___

### testn

▸ **testn**(`b`): `boolean`

**`description`** test if specified bit is set

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

#### Inherited from

FixedU128.testn

#### Defined in

node_modules/@types/bn.js/index.d.ts:463

___

### toArray

▸ **toArray**(`endian?`, `length?`): `number`[]

**`description`** convert to byte Array, and optionally zero pad to length, throwing if already exceeding

#### Parameters

| Name | Type |
| :------ | :------ |
| `endian?` | `Endianness` |
| `length?` | `number` |

#### Returns

`number`[]

#### Inherited from

FixedU128.toArray

#### Defined in

node_modules/@types/bn.js/index.d.ts:87

___

### toArrayLike

▸ **toArrayLike**(`ArrayType`, `endian?`, `length?`): `Buffer`

**`description`** convert to an instance of `type`, which must behave like an Array

#### Parameters

| Name | Type |
| :------ | :------ |
| `ArrayType` | typeof `Buffer` |
| `endian?` | `Endianness` |
| `length?` | `number` |

#### Returns

`Buffer`

#### Inherited from

FixedU128.toArrayLike

#### Defined in

node_modules/@types/bn.js/index.d.ts:92

▸ **toArrayLike**(`ArrayType`, `endian?`, `length?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ArrayType` | `any`[] |
| `endian?` | `Endianness` |
| `length?` | `number` |

#### Returns

`any`[]

#### Inherited from

FixedU128.toArrayLike

#### Defined in

node_modules/@types/bn.js/index.d.ts:98

___

### toBigInt

▸ **toBigInt**(): `bigint`

**`description`** Returns a BigInt representation of the number

#### Returns

`bigint`

#### Inherited from

FixedU128.toBigInt

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:46

___

### toBn

▸ **toBn**(): `BN`

**`description`** Returns the BN representation of the number. (Compatibility)

#### Returns

`BN`

#### Inherited from

FixedU128.toBn

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:50

___

### toBuffer

▸ **toBuffer**(`endian?`, `length?`): `Buffer`

**`description`** convert to Node.js Buffer (if available). For compatibility with browserify and similar tools, use this instead: a.toArrayLike(Buffer, endian, length)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endian?` | `Endianness` |
| `length?` | `number` |

#### Returns

`Buffer`

#### Inherited from

FixedU128.toBuffer

#### Defined in

node_modules/@types/bn.js/index.d.ts:107

___

### toHex

▸ **toHex**(`isLe?`): \`0x${string}\`

**`description`** Returns a hex string representation of the value

#### Parameters

| Name | Type |
| :------ | :------ |
| `isLe?` | `boolean` |

#### Returns

\`0x${string}\`

#### Inherited from

FixedU128.toHex

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:54

___

### toHuman

▸ **toHuman**(`isExpanded?`): `string`

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters

| Name | Type |
| :------ | :------ |
| `isExpanded?` | `boolean` |

#### Returns

`string`

#### Inherited from

FixedU128.toHuman

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:58

___

### toJSON

▸ **toJSON**(`onlyHex?`): `any`

**`description`** Converts the Object to JSON, typically used for RPC transfers

#### Parameters

| Name | Type |
| :------ | :------ |
| `onlyHex?` | `boolean` |

#### Returns

`any`

#### Inherited from

FixedU128.toJSON

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:62

___

### toNumber

▸ **toNumber**(): `number`

**`description`** convert to Javascript Number (limited to 53 bits)

#### Returns

`number`

#### Inherited from

FixedU128.toNumber

#### Defined in

node_modules/@types/bn.js/index.d.ts:77

___

### toRawType

▸ **toRawType**(): `string`

**`description`** Returns the base runtime type name for this instance

#### Returns

`string`

#### Inherited from

FixedU128.toRawType

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:66

___

### toRed

▸ **toRed**(`reductionContext`): `RedBN`

**`description`** Convert number to red

#### Parameters

| Name | Type |
| :------ | :------ |
| `reductionContext` | `ReductionContext` |

#### Returns

`RedBN`

#### Inherited from

FixedU128.toRed

#### Defined in

node_modules/@types/bn.js/index.d.ts:507

___

### toString

▸ **toString**(`base?`): `string`

**`description`** Returns the string representation of the value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base?` | `number` | The base to use for the conversion |

#### Returns

`string`

#### Inherited from

FixedU128.toString

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:71

___

### toTwos

▸ **toTwos**(`width`): `BN`

**`description`** convert to two's complement representation, where width is bit width

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.toTwos

#### Defined in

node_modules/@types/bn.js/index.d.ts:212

___

### toU8a

▸ **toU8a**(`isBare?`): `Uint8Array`

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isBare?` | `boolean` | true when the value has none of the type-specific prefixes (internal) |

#### Returns

`Uint8Array`

#### Inherited from

FixedU128.toU8a

#### Defined in

node_modules/@polkadot/types/codec/AbstractInt.d.ts:76

___

### uand

▸ **uand**(`b`): `BN`

**`description`** and

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.uand

#### Defined in

node_modules/@types/bn.js/index.d.ts:383

___

### ucmp

▸ **ucmp**(`b`): ``0`` \| ``1`` \| ``-1``

**`description`** compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Inherited from

FixedU128.ucmp

#### Defined in

node_modules/@types/bn.js/index.d.ts:152

___

### umod

▸ **umod**(`b`): `BN`

**`description`** reduct

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.umod

#### Defined in

node_modules/@types/bn.js/index.d.ts:337

___

### uor

▸ **uor**(`b`): `BN`

**`description`** or

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.uor

#### Defined in

node_modules/@types/bn.js/index.d.ts:363

___

### ushln

▸ **ushln**(`b`): `BN`

**`description`** shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.ushln

#### Defined in

node_modules/@types/bn.js/index.d.ts:433

___

### ushrn

▸ **ushrn**(`b`): `BN`

**`description`** shift right

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.ushrn

#### Defined in

node_modules/@types/bn.js/index.d.ts:453

___

### uxor

▸ **uxor**(`b`): `BN`

**`description`** xor

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.uxor

#### Defined in

node_modules/@types/bn.js/index.d.ts:408

___

### xor

▸ **xor**(`b`): `BN`

**`description`** xor

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.xor

#### Defined in

node_modules/@types/bn.js/index.d.ts:398

___

### zeroBits

▸ **zeroBits**(): `number`

**`description`** return number of less-significant consequent zero bits (example: 1010000 has 4 zero bits)

#### Returns

`number`

#### Inherited from

FixedU128.zeroBits

#### Defined in

node_modules/@types/bn.js/index.d.ts:117
