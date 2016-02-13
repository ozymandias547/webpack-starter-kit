# webpack-react-starter

Get up and running with webpack and react using this lightweight starter project.  Built for easy deployment to your choice of hosting platforms. 

Before starting...
```
npm install
```

development mode - starts a webpack dev server that watches your src files and compiles on the fly for fast development.
```
npm start
```

build development or production - generates a /dist folder in the root directory with compiled JS/CSS bundles.  Copy this dist folder into a statically server folder on any apache server, or setup a more complicated server such as node.
```
npm run build-dev
npm run build-prod #minifiies and concatenates
```

unit testing - finds any file that matches *Spec.js and runs them in chome/safari/firefox as unit tests.  
```
npm test
```

CSS/SCSS Precompilation included as examples of possibilities:

- Node-sass compiler, require SCSS using
```
require("./mySassFile.scss")
```
- Lightweight SCSS mixins through Bourbon (http://bourbon.io/)


