---
outline: deep
---

# .stknds File Format Specified

## Compression
The .stknds format is compressed when saved and decompressed when loaded to reduce its file size. It is compressed and decompressed using the GZIP compression and decompression algorithms with a buffer size of 4096. The following information assumes that the .stknds file is in its uncompressed state.

## File Format Overview

## Header
|Byte Range|Data Type|Versions|Description|
|----------|---------|--------|-----------|
|1-4|32-bit signed int big-endian|Any|Stick Nodes version number
|5-8|32-bit signed int big-endian|>=401|Build number
|9-12|32-bit signed int big-endian|Any|<span style="color:coral">A</span> = Length of project name (prob causes weird behavior or error if length of project name length is <= 0)
|13-(<span style="color:coral">A</span>+12)|sequence with size of <span style="color:coral">A</span> of text bytes|Any|Project name

## Project Options
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1|8-bit unsigned byte|>=401|>=16|Is YouTube short boolean
|2|8-bit unsigned byte|>=220|Any|Watermark enabled boolean
|3-6|32-bit signed int big-endian|Any|Any|<span style="color:coral">B</span> = Length of watermark text (project name bytes are not read if this is <= 0)
|7-(<span style="color:coral">B</span>+6)|sequence with size of <span style="color:coral">B</span> of text bytes|Any|Any|Watermark text
|(<span style="color:coral">B</span>+6)+1-(<span style="color:coral">B</span>+6)+4|32-bit signed int big-endian|Any|Any|Watermark color. See the [color reference](/reference/spec/nodes#color) for more information.
|(<span style="color:coral">B</span>+6)+5-(<span style="color:coral">B</span>+6)+8|32-bit signed int big-endian|Any|Any|FPS
|(<span style="color:coral">B</span>+6)+9-(<span style="color:coral">B</span>+6)+12|32-bit signed int big-endian|>=176|Any|Number of tweened frames
|(<span style="color:coral">B</span>+6)+13|8-bit unsigned byte|>=127|Any|Has shown loop message boolean
|(<span style="color:coral">B</span>+6)+14|8-bit unsigned byte|>=113|Any|Has shown panning mode message boolean
|(<span style="color:coral">B</span>+6)+15|8-bit unsigned byte|Any|Any|Has shown tweening mode message boolean
|(<span style="color:coral">B</span>+6)+16|8-bit unsigned byte|>=220|Any|Has shown magnifier message boolean
|(<span style="color:coral">B</span>+6)+17|8-bit unsigned byte|Any|Any|Tweening enabled boolean
|(<span style="color:coral">B</span>+6)+18|8-bit unsigned byte|>=127|Any|Is loop boolean
|(<span style="color:coral">B</span>+6)+19|8-bit unsigned byte|>=140 && < 200|Any|[empty byte]

## Unique IDs
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|Any|Any|Unique figure ID
|5-8|32-bit signed int big-endian|>=176|Any|Unique textfield box ID
|9-12|32-bit signed int big-endian|>=300|Any|Unique movieclip ID
|13-16|32-bit signed int big-endian|>=300|Any|Frames container UID

## Fonts
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=400|Any|<span style="color:coral">C</span> = Number of fonts to check if loaded?
|5-(<span style="color:coral">C</span>+4)|sequence with size of <span style="color:coral">C</span> of 8-bit unsigned bytes (booleans)|>=400|Any|Font loaded boolean?

## Hidden Library IDs

### Hidden Stickfigure Library IDs
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|<span style="color:coral">D</span> = Number of hidden stickfigure library IDs
|5-(4<span style="color:coral">D</span>+4)|sequence with size of <span style="color:coral">D</span> of 32-bit signed int big-endian|>=300|Any|Hidden stickfigure library ID

### Hidden Movieclip Library IDs
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|<span style="color:coral">E</span> = Number of hidden movieclip library IDs
|5-(4<span style="color:coral">E</span>+4)|sequence with size of <span style="color:coral">E</span> of 32-bit signed int big-endian|>=300|Any|Hidden movieclip library ID

### Hidden Sprite Library IDs
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|<span style="color:coral">F</span> = Number of hidden sprite library IDs
|5-(4<span style="color:coral">F</span>+4)|sequence with size of <span style="color:coral">F</span> of 32-bit signed int big-endian|>=300|Any|Hidden sprite library ID

## ID Conversion Maps

### ID Conversion Maps Header
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|<span style="color:coral">G</span> = Outer loop iterations
|5-((8<span style="color:coral">G</span> + 8<span style="color:coral">H</span> + 8<span style="color:coral">I</span>) + 4)|sequence with size of <span style="color:coral">G</span> of [outer loop data](/reference/spec/stknds#ID-Conversion-Maps-Outer-Loop)|>=300|Any|See [outer loop data](/reference/spec/stknds#ID-Conversion-Maps-Outer-Loop) for more information.

### ID Conversion Maps Outer Loop
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|<span style="color:coral">H</span> = Middle loop iterations
|5-8|32-bit signed int big-endian|>=300|Any|Destination container (timeline) UID
|9-((8<span style="color:coral">H</span> + 8<span style="color:coral">I</span>) + 8)|sequence with size of <span style="color:coral">H</span> of [middle loop data](/reference/spec/stknds#ID-Conversion-Maps-Middle-Loop)|>=300|Any|See [middle loop data](/reference/spec/stknds#ID-Conversion-Maps-Middle-Loop) for more information.

### ID Conversion Maps Middle Loop
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|<span style="color:coral">I</span> = Inner loop iterations
|5-8|32-bit signed int big-endian|>=300|Any|Source container (timeline) UID
|9-(8<span style="color:coral">I</span> + 8)|sequence with size of <span style="color:coral">I</span> of [inner loop data](/reference/spec/stknds#ID-Conversion-Maps-Inner-Loop)|>=300|Any|See [inner loop data](/reference/spec/stknds#ID-Conversion-Maps-Inner-Loop) for more information.

### ID Conversion Maps Inner Loop
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|Source container figure ID
|5-8|32-bit signed int big-endian|>=300|Any|Destination container figure ID

## Background Image (do later since it won't effect the project as long as it's saved as 400 or newer) TODO
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1|8-bit unsigned byte|>=140 && <400|Any|Background image enabled boolean ()

## Libraries

### Stickfigure Library
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|Any|Any|<span style="color:coral">J</span> = Number of stickfigures in library
|5-(?<span style="color:coral">J</span> + 4)|sequence of [stickfigure header](/reference/spec/stknds#stickfigure-header)|Any|Any|See [stickfigure header](/reference/spec/stknds#stickfigure-header) for more information.

#### Stickfigure Header
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|Any|Any|<span style="color:coral">K</span> = Length of stickfigure name
|5-(<span style="color:coral">K</span> + 4)|sequence with size of <span style="color:coral">K</span> of text bytes|Any|Any|Stickfigure name
|(<span style="color:coral">K</span> + 5)-((<span style="color:coral">K</span> + 4) + ?)|[stickfigure data](/reference/spec/nodes)|Any|Any|See [stickfigure data](/reference/spec/nodes) for more information.

### Sound Library
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=160|Any|<span style="color:coral">L</span> = Number of sounds
|5-(?<span style="color:coral">L</span> + 4)|sequence with size of <span style="color:coral">L</span> of [sound name](/reference/spec/stknds#sound-header)|>=160|Any|See [sound name](/reference/spec/stknds#sound-header) for more information.

#### Sound Header
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=160|Any|<span style="color:coral">M</span> = Length of sound name
|5-(<span style="color:coral">M</span> + 4)|sequence with size of <span style="color:coral">M</span> of text bytes|>=160|Any|Sound name

### Sprite Library
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=400|Any|<span style="color:coral">N</span> = Number of sprites
|5-(?<span style="color:coral">N</span> + 4)|sequence with size of <span style="color:coral">N</span> of [sprite header](/reference/spec/stknds#sprite-header)|>=400|Any|See [sprite header](/reference/spec/stknds#sprite-header) for more information

#### Sprite Header
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1|8-bit unsigned byte|>=400|Any|<span style="color:cornflowerblue">if 1: </span><span style="color:coral">O</span> = sprite group source <span style="color:cornflowerblue">else if 0: </span> <span style="color:coral">O</span> = sprite source
|2-5|32-bit signed int big-endian|>=400|Any|<span style="color:coral">P</span> = Length of sprite name
|6-(<span style="color:coral">P</span> + 5)|sequence with size of <span style="color:coral">P</span> of text bytes|>=400|Any|Sprite name
|(<span style="color:coral">P</span> + 6)-?|<span style="color:cornflowerblue">if <span style="color:coral">O</span> == sprite group source: </span>sequence with size of <span style="color:coral">P</span> of [sprite group library data](/)<br> <span style="color:cornflowerblue">else if <span style="color:coral">O</span> == sprite source: </span> sequence with size of <span style="color:coral">P</span> of [sprite library data](/)|>=400|Any|See [sprite group library data](/) or [sprite library data](/) for more information.

#### Sprite Group Library Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=400|Any|<span style="color:coral">Q</span> = Number of sprite group state library IDs
|5-(4<span style="color:coral">Q</span> + 4)|sequence with size of <span style="color:coral">Q</span> of 32-bit signed int big-endian|>=400|Any|Sprite group state library ID

#### Sprite Library Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1|8-bit unsigned byte|>=400|Any|Sprite is transparent boolean
|2|8-bit unsigned byte|>=400|Any|Sprite is anti-alias boolean
|3-6|32-bit float big-endian|>=400|Any|Sprite default origin X
|7-10|32-bit float big-endian|>=400|Any|Sprite default origin Y
|11-14|32-bit float big-endian|>=400|Any|Sprite internal scale X
|15-18|32-bit float big-endian|>=400|Any|Sprite internal scale Y
|19|8-bit unsigned byte|>=401|>=9|Sprite has raw rgb data boolean
|20-23|32-bit signed int big-endian|>=400|Any|Sprite image width
|24-27|32-bit signed int big-endian|>=400|Any|Sprite image height
|20-23|32-bit signed int big-endian|>=400|Any|<span style="color:coral">R</span> = Number of raw RGBA8888 bytes
|24-(4<span style="color:coral">R</span> + 23)|sequence with size of <span style="color:coral">R</span> of [RGBA8888 bytes](/)|>=400|Any|See [RGBA8888 bytes](/) for more information.

### Movieclip Library
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|<span style="color:coral">S</span> = Number of movieclips
|5-(?<span style="color:coral">S</span> + 4)|sequence with size of <span style="color:coral">S</span> of [movieclip header](/reference/spec/stknds#movieclip-header)|>=300|Any|See [movieclip header](/reference/spec/stknds#movieclip-header) for more information.

#### Movieclip Header
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|<span style="color:coral">T</span> = Length of movieclip name
|6-(<span style="color:coral">T</span> + 5)|sequence with size of <span style="color:coral">T</span> of text bytes|>=300|Any|Movieclip name
|(<span style="color:coral">T</span> + 6)-((<span style="color:coral">T</span> + 5) + ?)|sequence with size of <span style="color:coral">T</span> of [movieclip library data](/reference/spec/sktnds#movieclip-library-data)|>=300|Any|See [movieclip library data](/reference/spec/sktnds#movieclip-library-data) for more information.
|?-?|32-bit signed int big-endian|>=300|Any|Movieclip UID

#### Movieclip Library Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|<span style="color:coral">U</span> = Number of frames
|5-8|32-bit signed int big-endian|>=300|Any|Movieclip FPS
|9-12|32-bit signed int big-endian|>=300|Any|Movieclip number of tweened frames
|13|8-bit unsigned byte|>=300|Any|Movieclip tweening enabled boolean
|14|8-bit unsigned byte|>=300|Any|Movieclip tween loop protection enabled boolean
|15-18|32-bit signed int big-endian|>=300|Any|Movieclip unique figure ID
|19-(?<span style="color:coral">U</span> + 18)|sequence with size of <span style="color:coral">U</span> of [movieclip frame data](/)|>=300|Any|See [movieclip frame data](/) for more information.

##### Movieclip Frame Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit float big-endian|>=300|Any|Frame sound volume
|5-8|32-bit float big-endian|>=310|Any|Frame sound pan
|9-12|32-bit float big-endian|>=310|Any|Frame sound pitch
|13-16|32-bit float big-endian|>=300|Any|Frame sound library ID
|17-20|32-bit signed int big-endian|>=300|Any|<span style="color:coral">V</span> = 
|21-(?<span style="color:coral">V</span> + 20)|sequence with size of <span style="color:coral">V</span> of [movieclip frame asset data](/)|>=300|Any|See [movieclip frame asset data](/) for more information.

##### Movieclip Frame Asset Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=400|Any|<span style="color:coral">W</span> = asset type. (0 = stickfigure, 3 = sprite group, 2 = sprite)
|5-?|<span style="color:cornflowerblue">if <span style="color:coral">W</span> == 0: </span>[movieclip frame stickfigure](/)<br><span style="color:cornflowerblue">else if <span style="color:coral">W</span> == 3: </span>[movieclip frame sprite group](/)<br><span style="color:cornflowerblue">else if <span style="color:coral">W</span> == 2: </span>[movieclip frame sprite](/)|>=300|Any|See [movieclip frame stickfigure](/), [movieclip frame sprite group](/), or [movieclip frame sprite](/) for more information.

###### Movieclip Frame Stickfigure
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|Library stickfigure ID

###### Stickfigure Positional Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|Any|Any|Stickfigure ID
|5-8|32-bit float big-endian|Any|Any|Stickfigure scale
|9-12|32-bit float big-endian|>=220|Any|Stickfigure transparency
|13-16|32-bit float big-endian|>=220|Any|Blur|Stickfigure blur
|17|8-bit unsigned byte|>=401|>=16|Is motion blur boolean
|18|8-bit unsigned byte|>=401|>=16|Motion blur is one direction boolean
|19-22|32-bit signed int big-endian|>=401|>=16|d,nvsakf

###### Sprite Group Positional Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|

###### Sprite Positional Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|

###### Movieclip Frame Sprite Group
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|Library sprite group ID


###### Movieclip Frame Sprite
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=300|Any|Library sprite ID

## Frames
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|Any|Any|<span style="color:coral">??</span> = Number of frames in project
|5-(?<span style="color:coral">??</span> + 4)|sequence of [frame data](/reference/spec/stknds#frame-data)|Any|Any|See [frame data](/reference/spec/stknds#frame-data) for more information.

### Frame Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|

#### Positional Frame Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|

#### ???
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|

#### Frame Textfield Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|

##### Textfield Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|

#### Frame Camera Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit float big-endian|>=170|Any|Camera scale
|5-8|32-bit float big-endian|>=170|Any|Camera offset X (gets multiplied by App.assetScaling)
|9-12|32-bit float big-endian|>=170|Any|Camera offset Y (gets multiplied by App.assetScaling)
|13-16|32-bit float big-endian|>=230|Any|Rotation (degrees)
|17|8-bit unsigned byte|>=310|Any|Is wobbling XY boolean
|18|8-bit unsigned byte|>=310|Any|Is wobbling rotation boolean
|19|8-bit unsigned byte|>=310|Any|Is wobble scale enabled boolean
|20-23|32-bit signed int big-endian|>=310|Any|Wobble XY intensity
|24-27|32-bit float big-endian|>=170|Any|Wobble rotation intensity
|28-31|32-bit float big-endian|>=170|Any|Wobble speed
|?|8-bit unsigned byte|>=230 && <=kjdknclNJSCLqijfewiOIDJ||:(





##### Positional Stickfigure Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|

##### Positional Movieclip Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|

##### Positional Sprite Group Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|

##### Positional Sprite Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|

## Auto Camera
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=237|Any|<span style="color:coral">???</span> =  Number of auto-cams
|5-(?<span style="color:coral">???</span> + 4)|sequence with size of <span style="color:coral">???</span> of [auto camera data](/reference/spec/auto-camera-data)|>=237|Any|See [auto camera data](/reference/spec/auto-camera-data) for more information.

### Auto Camera Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>=237|Any|Frame 1 (auto-cam start frame I think)
|5-8|32-bit signed int big-endian|>=237|Any|Frame 2 (auto-cam end frame I think)
|9|8-bit unsigned byte|>=237|Any|Is ease in boolean
|10|8-bit unsigned byte|>=237|Any|Is ease out boolean
|13-14|16-bit signed int (short) big-endian|>=256|Any|Interpolation ID

### Session Save Data
|Byte Range|Data Type|Versions|Builds|Description|
|----------|---------|--------|------|-----------|
|1-4|32-bit signed int big-endian|>251|Any|Frame index
|5-8|32-bit float big-endian|>251|Any|Guideline X (gets multiplied by App.assetScaling)
|9-12|32-bit float big-endian|>251|Any|Guideline Y (gets multiplied by App.assetScaling)
|13-16|32-bit float big-endian|>251|Any|Zoom
|17-20|32-bit float big-endian|>251|Any|Zoom position x (gets multiplied by App.assetScaling)
|21-24|32-bit float big-endian|>251|Any|Zoom position Y (gets multiplied by App.assetScaling)
|25-28|32-bit signed int big-endian|>251|Any|UV quality
|29|8-bit unsigned byte|>=300|Any|Only draw main nodes boolean
|30|8-bit unsigned byte|>=300|Any|Show figure IDs boolean
|31|8-bit unsigned byte|>251|Any|Onion skin is normal boolean
|32|8-bit unsigned byte|>251|Any|Is showing outline boolean
|33|8-bit unsigned byte|>=300|Any|Is showing outline creative boolean
|34|8-bit unsigned byte|>=310|Any|Is showing neighbor nodes boolean
|35|8-bit unsigned byte|>=310|Any|Is showing neighbor nodes creative boolean
|36|8-bit unsigned byte|>251|Any|Is showing guides boolean

