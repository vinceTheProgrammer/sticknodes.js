---
outline: deep
---

# .nodes File Format Specification
This specification is valid for SN versions <= 423.

## Metadata
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|Any|Any|Stick Nodes version number. Must be between 0 and the latest version (inclusive).
|32-bit signed int big-endian|>=403|Any|Build number
|32-bit float big-endian|Any|Any|Stickfigure scale
|32-bit signed int big-endian|Any|Any|Stickfigure color. See the [color reference](/reference/spec/nodes#color) for more information.

## Nodes
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|sequence of [Node](/reference/spec/nodes#node-data)|Any|Any|See [Node](/reference/spec/nodes#node-data) for more information.

## Polyfills
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=230|Any|<span style="color:coral">B</span> = Number of polyfills
|sequence with size of <span style="color:coral">B</span> of [Polyfill](/reference/spec/nodes#polyfill)|>=230|Any|See [Polyfill](/reference/spec/nodes#polyfill-data) for more information.

## Connections
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=403|>=38|<span style="color:coral">C</span> = Number of connector connections
|sequence with size of <span style="color:coral">C</span> of [Connection](/reference/spec/nodes#connection-data)|>=403|>=38|See [Connection](/reference/spec/nodes#connection-data) for more information.