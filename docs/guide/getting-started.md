---
outline: deep
---

# Getting Started

## Installation
sticknodes.js can be installed with any Node.js package manager. You can install it with:

::: code-group

```sh [npm]
npm add sticknodes.js
```

```sh [pnpm]
pnpm add sticknodes.js
```

```sh [yarn]
yarn add sticknodes.js
```

```sh [bun]
bun add sticknodes.js
```

::: tip
The sticknodes.js version will always align with the latest version of Stick Nodes that it guarantees support for. For example, sticknodes.js 4.1.0 would support all assets up until Stick Nodes 4.1.0
:::

## Usage
### Data & I/O
In order to provide maximum compatibility, sticknodes.js does not handle the I/O of data. You will need to read/retrieve/write/send the Stick Nodes asset data yourself, but sticknodes.js enables you to deserialize, manipulate, and serialize that data.

Specifically, sticknodes.js expects the Stick Nodes asset data as either a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), which are both available in most Javascript environments (most popular browsers & Node.js).

::: warning
Blob had partial Node.js support since Node.js 15.7.0, but is only fully supported starting with Node.js 18.0.0
:::

### Creating

::: code-group
```js
import { factory, assetTypes } from 'sticknodes.js';

const myCustomStickfigure = factory.create(assetTypes.STICKFIGURE);
```
```ts
import { factory, assetTypes, Stickfigure } from 'sticknodes.js';

const myCustomStickfigure : Stickfigure = factory.create(assetTypes.STICKFIGURE);
```
:::

### Parsing (raw data -> JS object)

::: code-group
```js
import { factory, assetTypes } from 'sticknodes.js';

const stickfigureDataBlob = new Blob(); // get this data however you like
const myCustomStickfigureFromBlob = factory.create(assetTypes.STICKFIGURE, stickfigureDataBlob);

// or

const stickfigureDataArrayBuffer = new ArrayBuffer(); // get this data however you like
const myCustomStickfigureFromArrayBuffer = factory.create(assetTypes.STICKFIGURE, stickfigureDataArrayBuffer);
```
```ts
import { factory, assetTypes, Stickfigure } from 'sticknodes.js';

const stickfigureDataBlob : Blob = new Blob(); // get this data however you like
const myCustomStickfigureFromBlob : Stickfigure = factory.create(assetTypes.STICKFIGURE, stickfigureDataBlob);

// or

const stickfigureDataArrayBuffer : ArrayBuffer = new ArrayBuffer(); // get this data however you like
const myCustomStickfigureFromArrayBuffer : Stickfigure = factory.create(assetTypes.STICKFIGURE, stickfigureDataArrayBuffer);
```
:::

#### Auto-detect Type

::: code-group
```js
import { factory, assetTypes } from 'sticknodes.js';

const stickfigureDataBlob = new Blob(); // get this data however you like
const myCustomSNAssetFromBlob = factory.create(assetTypes.UNKNOWN, snAssetDataBlob);

// or

const stickfigureDataArrayBuffer = new ArrayBuffer(); // get this data however you like
const myCustomSNAssetFromArrayBuffer = factory.create(assetTypes.UNKNOWN, snAssetDataArrayBuffer);

// check asset type before doing any asset type specific code
switch (myCustomSNAssetFromBlob.type) {
    case assetTypes.STICKFIGURE:
        // ...
        break;
    case assetTypes.PROJECT:
        // ...
        break;
    case assetTypes.MOVIECLIP:
        // ...
        break;
    case assetTypes.SKIN:
        // ...
        break;
    default:
        /// ...
}
```
```ts
import { factory, assetTypes, Asset } from 'sticknodes.js';

const stickfigureDataBlob : Blob = new Blob(); // get this data however you like
const myCustomSNAssetFromBlob : Asset = factory.create(assetTypes.UNKNOWN, snAssetDataBlob);

// or

const stickfigureDataArrayBuffer : ArrayBuffer = new ArrayBuffer(); // get this data however you like
const myCustomSNAssetFromArrayBuffer : Asset = factory.create(assetTypes.UNKNOWN, snAssetDataArrayBuffer);

// check asset type before doing any asset type specific code
switch (myCustomSNAssetFromBlob.type) {
    case assetTypes.STICKFIGURE:
        // ...
        break;
    case assetTypes.PROJECT:
        // ...
        break;
    case assetTypes.MOVIECLIP:
        // ...
        break;
    case assetTypes.SKIN:
        // ...
        break;
    default:
        /// ...
}
```
:::

### Manipulating

::: code-group
```js
myCustomStickfigure.addNode(parentNodeId, nodeObject);
myCustomStickfigure.removeNode(nodeId);
myCustomStickfigure.getNode(nodeId).setColor("#45e7ab");

// etc
```
```ts
myCustomStickfigure.addNode(parentNodeId, nodeObject);
myCustomStickfigure.removeNode(nodeId);
myCustomStickfigure.getNode(nodeId).setColor("#45e7ab");

// etc
```
:::

### Unparsing (JS object -> raw data)
::: code-group
```js
const myCustomStickfigureBlob = myCustomStickfigure.getBlob();

// or

const myCustomStickfigureArrayBuffer = myCustomStickfigure.getArrayBuffer();
```
```ts
const myCustomStickfigureBlob : Blob = myCustomStickfigure.getBlob();

// or

const myCustomStickfigureArrayBuffer : ArrayBuffer = myCustomStickfigure.getArrayBuffer();
```
:::