import{_ as s,o as a,c as e,O as o}from"./chunks/framework.2174ec3a.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"spec/subformats/id_conversion_maps.md","filePath":"spec/subformats/id_conversion_maps.md"}'),p={name:"spec/subformats/id_conversion_maps.md"};function t(l,n,i,r,c,d){return a(),e("div",null,n[0]||(n[0]=[o(`<h3 id="id-conversion-maps-header" tabindex="-1">ID Conversion Maps Header <a class="header-anchor" href="#id-conversion-maps-header" aria-label="Permalink to &quot;ID Conversion Maps Header&quot;">​</a></h3><table><thead><tr><th>Data Type</th><th>Versions</th><th>Builds</th><th>Description</th></tr></thead><tbody><tr><td>32-bit signed int big-endian</td><td>&gt;=300</td><td>Any</td><td><span style="color:coral;">G</span> = Number of destination containers</td></tr><tr><td>sequence with size of <span style="color:coral;">G</span> of <a href="./spec/formats/stknds.html#ID-Conversion-Maps-Outer-Loop">outer loop data</a></td><td>&gt;=300</td><td>Any</td><td>See <a href="./spec/formats/stknds.html#ID-Conversion-Maps-Outer-Loop">outer loop data</a> for more information.</td></tr></tbody></table><h3 id="id-conversion-maps-outer-loop-for-each-destination-container" tabindex="-1">ID Conversion Maps Outer Loop (for each destination container) <a class="header-anchor" href="#id-conversion-maps-outer-loop-for-each-destination-container" aria-label="Permalink to &quot;ID Conversion Maps Outer Loop (for each destination container)&quot;">​</a></h3><table><thead><tr><th>Data Type</th><th>Versions</th><th>Builds</th><th>Description</th></tr></thead><tbody><tr><td>32-bit signed int big-endian</td><td>&gt;=300</td><td>Any</td><td><span style="color:coral;">H</span> = Number of source containers</td></tr><tr><td>32-bit signed int big-endian</td><td>&gt;=300</td><td>Any</td><td>Destination container (timeline) UID</td></tr><tr><td>sequence with size of <span style="color:coral;">H</span> of <a href="./spec/formats/stknds.html#ID-Conversion-Maps-Middle-Loop">middle loop data</a></td><td>&gt;=300</td><td>Any</td><td>See <a href="./spec/formats/stknds.html#ID-Conversion-Maps-Middle-Loop">middle loop data</a> for more information.</td></tr></tbody></table><h3 id="id-conversion-maps-middle-loop-for-each-source-container" tabindex="-1">ID Conversion Maps Middle Loop (for each source container) <a class="header-anchor" href="#id-conversion-maps-middle-loop-for-each-source-container" aria-label="Permalink to &quot;ID Conversion Maps Middle Loop (for each source container)&quot;">​</a></h3><table><thead><tr><th>Data Type</th><th>Versions</th><th>Builds</th><th>Description</th></tr></thead><tbody><tr><td>32-bit signed int big-endian</td><td>&gt;=300</td><td>Any</td><td><span style="color:coral;">I</span> = Number of ID mappings</td></tr><tr><td>32-bit signed int big-endian</td><td>&gt;=300</td><td>Any</td><td>Source container (timeline) UID</td></tr><tr><td>sequence with size of <span style="color:coral;">I</span> of <a href="./spec/formats/stknds.html#ID-Conversion-Maps-Inner-Loop">inner loop data</a></td><td>&gt;=300</td><td>Any</td><td>See <a href="./spec/formats/stknds.html#ID-Conversion-Maps-Inner-Loop">inner loop data</a> for more information.</td></tr></tbody></table><h3 id="id-conversion-maps-inner-loop-for-each-id-mapping" tabindex="-1">ID Conversion Maps Inner Loop (for each ID mapping) <a class="header-anchor" href="#id-conversion-maps-inner-loop-for-each-id-mapping" aria-label="Permalink to &quot;ID Conversion Maps Inner Loop (for each ID mapping)&quot;">​</a></h3><table><thead><tr><th>Data Type</th><th>Versions</th><th>Builds</th><th>Description</th></tr></thead><tbody><tr><td>32-bit signed int big-endian</td><td>&gt;=300</td><td>Any</td><td>Source container figure ID</td></tr><tr><td>32-bit signed int big-endian</td><td>&gt;=300</td><td>Any</td><td>Destination container figure ID</td></tr></tbody></table><h4 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-label="Permalink to &quot;Explanation&quot;">​</a></h4><p>When you paste a figure from one <a href="./spec/formats/stknds.html#container">container</a> to another, Stick Nodes converts the ID of the figure from the source container to an ID within the destination container. If the figure was never pasted to the destination container before, it will assign a new unique ID to the figure within the destination container. If the figure was previously pasted to the destination container, it looks at the ID conversion map to know what ID to assign the figure within the destination container.</p><p>For a visual aid to help understand ID conversion maps, see <a href="./spec/formats/stknds.html#id-conversion-maps-visual-aid">ID converstion maps visual aid</a>.</p><h4 id="visual-aids" tabindex="-1">Visual Aids <a class="header-anchor" href="#visual-aids" aria-label="Permalink to &quot;Visual Aids&quot;">​</a></h4><p>You can imagine the map datatypes of an example ID conversion map like this:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    int: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        int: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            int: int,</span></span>
<span class="line"><span style="color:#e1e4e8;">            int: int,</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        int: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            int: int</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    int: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        int: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            int: int,</span></span>
<span class="line"><span style="color:#e1e4e8;">            int: int,</span></span>
<span class="line"><span style="color:#e1e4e8;">            int: int</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    int: {</span></span>
<span class="line"><span style="color:#24292e;">        int: {</span></span>
<span class="line"><span style="color:#24292e;">            int: int,</span></span>
<span class="line"><span style="color:#24292e;">            int: int,</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        int: {</span></span>
<span class="line"><span style="color:#24292e;">            int: int</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    int: {</span></span>
<span class="line"><span style="color:#24292e;">        int: {</span></span>
<span class="line"><span style="color:#24292e;">            int: int,</span></span>
<span class="line"><span style="color:#24292e;">            int: int,</span></span>
<span class="line"><span style="color:#24292e;">            int: int</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>For a visual of what each value could represent:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    ID_of_main_animation_container: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ID_of_movieclip_1_container: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            ID_of_figure_1_when_in_movieclip_1: ID_of_figure_1_when_in_main_animation,</span></span>
<span class="line"><span style="color:#e1e4e8;">            ID_of_figure_2_when_in_movieclip_1: ID_of_figure_2_when_in_main_animation,</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        ID_of_movieclip_2_container: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            ID_of_figure_1_when_in_movieclip_2: ID_of_figure_1_when_in_main_animation</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ID_of_movieclip_1_container: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ID_of_main_animation_container: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            ID_of_figure_1_when_in_main_animation: ID_of_figure_1_when_in_movieclip_1,</span></span>
<span class="line"><span style="color:#e1e4e8;">            ID_of_figure_2_when_in_main_animation: ID_of_figure_2_when_in_movieclip_1,</span></span>
<span class="line"><span style="color:#e1e4e8;">            ID_of_figure_3_when_in_main_animation: ID_of_figure_3_when_in_movieclip_1</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    ID_of_main_animation_container: {</span></span>
<span class="line"><span style="color:#24292e;">        ID_of_movieclip_1_container: {</span></span>
<span class="line"><span style="color:#24292e;">            ID_of_figure_1_when_in_movieclip_1: ID_of_figure_1_when_in_main_animation,</span></span>
<span class="line"><span style="color:#24292e;">            ID_of_figure_2_when_in_movieclip_1: ID_of_figure_2_when_in_main_animation,</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        ID_of_movieclip_2_container: {</span></span>
<span class="line"><span style="color:#24292e;">            ID_of_figure_1_when_in_movieclip_2: ID_of_figure_1_when_in_main_animation</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    ID_of_movieclip_1_container: {</span></span>
<span class="line"><span style="color:#24292e;">        ID_of_main_animation_container: {</span></span>
<span class="line"><span style="color:#24292e;">            ID_of_figure_1_when_in_main_animation: ID_of_figure_1_when_in_movieclip_1,</span></span>
<span class="line"><span style="color:#24292e;">            ID_of_figure_2_when_in_main_animation: ID_of_figure_2_when_in_movieclip_1,</span></span>
<span class="line"><span style="color:#24292e;">            ID_of_figure_3_when_in_main_animation: ID_of_figure_3_when_in_movieclip_1</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>For an idea of what actual data might look like:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    0: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        1: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            420: 69,</span></span>
<span class="line"><span style="color:#e1e4e8;">            1: 3,</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        2: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            20: 20</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    1: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        0: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            1: 3000,</span></span>
<span class="line"><span style="color:#e1e4e8;">            343: 222,</span></span>
<span class="line"><span style="color:#e1e4e8;">            10: 8</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    0: {</span></span>
<span class="line"><span style="color:#24292e;">        1: {</span></span>
<span class="line"><span style="color:#24292e;">            420: 69,</span></span>
<span class="line"><span style="color:#24292e;">            1: 3,</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        2: {</span></span>
<span class="line"><span style="color:#24292e;">            20: 20</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    1: {</span></span>
<span class="line"><span style="color:#24292e;">        0: {</span></span>
<span class="line"><span style="color:#24292e;">            1: 3000,</span></span>
<span class="line"><span style="color:#24292e;">            343: 222,</span></span>
<span class="line"><span style="color:#24292e;">            10: 8</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,18)]))}const y=s(p,[["render",t]]);export{h as __pageData,y as default};
