# Layout components

Use these web components to cover basic layouts in HTML. The components are built with StencilJS.

To use them from CDN add this script to your HTML: 
``` html
<script type='module' src='https://unpkg.com/layout-comp@0.0.1/dist/layout-components/layout-components.esm.js'></script>
```

### h-flex

Using flexbox this container is to align content at either end horizontally, and also centers the content.

``` html
<h-flex>
  <p>left</p>
  <p>right</p>
</h-flex>
```

### v-flex

This container matches h-flex but aligns the content vertically, also centering the content.

``` html
<v-flex>
  <p>top</p>
  <p>bottom</p>
</v-flex>
```