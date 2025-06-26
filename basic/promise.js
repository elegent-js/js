'use strict';

let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("done");
    }, 1000);
});

promise.then((value) => {
    console.log(value); // "done"
}).catch((error) => {
    console.error("Error:", error);
}).finally(() => {
    console.log("Promise settled");
});



