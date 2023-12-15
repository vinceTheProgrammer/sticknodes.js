---
outline: deep
---

# .nodes File Format Specification

## File Structure

|Start of File|
|-------------|
|[Header](/reference/spec/nodes#Header)|
|[Node Data](/reference/spec/nodes#node-data)||
|[Polyfill Header](/reference/spec/nodes#polyfill-header)|
|[Polyfill Data](/reference/spec/nodes#polyfill-data)||
|End of file||

## Header
The header consists of up to 16 bytes depending on the SN version. They are as follows:

|Byte Range|Data Type|Versions|Description|
|----------|---------|--------|-----------|
|1-4|32-bit signed int big-endian|Any|Stick Nodes version number. Must be between 0 and the latest version (inclusive).
|5-8|32-bit signed int big-endian|>=403|Build number
|9-12|32-bit float big-endian|Any|Stickfigure scale
|13-16|32-bit signed int big-endian|Any|Stickfigure color. See the [color reference](/reference/spec/nodes#color) for more information.
|17-∞|sequence of [Node Data](/reference/spec/nodes#node-data)|Any|See [Node Data](/reference/spec/nodes#node-data) for more information.

## Node Data
Each node consists of up to 90 bytes depending on the SN version and build number. They are as follows:

|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1|8-bit signed byte|Any|Any|Node type. See the [node types table](/reference/spec/nodes#node-types) for more information.
|2-5|32-bit signed int big-endian|Any|Any|Draw order index. 0 for main node. lesser = behind, greater = in front. Acts as ID for node. Every node must have a unique draw order index.
|6|8-bit unsigned byte|Any|Any|Is static boolean
|7|8-bit unsigned byte|Any|Any|Is Stretchy boolean
|8|8-bit unsigned byte|>=248|Any|Is smart stretch boolean
|9|8-bit unsigned byte|>=252|Any|Do not apply smart stretch boolean
|10|8-bit unsigned byte|Any|Any|Use segment color boolean
|11|8-bit unsigned byte|>=256|Any|Use circle outline boolean
|12|8-bit unsigned byte|>=403|>=21|Circle is hollow boolean
|13|8-bit unsigned byte|>=176|Any|Use gradient boolean
|14|8-bit unsigned byte|>=176|Any|Reverse gradient boolean
|15-16|16-bit signed int (short big-endian)|>=403|>=20|Gradient mode
|17|8-bit unsigned byte|Any|Any|Use segment scale boolean
|18-21|32-bit float big-endian|Any|Any|Local X. The X offset from the parent node. Positive in rightward direction, negative in the leftward 
|22-25|32-bit float big-endian|Any|Any|Local Y. The Y offset from the parent node. Positive in upward direction, negative in the downward direction
|26-29|32-bit float big-endian|Any|Any|Scale
|30-33|32-bit float big-endian|Any|Any|Default length
|34-37|32-bit float big-endian|Any|Any|Length
|38-41|32-bit signed int big-endian|Any|Any|Default thickness
|42-45|32-bit signed int big-endian|Any|Any|Thickness
|46-49|32-bit signed int big-endian|>=320|Any|Segment curve radius & default curve radius
|50|8-bit unsigned byte|>=403|>=20|Curve "circulization" (circularization) boolean
|51-52|16-bit signed int (short) big-endian|>=403|>=21|Segment curve polyfill precision
|53|8-bit unsigned byte|>=256|Any|Half-arc boolean
|54-55|16-bit signed int (short) big-endian|>=256|Any|Right triangle direction
|56|8-bit unsigned byte|>=300|Any|Triangle upside-down boolean
|57-60|32-bit float big-endian|>=256|Any|Trapezoid top thickness ratio
|61-62|16-bit signed int (short) big-endian|>=256|Any|Number of polygon vertices
|63-66|32-bit float big-endian|>=248|Any|Default local angle
|67-70|32-bit float big-endian|Any|Any|Local angle
|71-74|32-bit float big-endian|>=248|Any|Default angle
|75-78|32-bit signed int big-endian|Any|Any|Color. See the [color reference](/reference/spec/nodes#color) for more information.
|79-82|32-bit signed int big-endian|>=176|Any|Gradient color. See the [color reference](/reference/spec/nodes#color) for more information.
|83-86|32-bit signed int big-endian|>=256|Any|Circle outline color. See the [color reference](/reference/spec/nodes#color) for more information.
|87-90|32-bit signed int big-endian|Any|Any|<span style="color:coral">A</span> = Number of child nodes
|91-(~90<span style="color:coral">A</span>+90)|sequence with size of <span style="color:coral">A</span> of [Node Data](/reference/spec/nodes#node-data)|Any|Any|See [Node Data](/reference/spec/nodes#node-data) for more information.

## Polyfills
Requires version 2.3.0 or later.

### Polyfill Header
The polyfills header consists of 4 bytes. They are as follows:

|Byte Range|Data Type|Versions|Description|
|----------|---------|--------|-----------|
|1-4|32-bit signed int big-endian|>=230|<span style="color:coral">B</span> = Number of polyfills
|5-(13<span style="color:coral">B</span>+4)|sequence with size of <span style="color:coral">B</span> of [Polyfill Data](/reference/spec/nodes#polyfill-data)|See [Polyfill Data](/reference/spec/nodes#polyfill-data) for more information.

### Polyfill Data
Each polyfill consists of 13 bytes. They are as follows:

|Byte Range|Data Type|Versions|Description|
|----------|---------|--------|-----------|
|1-4|32-bit signed int big-endian|>=230|Draw order index of parent node (becomes the anchor node)
|5-8|32-bit signed int big-endian|>=230|Color. See the [color reference](/reference/spec/nodes#color) for more information.
|9|8-bit unsigned byte|>=230|Use polyfill color boolean
|10-13|32-bit signed int big-endian|>=230|<span style="color:coral">C</span> = Number of polyfill nodes (not counting the anchor node)
|14-(4<span style="color:coral">C</span>+13)|sequence with size of <span style="color:coral">C</span> of 32-bit signed int big-endian|>=230|The draw order index of each node that the polyfill is attached to, in order.

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
- The draw order index for the first node must be 0
- Most likely Local X and Local Y should be 0 for the first node
- Most likely Local Angle should be 0 for the first node
- I would set all booleans to 0 for the first node just to be safe