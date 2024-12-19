# Create
## Create empty `Stickfigure` and `StickNode`
You can create Stickfigures and StickNodes with default values by instantiating either the `Stickfigure` class or the `StickNode` class respectively.
::: code-group
```js
import { Stickfigure, StickNode } from 'sticknodes.js';

const myStickfigure = new Stickfigure();

const myStickNode = new StickNode();
```
```ts
import { Stickfigure, StickNode } from 'sticknodes.js';

const myStickfigure: Stickfigure = new Stickfigure();

const myStickNode: StickNode = new StickNode();
```
:::

## Create Stickfigures and StickNodes using options 
If you want to create Stickfigures and StickNodes with preset values, you can pass an object that conforms to the structure of the `StickfigureOptions` and `StickNodeOptions` types respectively. These option objects allow you to only set the values that you do not want to be set to the default values.
::: warning
You will need to create the root node yourself if you set the `nodes` property of the `StickfigureOptions` object.
:::
::: code-group
```js
import { Stickfigure, StickNode, SNColor } from 'sticknodes.js';

// unused example
const myStickfigureOptionsExample1 = {
    version: 410,
    color: new SNColor(255, 0, 0)
}

// unused example
const myNodeOptionsExample1 = {
    localAngle: 90,
    scale = 10
}

const myNodeOptionsExample2 = {
    color: new SNColor(0, 255, 0),
    thickness: 69,
    length: 420
}

const rootNodeOptionsExample = {
    nodeType: NodeType.ROOT,
    nodes: [
        new StickNode(myNodeOptionsExample2)
    ]
}

const myStickfigureOptionsExample2 = {
    nodes: [
        new StickNode(rootNodeOptionsExample)
    ]
}

// unused example
const myStickfigureOptionsExample3 = {
    scale: 2
}

const myStickfigure = new Stickfigure(myStickfigureOptionsExample2);
```
```ts
import { Stickfigure, StickNode, SNColor, StickfigureOptions, StickNodeOptions } from 'sticknodes.js';

// unused example
const myStickfigureOptionsExample1: StickfigureOptions = {
    version: 410,
    color: new SNColor(255, 0, 0)
}

// unused example
const myNodeOptionsExample1: StickNodeOptions = {
    localAngle: 90,
    scale = 10
}

const myNodeOptionsExample2: StickNodeOptions = {
    color: new SNColor(0, 255, 0),
    thickness: 69,
    length: 420
}

const rootNodeOptionsExample: StickNodeOptions = {
    nodeType: NodeType.ROOT,
    nodes: [
        new StickNode(myNodeOptionsExample2)
    ]
}

const myStickfigureOptionsExample2: StickfigureOptions = {
    nodes: [
        new StickNode(rootNodeOptionsExample)
    ]
}

// unused example
const myStickfigureOptionsExample3: StickfigureOptions = {
    scale: 2
}

const myStickfigure: Stickfigure = new Stickfigure(myStickfigureOptionsExample2);
```
:::