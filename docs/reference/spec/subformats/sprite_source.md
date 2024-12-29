#### Sprite Library Data
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|8-bit unsigned byte|>=400|Any|Sprite is transparent boolean
|8-bit unsigned byte|>=400|Any|Sprite is anti-alias boolean
|32-bit float big-endian|>=400|Any|Sprite default origin X
|32-bit float big-endian|>=400|Any|Sprite default origin Y
|32-bit float big-endian|>=400|Any|Sprite internal scale X
|32-bit float big-endian|>=400|Any|Sprite internal scale Y
|8-bit unsigned byte|>=401|>=9|Sprite has raw rgb data boolean
|32-bit signed int big-endian|>=400|Any|Sprite image width
|32-bit signed int big-endian|>=400|Any|Sprite image height
|32-bit signed int big-endian|>=400|Any|<span style="color:coral">R</span> = Number of raw RGBA8888 bytes
|sequence with size of <span style="color:coral">R</span> of [RGBA8888 bytes](/)|>=400|Any|See [RGBA8888 bytes](/) for more information.