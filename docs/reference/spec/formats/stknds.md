---
outline: deep
---

# .stknds File Format Specified

## Compression
The .stknds format is compressed when saved and decompressed when loaded to reduce its file size. It is compressed and decompressed using the GZIP compression and decompression algorithms with a buffer size of 4096. The following information assumes that the .stknds file is in its uncompressed state.

## File Format Overview

## Header
|Data Type|Versions|Description|
|---------|--------|-----------|
|32-bit signed int big-endian|Any|Stick Nodes version number
|32-bit signed int big-endian|>=401|Build number
|32-bit signed int big-endian|Any|<span style="color:coral">A</span> = Length of project name (prob causes weird behavior or error if length of project name length is <= 0)
|sequence with size of <span style="color:coral">A</span> of text bytes|Any|Project name

## Project Options
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|8-bit unsigned byte|>=401|>=16|Is YouTube short boolean
|8-bit unsigned byte|>=244|Any|Watermark enabled boolean
|32-bit signed int big-endian|>=220|Any|<span style="color:coral">B</span> = Length of watermark text (watermark text bytes are not read if this is <= 0)
|sequence with size of <span style="color:coral">B</span> of text bytes|>=220|Any|Watermark text
|32-bit signed int big-endian|>=220|Any|Watermark color. See the [color reference](/reference/spec/nodes#color) for more information.
|32-bit signed int big-endian|Any|Any|FPS
|32-bit signed int big-endian|>=176|Any|Number of tweened frames
|8-bit unsigned byte|>=127|Any|Has shown loop message boolean
|8-bit unsigned byte|>=113|Any|Has shown panning mode message boolean
|8-bit unsigned byte|Any|Any|Has shown tweening mode message boolean
|8-bit unsigned byte|>=220|Any|Has shown magnifier message boolean
|8-bit unsigned byte|Any|Any|Tweening enabled boolean
|8-bit unsigned byte|>=127|Any|Is loop boolean
|8-bit unsigned byte|>=140 && < 200|Any|[empty byte]

## Unique IDs
Probably used to keep track of the last assigned unique ID(?)
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|Any|Any|Unique figure ID
|32-bit signed int big-endian|>=176|Any|Unique textfield box ID
|32-bit signed int big-endian|>=300|Any|Unique movieclip ID
|32-bit signed int big-endian|>=300|Any|Frames container UID

## Fonts
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=400|Any|<span style="color:coral">C</span> = Number of fonts to check if loaded? Does NOT include the default font. Should be equal to whatever the greatest index of all loaded fonts is.
|sequence with size of <span style="color:coral">C</span> of 8-bit unsigned bytes (booleans)|>=400|Any|Loaded fonts booleans. See [font booleans reference](/reference/spec/stknds#font-booleans) for the order of the booleans. Do NOT write a boolean for font index 0 (the default font)

## Hidden Library IDs

### Hidden Stickfigure Library IDs
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=300|Any|<span style="color:coral">D</span> = Number of hidden stickfigure library IDs
|sequence with size of <span style="color:coral">D</span> of 32-bit signed int big-endian|>=300|Any|Hidden stickfigure library IDs

### Hidden Movieclip Library IDs
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=300|Any|<span style="color:coral">E</span> = Number of hidden movieclip library IDs
|sequence with size of <span style="color:coral">E</span> of 32-bit signed int big-endian|>=300|Any|Hidden movieclip library IDs

### Hidden Sprite Library IDs
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=400|Any|<span style="color:coral">F</span> = Number of hidden sprite library IDs
|sequence with size of <span style="color:coral">F</span> of 32-bit signed int big-endian|>=400|Any|Hidden sprite library IDs

## ID Conversion Maps
When you paste a figure from one [container](/reference/spec/stknds#container) to another, Stick Nodes converts the ID of the figure from the source container to an ID within the destination container. If the figure was never pasted to the destination container before, it will assign a new unique ID to the figure within the destination container. If the figure was previously pasted to the destination container, it looks at the ID conversion map to know what ID to assign the figure within the destination container.

For a visual aid to help understand ID conversion maps, see [ID converstion maps visual aid](/reference/spec/stknds#id-conversion-maps-visual-aid).

### ID Conversion Maps Header
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=300|Any|<span style="color:coral">G</span> = Number of destination containers
|sequence with size of <span style="color:coral">G</span> of [outer loop data](/reference/spec/stknds#ID-Conversion-Maps-Outer-Loop)|>=300|Any|See [outer loop data](/reference/spec/stknds#ID-Conversion-Maps-Outer-Loop) for more information.

### ID Conversion Maps Outer Loop (for each destination container)
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=300|Any|<span style="color:coral">H</span> = Number of source containers
|32-bit signed int big-endian|>=300|Any|Destination container (timeline) UID
|sequence with size of <span style="color:coral">H</span> of [middle loop data](/reference/spec/stknds#ID-Conversion-Maps-Middle-Loop)|>=300|Any|See [middle loop data](/reference/spec/stknds#ID-Conversion-Maps-Middle-Loop) for more information.

### ID Conversion Maps Middle Loop (for each source container)
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=300|Any|<span style="color:coral">I</span> = Number of ID mappings
|32-bit signed int big-endian|>=300|Any|Source container (timeline) UID
|sequence with size of <span style="color:coral">I</span> of [inner loop data](/reference/spec/stknds#ID-Conversion-Maps-Inner-Loop)|>=300|Any|See [inner loop data](/reference/spec/stknds#ID-Conversion-Maps-Inner-Loop) for more information.

### ID Conversion Maps Inner Loop (for each ID mapping)
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=300|Any|Source container figure ID
|32-bit signed int big-endian|>=300|Any|Destination container figure ID

## Background Image
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|8-bit unsigned byte|>=140 && <400|Any|Background image enabled boolean
|8-bit unsigned byte|>=140 && <170|Any|Some boolean related to bg image scaling? Something vaguely related to being strict 1920x1080 when false and scaling to canvas width and height when true?
|32-bit float big-endian|>=170 && <400|Any|Scale background image x
|32-bit float big-endian|>=170 && <400|Any|Scale background image y
|32-bit signed int big-endian|>=140 && <400|Any|Background image width
|32-bit signed int big-endian|>=140 && <400|Any|Background image height
|[RGB888](/reference/spec/stknds#rgb888) sequence of 8-bit unsigned bytes|>=140 && <400|Any|Image data

## Libraries

### Stickfigure Library
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|Any|Any|<span style="color:coral">J</span> = Number of stickfigures in library
|sequence of [stickfigure header](/reference/spec/stknds#stickfigure-header)|Any|Any|See [stickfigure header](/reference/spec/stknds#stickfigure-header) for more information.

#### Stickfigure Header
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|Any|Any|<span style="color:coral">K</span> = Length of stickfigure name
|sequence with size of <span style="color:coral">K</span> of text bytes|Any|Any|Stickfigure name
|[stickfigure data](/reference/spec/nodes)|Any|Any|See [stickfigure data](/reference/spec/nodes) for more information.

### Sound Library
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=160|Any|<span style="color:coral">L</span> = Number of sounds
|sequence with size of <span style="color:coral">L</span> of [sound header](/reference/spec/stknds#sound-header)|>=160|Any|See [sound header](/reference/spec/stknds#sound-header) for more information.

#### Sound Header
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=160|Any|<span style="color:coral">M</span> = Length of sound name
|sequence with size of <span style="color:coral">M</span> of text bytes|>=160|Any|Sound name

### Sprite Library
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=400|Any|<span style="color:coral">N</span> = Number of sprites
|sequence with size of <span style="color:coral">N</span> of [sprite header](/reference/spec/stknds#sprite-header)|>=400|Any|See [sprite header](/reference/spec/stknds#sprite-header) for more information

#### Sprite Header
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|8-bit unsigned byte|>=400|Any|<span style="color:cornflowerblue">if 1: </span><span style="color:coral">O</span> = sprite group source <span style="color:cornflowerblue">else if 0: </span> <span style="color:coral">O</span> = sprite source
|32-bit signed int big-endian|>=400|Any|<span style="color:coral">P</span> = Length of sprite name
|sequence with size of <span style="color:coral">P</span> of text bytes|>=400|Any|Sprite name
|<span style="color:cornflowerblue">if <span style="color:coral">O</span> == sprite group source: </span>[sprite group library data](/)<br> <span style="color:cornflowerblue">else if <span style="color:coral">O</span> == sprite source: </span>[sprite library data](/)|>=400|Any|See [sprite group library data](/) or [sprite library data](/) for more information.

### Movieclip Library
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=300|Any|<span style="color:coral">S</span> = Number of movieclips
|sequence with size of <span style="color:coral">S</span> of [movieclip header](/reference/spec/stknds#movieclip-header)|>=300|Any|See [movieclip header](/reference/spec/stknds#movieclip-header) for more information.

#### Movieclip Header
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=300|Any|<span style="color:coral">T</span> = Length of movieclip name
|sequence with size of <span style="color:coral">T</span> of text bytes|>=300|Any|Movieclip name
|[movieclip library data](/reference/spec/stknds#movieclip-library-data)|>=300|Any|See [movieclip library data](/reference/spec/stknds#movieclip-library-data) for more information.
|32-bit signed int big-endian|>=300|Any|Movieclip UID

## Frames
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|Any|Any|<span style="color:coral">??</span> = Number of frames in project
|sequence of [frame data](/reference/spec/stknds#frame-data) of length <span style="color:coral">??</span>|Any|Any|See [frame data](/reference/spec/stknds#frame-data) for more information.

## Auto Camera
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=237|Any|<span style="color:coral">???</span> =  Number of auto-cams
|sequence with size of <span style="color:coral">???</span> of [auto camera data](/reference/spec/stknds#auto-camera-data)|>=237|Any|See [auto camera data](/reference/spec/stknds#auto-camera-data) for more information.

### Session Save Data
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|[session save data](/)|>=251|Any|See [session save data](/) for more information.

### Movieclip Cache
|Data Type|Versions|Builds|Description|
|---------|--------|------|-----------|
|32-bit signed int big-endian|>=319|Any|<span style="color:coral">???</span> =  Number of cached movieclips
|sequence with size of <span style="color:coral">???</span> of [cached movieclip data](/)|>=319|Any|See [cached movieclip data](/) for more information.

## Additional Information

### Font Booleans
|Font Index|Font Name|
|----------|---------|
|0|default|
|1|Coolvetica|
|2|Be Kind to the Earth|
|3|Enchanted Land|
|4|Capture It|
|5|VCR OSD Mono|
|6|Asian|
|7|Moon Runes|
|8|Yolks Emoticons|
|9|Andy Bold|
|10|Digital Play|
|11|Parametric Glitch|
|12|Pusaba|
|13|Sugar and Vinegar|
|14|Typo Round|
|15|international|
|16|Determination|
|17|Comic Sans|
|18|Impact|

### ID Conversion Maps Visual Aid
You can imagine the map datatypes of an example ID conversion map like this:

```
{
    int: {
        int: {
            int: int,
            int: int,
        },
        int: {
            int: int
        }
    },
    int: {
        int: {
            int: int,
            int: int,
            int: int
        }
    }
}
```

For a visual of what each value could represent:

```
{
    ID_of_main_animation_container: {
        ID_of_movieclip_1_container: {
            ID_of_figure_1_when_in_movieclip_1: ID_of_figure_1_when_in_main_animation,
            ID_of_figure_2_when_in_movieclip_1: ID_of_figure_2_when_in_main_animation,
        },
        ID_of_movieclip_2_container: {
            ID_of_figure_1_when_in_movieclip_2: ID_of_figure_1_when_in_main_animation
        }
    },
    ID_of_movieclip_1_container: {
        ID_of_main_animation_container: {
            ID_of_figure_1_when_in_main_animation: ID_of_figure_1_when_in_movieclip_1,
            ID_of_figure_2_when_in_main_animation: ID_of_figure_2_when_in_movieclip_1,
            ID_of_figure_3_when_in_main_animation: ID_of_figure_3_when_in_movieclip_1
        }
    }
}
```

For an idea of what actual data might look like:

```
{
    0: {
        1: {
            420: 69,
            1: 3,
        },
        2: {
            20: 20
        }
    },
    1: {
        0: {
            1: 3000,
            343: 222,
            10: 8
        }
    }
}
```