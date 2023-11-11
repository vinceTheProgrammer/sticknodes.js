---
outline: deep
---

# .nodes File Format Specification
::: warning
This specification is for version 3.3.4
:::

## Header
The first 12 bytes represent the header. They are as follows:

|Byte Range|Data Type|Versions|Description|
|----------|---------|--------|-----------|
|1-4|32-bit signed int big-endian|All|Stick Nodes version number. Must be between 0 and 334 (or newest version code, I assume) inclusive.
|5-8|32-bit float big-endian|All|Stickfigure scale
|9-12|32-bit signed int big-endian|All|Stickfigure color. See the [color reference](/reference/spec/nodes#color) for more information.

## Node Data
Each node consists of 84 bytes. They are as follows:

|Byte Range|Data Type|Versions|Description|
|----------|---------|--------|-----------|
|1|8-bit signed byte|All|Node type. See the [node types table](/reference/spec/nodes#node-types) for more information.
|2-5|32-bit signed int big-endian|All|Draw order index. 0 for main node. lesser = behind, greater = in front. Acts as ID for node. Every node must have a unique draw order.
|6|8-bit signed byte|All|Is static boolean
|7|8-bit signed byte|All|Is Stretchy boolean
|8|8-bit signed byte|>=248|Is smart stretch boolean
|9|8-bit signed byte|>=252|Do not apply smart stretch boolean
|10|8-bit signed byte|All|Use segment color boolean
|11|8-bit signed byte|>=256|Use circle outline boolean
|12|8-bit signed byte|>=176|Use gradient boolean
|13|8-bit signed byte|>=176|Reverse gradient boolean
|14|8-bit signed byte|All|Use segment scale boolean
|15-18|32-bit float big-endian|All|Local X. The X offset from the parent node. Positive in rightward direction, negative in the leftward 
|19-22|32-bit float big-endian|All|Local Y. The Y offset from the parent node. Positive in upward direction, negative in the downward direction
|23-26|32-bit float big-endian|All|Scale
|27-30|32-bit float big-endian|All|Default length
|31-34|32-bit float big-endian|All|Length
|35-38|32-bit signed int big-endian|All|Default thickness
|39-42|32-bit signed int big-endian|All|Thickness
|43-46|32-bit signed int big-endian|>=320|Segment curve radius
|47|8-bit signed byte|>=256|Half-arc boolean
|48-49|16-bit signed integer (short) big-endian|>=256|Right triangle direction
|50|8-bit signed byte|>=300|Triangle upside-down boolean
|51-54|32-bit float big-endian|>=256|Trapezoid top thickness ratio
|55-56|16-bit signed integer (short) big-endian|>=256|Number of polygon vertices
|57-60|32-bit float big-endian|>=248|Default local angle
|61-64|32-bit float big-endian|All|Local angle
|65-68|32-bit float big-endian|>=248|Default local angle
|69-72|32-bit signed int big-endian|All|Color. See the [color reference](/reference/spec/nodes#color) for more information.
|73-76|32-bit signed int big-endian|>=176|Gradient color. See the [color reference](/reference/spec/nodes#color) for more information.
|77-80|32-bit signed int big-endian|>=256|Circle outline color. See the [color reference](/reference/spec/nodes#color) for more information.
|81-84|32-bit signed int big-endian|All|Number of child nodes

## Polyfills
Requires version 2.3.0 or later.

### Polyfill Header
The polyfills header consists of 4 bytes. They are as follows:

|Byte Range|Data Type|Versions|Description|
|----------|---------|--------|-----------|
|1-4|32-bit signed int big-endian|>=230|Number of polyfills

### Polyfill Data
Each polyfill consists of 13 bytes. They are as follows:

|Byte Range|Data Type|Versions|Description|
|----------|---------|--------|-----------|
|1-4|32-bit signed int big-endian|>=230|Draw order of parent node (becomes the anchor node)
|5-8|32-bit signed int big-endian|>=230|Color. See the [color reference](/reference/spec/nodes#color) for more information.
|9|8-bit signed byte|>=230|Use polyfill color boolean
|10-13|32-bit signed int big-endian|>=230|Number of polyfill nodes (not counting the anchor node)

## File Structure

|Start of File||
|-------------|-|
|[Header](/reference/spec/nodes#Header)|Specifies number of Node Data sections to include.
|[Node Data](/reference/spec/nodes#node-data)||
|[Polyfill Header](/reference/spec/nodes#polyfill-header)|Specifies number of Polyfill Data sections to include.
|[Polyfill Data](/reference/spec/nodes#polyfill-data)||
|End of file||

## Additional Information

### Node Types
Each node type is represented by an integer. They are as follows:

|Integer|Node Type|
|-------|---------|
|-1|main node|
|0|rounded segment|
|1|segment|
|2|circle|
|3|triangle|
|4|filled circle (automatically converted to circle with an outline)
|5|ellipse|
|6|trapezoid|
|7|polygon|

### Color
Color is represented by 4 bytes. They are as follows:

|Byte Range|Data Type|Description|
|----------|---------|-----------|
|1|8-bit unsigned int|Alpha
|2|8-bit unsigned int|Blue
|3|8-bit unsigned int|Green
|4|8-bit unsigned int|Red

## Notes
- The node type for the first node must be -1
- The draw order for the first node must be 0
- Most likely Local X and Local Y should be 0 for the first node
- Most likely Local Angle should be 0 for the first node
- I would set all booleans to 0 for the first node just to be safe