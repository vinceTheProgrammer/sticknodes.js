# Import
## Data & I/O
In order to provide maximum compatibility, sticknodes.js does not handle the I/O of data. You will need to read/retrieve/write/send the Stick Nodes asset data yourself, but sticknodes.js enables you to deserialize, manipulate, and serialize that data.

Specifically, sticknodes.js expects the Stick Nodes asset data as either a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), which are both available in most Javascript environments (most popular browsers & Node.js).

::: warning
Blob had partial Node.js support since Node.js 15.7.0, but is only fully supported starting with Node.js 18.0.0
:::

## Import a Stickfigure from `.nodes` file data using an `ArrayBuffer`
::: code-group
```js
import { Stickfigure } from 'sticknodes.js';

const stickfigureDataArrayBuffer = new ArrayBuffer(); // get this data however you like

const myStickfigure = Stickfigure.fromBytes(stickfigureDataArrayBuffer);
```
```ts
import { Stickfigure } from 'sticknodes.js';

const stickfigureDataArrayBuffer: ArrayBuffer = new ArrayBuffer(); // get this data however you like

const myStickfigure: Stickfigure = Stickfigure.fromBytes(stickfigureDataArrayBuffer);
```
:::