[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / VaultRegistryVault

# Interface: VaultRegistryVault

**`name`** VaultRegistryVault (287)

## Hierarchy

- `Struct`

  ↳ **`VaultRegistryVault`**

## Table of contents

### Properties

- [#private](/interfaces/VaultRegistryVault.md##private)
- [[toStringTag]](/interfaces/VaultRegistryVault.md#[tostringtag])
- [activeReplaceCollateral](/interfaces/VaultRegistryVault.md#activereplacecollateral)
- [bannedUntil](/interfaces/VaultRegistryVault.md#banneduntil)
- [createdAtHash](/interfaces/VaultRegistryVault.md#createdathash)
- [id](/interfaces/VaultRegistryVault.md#id)
- [initialU8aLength](/interfaces/VaultRegistryVault.md#initialu8alength)
- [issuedTokens](/interfaces/VaultRegistryVault.md#issuedtokens)
- [liquidatedCollateral](/interfaces/VaultRegistryVault.md#liquidatedcollateral)
- [registry](/interfaces/VaultRegistryVault.md#registry)
- [replaceCollateral](/interfaces/VaultRegistryVault.md#replacecollateral)
- [size](/interfaces/VaultRegistryVault.md#size)
- [status](/interfaces/VaultRegistryVault.md#status)
- [toBeIssuedTokens](/interfaces/VaultRegistryVault.md#tobeissuedtokens)
- [toBeRedeemedTokens](/interfaces/VaultRegistryVault.md#toberedeemedtokens)
- [toBeReplacedTokens](/interfaces/VaultRegistryVault.md#tobereplacedtokens)
- [wallet](/interfaces/VaultRegistryVault.md#wallet)

### Accessors

- [Type](/interfaces/VaultRegistryVault.md#type)
- [defKeys](/interfaces/VaultRegistryVault.md#defkeys)
- [encodedLength](/interfaces/VaultRegistryVault.md#encodedlength)
- [hash](/interfaces/VaultRegistryVault.md#hash)
- [isEmpty](/interfaces/VaultRegistryVault.md#isempty)

### Methods

- [[iterator]](/interfaces/VaultRegistryVault.md#[iterator])
- [clear](/interfaces/VaultRegistryVault.md#clear)
- [delete](/interfaces/VaultRegistryVault.md#delete)
- [entries](/interfaces/VaultRegistryVault.md#entries)
- [eq](/interfaces/VaultRegistryVault.md#eq)
- [forEach](/interfaces/VaultRegistryVault.md#foreach)
- [get](/interfaces/VaultRegistryVault.md#get)
- [getAtIndex](/interfaces/VaultRegistryVault.md#getatindex)
- [has](/interfaces/VaultRegistryVault.md#has)
- [keys](/interfaces/VaultRegistryVault.md#keys)
- [set](/interfaces/VaultRegistryVault.md#set)
- [toArray](/interfaces/VaultRegistryVault.md#toarray)
- [toHex](/interfaces/VaultRegistryVault.md#tohex)
- [toHuman](/interfaces/VaultRegistryVault.md#tohuman)
- [toJSON](/interfaces/VaultRegistryVault.md#tojson)
- [toRawType](/interfaces/VaultRegistryVault.md#torawtype)
- [toString](/interfaces/VaultRegistryVault.md#tostring)
- [toU8a](/interfaces/VaultRegistryVault.md#tou8a)
- [values](/interfaces/VaultRegistryVault.md#values)

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

Struct.#private

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:24

___

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Struct.\_\_@toStringTag@100

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### activeReplaceCollateral

• `Readonly` **activeReplaceCollateral**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:2939

___

### bannedUntil

• `Readonly` **bannedUntil**: `Option`<`u32`\>

#### Defined in

src/interfaces/types-lookup.ts:2933

___

### createdAtHash

• `Optional` **createdAtHash**: `Hash`

#### Inherited from

Struct.createdAtHash

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:26

___

### id

• `Readonly` **id**: [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

src/interfaces/types-lookup.ts:2930

___

### initialU8aLength

• `Optional` `Readonly` **initialU8aLength**: `number`

#### Inherited from

Struct.initialU8aLength

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:27

___

### issuedTokens

• `Readonly` **issuedTokens**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:2935

___

### liquidatedCollateral

• `Readonly` **liquidatedCollateral**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:2940

___

### registry

• `Readonly` **registry**: `Registry`

#### Inherited from

Struct.registry

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:25

___

### replaceCollateral

• `Readonly` **replaceCollateral**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:2938

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Struct.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### status

• `Readonly` **status**: `VaultRegistryVaultStatus`

#### Defined in

src/interfaces/types-lookup.ts:2932

___

### toBeIssuedTokens

• `Readonly` **toBeIssuedTokens**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:2934

___

### toBeRedeemedTokens

• `Readonly` **toBeRedeemedTokens**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:2936

___

### toBeReplacedTokens

• `Readonly` **toBeReplacedTokens**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:2937

___

### wallet

• `Readonly` **wallet**: `VaultRegistryWallet`

#### Defined in

src/interfaces/types-lookup.ts:2931

## Accessors

### Type

• `get` **Type**(): `E`

**`description`** Returns the Type description of the structure

#### Returns

`E`

#### Inherited from

Struct.Type

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:41

___

### defKeys

• `get` **defKeys**(): `string`[]

**`description`** The available keys for this struct

#### Returns

`string`[]

#### Inherited from

Struct.defKeys

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:33

___

### encodedLength

• `get` **encodedLength**(): `number`

**`description`** The length of the value when encoded as a Uint8Array

#### Returns

`number`

#### Inherited from

Struct.encodedLength

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:45

___

### hash

• `get` **hash**(): `CodecHash`

**`description`** returns a hash of the contents

#### Returns

`CodecHash`

#### Inherited from

Struct.hash

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:49

___

### isEmpty

• `get` **isEmpty**(): `boolean`

**`description`** Checks if the value is an empty value

#### Returns

`boolean`

#### Inherited from

Struct.isEmpty

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:37

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Struct.\_\_@iterator@98

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Struct.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:22

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

Struct.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Struct.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

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

Struct.eq

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:53

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `Codec`, `key`: `string`, `map`: `Map`<`string`, `Codec`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Struct.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

___

### get

▸ **get**(`name`): `undefined` \| `Codec`

**`description`** Returns a specific names entry in the structure

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the entry to retrieve |

#### Returns

`undefined` \| `Codec`

#### Inherited from

Struct.get

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:58

___

### getAtIndex

▸ **getAtIndex**(`index`): `Codec`

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`Codec`

#### Inherited from

Struct.getAtIndex

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:62

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

Struct.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

Struct.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### set

▸ **set**(`key`, `value`): [`VaultRegistryVault`](/interfaces/VaultRegistryVault.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Codec` |

#### Returns

[`VaultRegistryVault`](/interfaces/VaultRegistryVault.md)

#### Inherited from

Struct.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### toArray

▸ **toArray**(): `Codec`[]

**`description`** Converts the Object to an standard JavaScript Array

#### Returns

`Codec`[]

#### Inherited from

Struct.toArray

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:66

___

### toHex

▸ **toHex**(): \`0x${string}\`

**`description`** Returns a hex string representation of the value

#### Returns

\`0x${string}\`

#### Inherited from

Struct.toHex

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:70

___

### toHuman

▸ **toHuman**(`isExtended?`): `Record`<`string`, `AnyJson`\>

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters

| Name | Type |
| :------ | :------ |
| `isExtended?` | `boolean` |

#### Returns

`Record`<`string`, `AnyJson`\>

#### Inherited from

Struct.toHuman

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:74

___

### toJSON

▸ **toJSON**(): `Record`<`string`, `AnyJson`\>

**`description`** Converts the Object to JSON, typically used for RPC transfers

#### Returns

`Record`<`string`, `AnyJson`\>

#### Inherited from

Struct.toJSON

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:78

___

### toRawType

▸ **toRawType**(): `string`

**`description`** Returns the base runtime type name for this instance

#### Returns

`string`

#### Inherited from

Struct.toRawType

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:82

___

### toString

▸ **toString**(): `string`

**`description`** Returns the string representation of the value

#### Returns

`string`

#### Inherited from

Struct.toString

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:86

___

### toU8a

▸ **toU8a**(`isBare?`): `Uint8Array`

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isBare?` | `BareOpts` | true when the value has none of the type-specific prefixes (internal) |

#### Returns

`Uint8Array`

#### Inherited from

Struct.toU8a

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:91

___

### values

▸ **values**(): `IterableIterator`<`Codec`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`Codec`\>

#### Inherited from

Struct.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
