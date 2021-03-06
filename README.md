# @calipsa/wrap-error

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

## Installation
```bash
# using npm:
npm install --save @calipsa/wrap-error

# or if you like yarn:
yarn add @calipsa/wrap-error
```

## Usage
```javascript
import wrapError from '@calipsa/wrap-error'

fs.readFile('incorrect path', (err, data) => {
  if (err) {
    throw wrapError(err, 'Failed to read file')
  }
  // ...
})
```

[npm-url]: https://npmjs.org/package/@calipsa/wrap-error
[downloads-image]: http://img.shields.io/npm/dm/@calipsa/wrap-error.svg
[npm-image]: http://img.shields.io/npm/v/@calipsa/wrap-error.svg
[david-dm-url]:https://david-dm.org/inker/@calipsa/wrap-error
[david-dm-image]:https://david-dm.org/inker/@calipsa/wrap-error.svg
[david-dm-dev-url]:https://david-dm.org/inker/@calipsa/wrap-error#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/@calipsa/wrap-error/dev-status.svg
