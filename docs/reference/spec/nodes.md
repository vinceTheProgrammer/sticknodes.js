---
outline: deep
---

# .nodes File Format Specification
This specification is valid for SN versions <= 423.

## File Structure

|Start of File|
|-------------|
|[Header](/reference/spec/nodes#Header)|
|[Node Data](/reference/spec/nodes#node-data)||
|[Polyfill Header](/reference/spec/nodes#polyfills-header)|
|[Polyfill Data](/reference/spec/nodes#polyfill-data)||
|[Connector Header](/reference/spec/nodes#connectors-header)||
|[Connection Data](/reference/spec/nodes#connector-data)||
|End of file||

## Header
Defines the basic metadata of the stickfigure.

|Data Type|Versions|Description|
|---------|--------|-----------|
|32-bit signed int big-endian|Any|Stick Nodes version number. Must be between 0 and the latest version (inclusive).
|32-bit signed int big-endian|>=403|Build number
|32-bit float big-endian|Any|Stickfigure scale
|32-bit signed int big-endian|Any|Stickfigure color. See the [color reference](/reference/spec/nodes#color) for more information.
|sequence of [Node Data](/reference/spec/nodes#node-data)|Any|See [Node Data](/reference/spec/nodes#node-data) for more information.

## Node Data
Defines the properties of a node.

|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|8-bit signed byte|Any|Any|Node type. See the [node types table](/reference/spec/nodes#node-types) for more information.
|32-bit signed int big-endian|Any|Any|Draw order index. 0 for main node. lesser = behind, greater = in front. Acts as ID for node. Every node must have a unique draw order index.
|8-bit unsigned byte|Any|Any|Is static boolean
|8-bit unsigned byte|Any|Any|Is stretchy boolean
|8-bit unsigned byte|>=403|>=48|Is floaty boolean
|8-bit unsigned byte|>=248|Any|Is smart stretch boolean
|8-bit unsigned byte|>=252|Any|Do not apply smart stretch boolean
|8-bit unsigned byte|>=403|>=50|Smart stretch, reset impulse boolean
|8-bit unsigned byte|Any|Any|Use segment color boolean
|8-bit unsigned byte|>=256|Any|Use circle outline boolean
|8-bit unsigned byte|>=403|>=21|Circle is hollow boolean
|8-bit unsigned byte|>=176|Any|Use gradient boolean
|8-bit unsigned byte|>=176|Any|Reverse gradient boolean
|16-bit signed int (short big-endian)|>=403|>=20|Gradient mode
|8-bit unsigned byte|Any|Any|Use segment scale boolean
|32-bit float big-endian|Any|Any|Local X. The X offset from the parent node. Positive in rightward direction, negative in the leftward 
|32-bit float big-endian|Any|Any|Local Y. The Y offset from the parent node. Positive in upward direction, negative in the downward direction
|32-bit float big-endian|Any|Any|Scale
|32-bit float big-endian|Any|Any|Default length
|32-bit float big-endian|Any|Any|Length
|32-bit signed int big-endian|Any|Any|Default thickness
|32-bit signed int big-endian|Any|Any|Thickness
|32-bit signed int big-endian|>=320|Any|Segment curve radius & default curve radius
|8-bit unsigned byte|>=403|>=20|Curve "circulization" (circularization) boolean
|16-bit signed int (short) big-endian|>=403|>=21|Segment curve polyfill precision
|8-bit unsigned byte|>=256|Any|Half-arc boolean
|16-bit signed int (short) big-endian|>=256|Any|Right triangle direction
|8-bit unsigned byte|>=300|Any|Triangle upside-down boolean
|<span style="color:cornflowerblue">if <span style="color:coral">build</span> < 64: </span><br>32-bit signed int big-endian<br> <span style="color:cornflowerblue">else:</span><br>32-bit float big-endian|>=403|>=36|Trapezoid thickness 1
|<span style="color:cornflowerblue">if <span style="color:coral">build</span> < 64: </span><br>32-bit signed int big-endian<br> <span style="color:cornflowerblue">else:</span><br>32-bit float big-endian|>=403|>=36|Trapezoid thickness 2
|32-bit signed int big-endian|>=403|==36|[unused]
|32-bit signed int big-endian|>=403|==36|[unused]
|8-bit unsigned byte|>=403|==36|Use trapezoid thickness 1 boolean (I think?)
|8-bit unsigned byte|>=403|==36|Use trapezoid thickness 2 boolean (I think?)
|32-bit float big-endian|>=256|!=36|Trapezoid top thickness ratio
|8-bit unsigned byte|>=403|>=36|Trapezoid is rounded 1 boolean
|8-bit unsigned byte|>=403|>=36|Trapezoid is rounded 2 boolean
|16-bit signed int (short) big-endian|>=256|Any|Number of polygon vertices
|32-bit float big-endian|>=248|Any|Default local angle
|32-bit float big-endian|Any|Any|Local angle
|32-bit float big-endian|>=248|Any|Default angle
|32-bit signed int big-endian|Any|Any|Color. See the [color reference](/reference/spec/nodes#color) for more information.
|32-bit signed int big-endian|>=176|Any|Gradient color. See the [color reference](/reference/spec/nodes#color) for more information.
|32-bit signed int big-endian|>=256|Any|Circle outline color. See the [color reference](/reference/spec/nodes#color) for more information.
|8-bit unsigned byte|>=403|>=39|Is angle locked boolean. If build <= 50, forced to false.
|32-bit float big-endian|>=403|>=39 && <=50|[unused]
|8-bit unsigned byte|>=403|>=51|Angle lock is main node boolean. If build < 56, 0 means true.
|32-bit float big-endian|>=403|>=51 && <=56|The number being subtracted from to calculate the angle lock offset. (in 10 - 5, it would be 10).
|32-bit float big-endian|>=403|>=51 && <=56|The number being subtracted to calculate the angle lock offset. (in 10 - 5, it would be 5).
|32-bit float big-endian|>=403|>=57|Angle lock offset
|32-bit float big-endian|>=403|>=63|Angle lock relative start
|32-bit float big-endian|>=403|>=67|Angle lock stickfigure start
|8-bit signed byte|>=403|>=63|Angle lock relative multiplier
|<span style="color:cornflowerblue">if <span style="color:coral">build</span> <= 40: </span><br>16-bit signed int (short) big-endian<br> <span style="color:cornflowerblue">else:</span><br>8-bit unsigned byte|>=403|>=39|Is drag locked boolean
|16-bit signed int (short) big-endian|>=403|>=41 && <=45|[unused]
|32-bit float big-endian|>=403|>=46|Drag lock angle
|32-bit float big-endian|>=403|>=41|Smart stretch multiplier
|8-bit unsigned byte|>=403|>=41 && <=45|[unused]
|32-bit signed int big-endian|Any|Any|<span style="color:coral">A</span> = Number of child nodes
|sequence with size of <span style="color:coral">A</span> of 32-bit signed int big-endian|>=403|>38|Sequence of ints representing booleans for whether each corresponding node is a connector
|sequence with size of <span style="color:coral">A</span> of [Node Data](/reference/spec/nodes#node-data)|Any|Any|See [Node Data](/reference/spec/nodes#node-data) for more information.

## Polyfills
Requires version 2.3.0 or later.

### Polyfills Header
Defines how many polyfills are present in the stickfigure.

|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=230|Any|<span style="color:coral">B</span> = Number of polyfills
|sequence with size of <span style="color:coral">B</span> of [Polyfill Data](/reference/spec/nodes#polyfill-data)|>=230|Any|See [Polyfill Data](/reference/spec/nodes#polyfill-data) for more information.

### Polyfill Data
Defines the properties of a polyfill.

|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=230|Any|Draw order index of parent node (becomes the anchor node)
|32-bit signed int big-endian|>=230|Any|Color. See the [color reference](/reference/spec/nodes#color) for more information.
|8-bit unsigned byte|>=230|Any|Use polyfill color boolean
|32-bit signed int big-endian|>=230|Any|<span style="color:coral">C</span> = Number of polyfill nodes (not counting the anchor node)
|sequence with size of <span style="color:coral">C</span> of 32-bit signed int big-endian|>=230|Any|The draw order index of each node that the polyfill is attached to, in order.

## Connectors
Requires build 38 or later. Implicitly requires version 4.0.3 or later.

### Connectors Header
Defines how many connector connections there are.

|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=403|>=38|<span style="color:coral">D</span> = Number of connector connections
|sequence with size of <span style="color:coral">D</span> of [Connection Data](/reference/spec/nodes#connection-data)|>=403|>=38|See [Connection Data](/reference/spec/nodes#connection-data) for more information.

### Connection Data
Defines the properties of a connector connection.

|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=403|>=38|Draw order index of start node
|32-bit signed int big-endian|>=403|>=38|Draw order index of end node

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