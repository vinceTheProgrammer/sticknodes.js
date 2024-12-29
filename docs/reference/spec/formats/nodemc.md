## Header
|Data Type|Versions|Description|
|---------|--------|-----------|
|32-bit signed int big-endian|Any|Stick Nodes version number
|32-bit signed int big-endian|>=402|Build number
|32-bit signed int big-endian|Any|<span style="color:coral">A</span> = Length of movieclip name (prob causes weird behavior or error if length of movieclip name length is <= 0)
|sequence with size of <span style="color:coral">A</span> of text bytes|Any|Movieclip name