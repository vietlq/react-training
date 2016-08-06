# React projects from scratch

## Using ReactJS Without Node Compilation

Never ever use ReactJS without Node compilation for PROD, because:
* It's terribly slow as your browser has to recompile ReactJS everytime you load the page
* You have to expose ReactJS files/code

Always use Node to compile ReactJS to a single JS file!

## Install

```
npm install -g browserify
npm install -g babel-cli babel
npm install -g babel-preset-react
npm install -g babelify
npm install -g watchify
npm install -g react react-dom
```
