# is

> A javascript type checker

```js
is.array([]) //=> true
```

## Installation

Using npm

```
$ npm install @necho/js-type
```

Using yarn

```
$ yarn add @necho/js-type
```

## Usage

Commonjs usage

```js
const is = require('@necho/js-type');

is.number(7) //=> true
```

ES6 usage
```js
import is from '@necho/js-type';

is.number(7) //=> true
```

Using semantic function
```js
import { isArray } from '@necho/js-type';

isArray('') //=> false
```

## API

### is.{method}

**.string(value)**

**.number(value)**

**.boolean(value)**

**.array(value)**

**.object(value)**