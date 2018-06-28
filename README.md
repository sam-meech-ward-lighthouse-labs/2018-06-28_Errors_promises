## Errors

Sometimes JavaScript code needs to tell us that something went wrong, in these cases we can `throw` an exeption. 

Javascript has an `Error` constructor which allows us to create error objects that contain helpful information for debugging. 

```js
const error = new Error("Where the puppies at?");
```

We can then throw these errors

```js
throw new Error("Where the puppies at?");
```

## Callbacks

Most of the time, errors appear in async code. This means handling errors with callback functions. The most common way of achieving this is by passing in an error object as the firs parameter of the callback function.

```js
heard(["mittens", "fluffy"], (err, data) => {
    if (err) {
        console.error("AHHHHHHHHH, ERRORRRRRR, OMG, LOL", err);
        return;
    }
    console.log("4", data);
});
```

Then we can check if there was an error using

```js
if (error) {
    //Handle the error
} 
```

Always handle your errors somehow!!!!! 
It will save you lots of debugging time!!!!

The lazy way is to just console.log the error.

```js
if (err) {
    console.error("AHHHHHHHHH, ERRORRRRRR, OMG, LOL", err);
    return;
}
```

## Promises

* knex uses promises
* $.ajax uses custom poromises
* They solve async stuff

Promises solve a lot of issues that callback's can't solve, so promises are how we will handle async code in modern javascript.

Instead of passing a callback to another function, a function will return a promise object.

```js
const promise = db.save({name: "paddington", hat: true})
```

The promise represents a future value the will be populated later on. We can execute code when a promise is fulfilled by calling the `.then` method on the promise object. We can catch any errors using the `.catch` method on the object.

```js
db.save({name: "paddington", hat: true})
.then((data) => {
    console.log(`saved ${data.name}`);
    return db.save(null);
})
.catch((err) => {
    console.log("AHHHHHHHHH, ERRORRRRRR, OMG, LOL", err);
})
```

We can execute many promises at the same time using `Promise.all` which accepts an array of promises and returns a single promise. And we already know how to use a single promise.

```js
const promises = [
db.save({name: "paddington", hat: true}),
db.save({name: "Weeeniee the pooh"}),
db.save({name: "Yogi bear"})
];

Promise.all(promises)
.then((data) => {
    console.log(`saved ${data[0].name}`);
    console.log(`saved ${data[1].name}`);
    console.log(`saved ${data[2].name}`);
})
.catch((error) => {
    console.log("AHHHHHHHHHHHH", error);
});
```

---

## Not Covering in Lecture (but still important)

### Issues with callbacks

* Callbacks can happen now *or* later
* Callbacks can get called zero or many times
* Callbacks can "swallow" errors

### How to create promises

contrived example:

```js
function doSomething(thing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!thing) {
                reject(new Error("Can't do something without a thing"));
            } else {
                resolve(thing);
            }
        }, 1000);
    });
}
```

### Javascript run loop

[You Don't Know JS: Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance)