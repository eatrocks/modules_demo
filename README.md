# modules_demo
Demonstrate ES6 and CommonJS in Node

## What

Shows the consumption of both an ES6 Module and a CommonJS module from a node.js project.

### Setup

Run `npm run setup` from the root. This will clean and install all 3 sub-projects including removing `node_modules` folders & `package-lock.js` files. Removing the `package-lock.js` file is unusual but fine for a demo project. A build step is not required. 

### Run

From the `myapp` directory run `npm start`.

A successful execution will produce output like...

```
index in esmodule executed Hello Bruce
index in cjsmodule executed Hello Me
Hello BDC
Hello BDC2
```