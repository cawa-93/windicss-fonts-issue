# windicss-fonts-issue
WindiCSS fonts issue reproduction

Repro:

1. ```npm i && npm run build```
2. Note the `dist` directory: It contains the font file like `/SegMDL2.da0f727e.ttf` but in `index.b29f9d83.css` it still as `Segoe fonts v1710/SegMDL2.ttf`. Because of this, the font file cannot be found and linked in the production.
