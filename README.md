# Seed

[![Build Status](https://travis-ci.org/helpscout/seed.svg?branch=master)](https://travis-ci.org/helpscout/seed)

> A component-first CSS design system.

<img src="https://developer.helpscout.com/images/seed.png" width="100">


## Documentation

You can find all of our documentation at **[https://seedcss.com](http://developer.helpscout.net/seed/)**.


## Getting started

To get started with this project, run the following command:

```
npm install
```

This installs [Lerna](https://lernajs.io/), as well as other development dependencies.

Once it's done, run this command:

```
npm run bootstrap
```

This tells Lerna to magically setup all the seed packages!


### Testing

To run tests on all the seed packs, run this command:

```
npm run test
```

### Building

To build all the seed packs (for publishing), run this command:

```
npm run build
```

### Publish

To publish to npm, run the following command and walk through the CLI steps:

```
npm run release
```


## About this repo

This [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) contains all the official Seed Packs that make up the foundations of Seed CSS. The idea for the monorepo was inspired by [IstanbulJS](https://github.com/istanbuljs/istanbuljs).

Having an all-in-one repo allows easier coordination and maintanence.

And having to do a single git clone is way _way_ nicer than having to do 60+ git clones 😜.


### Impact on Seed Packs

No worries! All of the Seed Packs can still be individually installed via `npm install`. That's not goin' away. The Packs are just moving to a new home on Github is all.


## Made with ❤️

By your friends at [Help Scout](https://www.helpscout.net)
