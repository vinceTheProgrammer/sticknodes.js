---
outline: deep
---

# Manipulate
## Add
### Add `StickNode` to a `Stickfigure`
::: code-group
```js
import { Stickfigure, StickNode } from 'sticknodes.js';

const myStickfigure = new Stickfigure();

const myNodeToAdd = new StickNode({length: 42, nodeType: NodeType.CIRCLE});

const parentNodeDrawOrderIndex = 0; // drawOrderIndex of the root node

myStickfigure.addNode(parentNodeDrawOrderIndex, myNodeToAdd);
```
```ts
myStickfigure.addNode(parentNodeId, nodeObject);
myCustomStickfigure.removeNode(nodeId);
myCustomStickfigure.getNode(nodeId).setColor("#45e7ab");

```
:::

### Add `StickNode` as a child to a `StickNode`
::: code-group
```js
import { StickNode } from 'sticknodes.js';

const myNode = new StickNode();

const myNodeToAdd = new StickNode({length: 42, nodeType: NodeType.CIRCLE});

myNode.addChild(myNodeToAdd);
```
```ts
myStickfigure.addNode(parentNodeId, nodeObject);
myCustomStickfigure.removeNode(nodeId);
myCustomStickfigure.getNode(nodeId).setColor("#45e7ab");

```
:::

## Get
### Get `StickNode` you just added
::: code-group
```js
/////////////Previous example///////////////////
import { Stickfigure, StickNode } from 'sticknodes.js';
const myStickfigure = new Stickfigure();
const myNodeToAdd = new StickNode({length: 42, nodeType: NodeType.CIRCLE});
const parentNodeDrawOrderIndex = 0;
myStickfigure.addNode(parentNodeDrawOrderIndex, myNodeToAdd);
/////////////Previous example///////////////////

// Just use the same variable to read/modify the node! 
// It is a reference to the same StickNode that is attached to the Stickfigure!
myNodeToAdd.length = 84;
console.log(myNodeToAdd);

```
```ts
myStickfigure.addNode(parentNodeId, nodeObject);
myCustomStickfigure.removeNode(nodeId);
myCustomStickfigure.getNode(nodeId).setColor("#45e7ab");

```
:::

### Get `StickNode` by drawOrderIndex
::: code-group
```js
import { Stickfigure, StickNode } from 'sticknodes.js';

const myStickfigure = new Stickfigure();

const rootNodeIndex = 0;
const rootNode = myStickfigure.getNodeByIndex(rootNodeIndex);

rootNode.length = 1;
console.log(rootNode);

```
```ts
myStickfigure.addNode(parentNodeId, nodeObject);
myCustomStickfigure.removeNode(nodeId);
myCustomStickfigure.getNode(nodeId).setColor("#45e7ab");

```
:::

### Get parent of `StickNode`
::: code-group
```js
/////////////Previous example///////////////////
import { Stickfigure, StickNode } from 'sticknodes.js';
const myStickfigure = new Stickfigure();
const myNodeToAdd = new StickNode({length: 42, nodeType: NodeType.CIRCLE});
const parentNodeDrawOrderIndex = 0;
myStickfigure.addNode(parentNodeDrawOrderIndex, myNodeToAdd);
/////////////Previous example///////////////////

const rootNode = myNodeToAdd.getParent();
rootNode.length = 1;
console.log(rootNode);

```
```ts
myStickfigure.addNode(parentNodeId, nodeObject);
myCustomStickfigure.removeNode(nodeId);
myCustomStickfigure.getNode(nodeId).setColor("#45e7ab");

```
:::

### Get children of `StickNode`
::: code-group
```js
/////////////Previous example///////////////////
import { Stickfigure, StickNode } from 'sticknodes.js';
const myStickfigure = new Stickfigure();
const myNodeToAdd = new StickNode({length: 42, nodeType: NodeType.CIRCLE});
const parentNodeDrawOrderIndex = 0;
myStickfigure.addNode(parentNodeDrawOrderIndex, myNodeToAdd);
/////////////Previous example///////////////////

// add some children to myNodeToAdd for illustrative purposes
for (let i = 0; i < 10; i++) {
    myNodeToAdd.addChild(new StickNode({thickness: 10}));
}

const children = myNodeToAdd.getChildren();
console.log(children);

```
```ts
myStickfigure.addNode(parentNodeId, nodeObject);
myCustomStickfigure.removeNode(nodeId);
myCustomStickfigure.getNode(nodeId).setColor("#45e7ab");

```
:::

### Get siblings of `StickNode`
::: code-group
```js
/////////////Previous example///////////////////
import { Stickfigure, StickNode } from 'sticknodes.js';
const myStickfigure = new Stickfigure();
const myNodeToAdd = new StickNode({length: 42, nodeType: NodeType.CIRCLE});
const parentNodeDrawOrderIndex = 0;
myStickfigure.addNode(parentNodeDrawOrderIndex, myNodeToAdd);
/////////////Previous example///////////////////

// add some siblings of myNodeToAdd for illustrative purposes
for (let i = 0; i < 10; i++) {
    myStickfigure.addNode(0, new StickNode({thickness: 10}));
}

const siblings = myNodeToAdd.getSiblings();
console.log(siblings);

```
```ts
myStickfigure.addNode(parentNodeId, nodeObject);
myCustomStickfigure.removeNode(nodeId);
myCustomStickfigure.getNode(nodeId).setColor("#45e7ab");

```
:::

## Remove
### Remove `StickNode` by drawOrderIndex

::: code-group
```js
/////////////Previous example///////////////////
import { Stickfigure, StickNode } from 'sticknodes.js';
const myStickfigure = new Stickfigure();
const myNodeToAdd = new StickNode({length: 42, nodeType: NodeType.CIRCLE});
const parentNodeDrawOrderIndex = 0;
myStickfigure.addNode(parentNodeDrawOrderIndex, myNodeToAdd);
/////////////Previous example///////////////////

myStickfigure.removeNodeByIndex(myNodeToAdd.drawOrderIndex);
```
```ts
myStickfigure.addNode(parentNodeId, nodeObject);
myCustomStickfigure.removeNode(nodeId);
myCustomStickfigure.getNode(nodeId).setColor("#45e7ab");

```
:::

### Remove `StickNode` with `removeChild()`

::: code-group
```js
/////////////Previous example///////////////////
import { StickNode } from 'sticknodes.js';
const myNode = new StickNode();
const myNodeToAdd = new StickNode({length: 42, nodeType: NodeType.CIRCLE});
myNode.addChild(myNodeToAdd);
/////////////Previous example///////////////////

myNode.removeChild(myNodeToAdd);
```
```ts
myStickfigure.addNode(parentNodeId, nodeObject);
myCustomStickfigure.removeNode(nodeId);
myCustomStickfigure.getNode(nodeId).setColor("#45e7ab");

```
:::