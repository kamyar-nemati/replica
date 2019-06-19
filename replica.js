
export const deepCopy = (target, source) => {
    Object.assign(target, source);
    // check if there's any nested objects
    Object.keys(source).forEach((prop) => {
        // skip null properties of the object
        if (source[prop] === null) {
            return;
        }
        /**
          * assign function copies functions and
          * literals (int, strings, etc...)
          * except for objects and arrays, so:
          */
        if (typeof(source[prop]) === 'object') {
            // check if the item is, in fact, an array
            if (Array.isArray(source[prop])) {
                // clear the copied referenece of nested array
                target[prop] = Array();
                // iterate array's item and copy over
                source[prop].forEach((item, index) => {
                    // array's items could be objects too!
                    if (typeof(item) === 'object') {
                        // clear the copied referenece of nested objects
                        target[prop][index] = Object();
                        // and re do the process for nested objects
                        deepCopy(target[prop][index], item);
                    } else {
                        target[prop].push(item);
                    }
                });
            // otherwise, treat it as an object
            } else {
                // clear the copied referenece of nested objects
                target[prop] = Object();
                // and re do the process for nested objects
                deepCopy(target[prop], source[prop]);
            }
        }
    });
};
