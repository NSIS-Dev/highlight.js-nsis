# highlight.js-nsis

[![npm](https://flat.badgen.net/npm/license/@nsis/highlight.js)](https://www.npmjs.org/package/@nsis/highlight.js)
[![npm](https://flat.badgen.net/npm/v/@nsis/highlight.js)](https://www.npmjs.org/package/@nsis/highlight.js)
[![CircleCI](https://flat.badgen.net/circleci/github/highlightjs/highlightjs-nsis)](https://circleci.com/gh/highlightjs/highlightjs-nsis)
[![David](https://flat.badgen.net/david/dev/highlightjs/highlightjs-nsis)](https://david-dm.org/highlightjs/highlightjs-nsis?)

[highlight.js](https://github.com/highlightjs/highlight.js) syntax definition for the NSIS language

## Usage

Simply include the `highlight.js` script package in your webpage or node app, load up this module and apply it to `hljs`.

If you're not using a build system and just want to embed this in your webpage:

```html
<script src="https://cdn.jsdelivr.net/npm/highlight.js@9/lib/index.min.js"></script>
<script src="nsis.js"></script>
<script>
    hljs.registerLanguage('nsis', window.hljsDefineNSIS);
    hljs.initHighlightingOnLoad();
</script>
```

If you're using a bundler
   
```js
const hljs = require('highlight.js');
const hljsDefineNSIS = require('@nsis/highlight.js');

hljsDefineNSIS(hljs);
hljs.initHighlightingOnLoad();
```

## License

Highlight.js is released under the BSD License. See [LICENSE](https://raw.githubusercontent.com/highlightjs/highlight.js/master/LICENSE) file for details.
