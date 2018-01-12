# done-ssr CSS ordering bug example

This is an example application meant to demonstrate [this bug](https://github.com/donejs/done-ssr/issues/450). Currently it is not able to replicate it.

The import files are:

```
- components
  - a.component
  - b.component
  - shared.css
- index.stache
```

__a.component__ and __b.component__ are components that are both dynamically imported in the index.stache. They are our different pages. __shared.css__ are styles shared with a.component and b.component.

According to the bug, it is possible to have the CSS ordering to be incorrect *in production*.

Here we would want, when loading page __a__ to see index.css, a.component's css, and then the shared.css.

Currently they are ordering correctly. If you can make it break, please do!


## Current output

```html
<html>
 <head>
  <title>
  </title>
  <link rel="stylesheet" href="/dist/bundles/bundle-order/index.css" asset-id="bundles/bundle-order/index.css!done-css@3.0.1#css">
  <link rel="stylesheet" href="/dist/bundles/bundle-order/components/a.css" asset-id="bundles/bundle-order/components/a.css!done-css@3.0.1#css">
  <link rel="stylesheet" href="/dist/bundles/a-component-b-component.css" asset-id="bundles/a-component-b-component.css!done-css@3.0.1#css">
 </head>
 <body>
  <can-import from="bundle-order/styles.less">
  </can-import>
  <can-import from="bundle-order/app" export-as="viewModel">
  </can-import>
  <can-import from="can-stache/helpers/route">
  </can-import>
  <h1>
   My app!
  </h1>
  <a href="/a">
   Page A
  </a>
  <a href="/b">
   Page B
  </a>
  <can-import from="~/components/a.component">
   <a-c>
    <p>
     This is the a-c component
    </p>
   </a-c>
  </can-import>
  <script src="/dist/steal.production.js">
  </script>
 </body>
</html>
```
