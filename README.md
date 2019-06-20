# Replica
JavaScript Object Replicator

## Overview
Replica is a JavaScript library that provides a way to clone objects. Nested properties such as literals, arrays, objects, and functions are covered.

## Usage
1. Install the package `npm i @kamyar-nemati/replica`
2. Import the package `import { deepCopy } from '@kamyar-nemati/replica';`
3. Finally:
```js
let cloneObject = Object();
// copying 'originalObject' into 'cloneObject'
deepCopy(cloneObject, originalObject);
/**
 * clone object's properties will be 
 * independent from originla object.
 */
```
