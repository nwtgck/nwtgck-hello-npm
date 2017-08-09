# nwtgck-hello [![Build Status](https://travis-ci.org/nwtgck/nwtgck-hello-npm.svg?branch=master)](https://travis-ci.org/nwtgck/nwtgck-hello-npm)

A practice npm package of @nwtgck.

## How to install

```
npm install --save nwtgck-hello
```

## How to use in your code

### Way1

```js
const nwtgckHello = require('nwtgck-hello');
console.log(nwtgckHello.hello());
```


### Way2

```js
import {hello} from 'nwtgck-hello';
console.log(hello());
```
