# Replica
JavaScript Object Replicator

## Overview
Replica is a JavaScript library that provides a way to clone objects. Nested properties such as literals, arrays, objects, and functions are covered.

## Usage
```js
let cloneObject = Object();
// copying 'originalObject' into 'cloneObject'
deepCopy(cloneObject, originalObject);
/**
 * clone object's properties will be 
 * independent from originla object.
 */
```