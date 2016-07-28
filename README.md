# seed-packfinder [![Build Status](https://travis-ci.org/helpscout/seed-packfinder.svg?branch=master)](https://travis-ci.org/helpscout/seed-packfinder) [![npm version](https://badge.fury.io/js/seed-packfinder.svg)](https://badge.fury.io/js/seed-packfinder)

Node utility to find seed packs!

## Install
```
npm install seed-packfinder --save-dev
```


## Basic Usage

```javascript
var packfinder = require('seed-packfinder');

var seedpacks = packfinder.find();

if (seedpacks) {
  console.log('Yay! We have seed packs');

  seedpacks.forEach(function(pack) {
    // Do stuff with the pack :)
  });
}
```


## Options

### packfinder.find()
Returns: `Array` (`false` if no packs are found)
