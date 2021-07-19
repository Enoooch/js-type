# is

> A javascript type checker

```js
is.array([]) //=> true

isNumber('') //=> false
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
const is = require('@necho/js-type').default;

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

*Basic*

**.string(value)**

**.number(value)**

**.boolean(value)**

**.array(value)**

**.object(value)**

**.date(value)**

**.symbol(value)**


*Boolean*

**.false(value)**

**.true(value)**


*Number*

**.infinite(value)**

**.nan(value)**

**.even(value)**

**.odd(value)**


*Nullish*

**.null(value) / .nil(value)**

**.undefined(value) / .undef(value)**

**.defined(value)**


*Function*

**.function(value)**

**.normalFunction(value)**

**.generatorFunction(value)**

**.asyncFunction(value)**

