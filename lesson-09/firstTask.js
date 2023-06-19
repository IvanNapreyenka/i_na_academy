// Первый вариант с ипользованием только promise
function RandomTime(maxTime, minTime) {
    let time = Math.floor((Math.random() * (minTime - maxTime + 1)) + maxTime) * 1000;
    return time;
}

let firstPromise = new Promise((res) => {
    setTimeout(res, RandomTime(1, 5), 1);
});

let secondPromise = new Promise((res) => {
    setTimeout(res, RandomTime(1, 5), 2);
});

let thirdPromise = new Promise((res) => {
setTimeout(res, RandomTime(1, 5), 3);
});

 Promise.race([firstPromise, secondPromise, thirdPromise])
     .then((result) => {
         console.log(result)
     })
     .catch (err => {
     console.log(err)
 })


// Второй вариант с ипользованием и promise, и async/await
function RandomTime(maxTime, minTime) {
    let time = Math.floor((Math.random() * (minTime - maxTime + 1)) + maxTime) * 1000;
    return time
}

async function f() {
    function getFirstPromise() {
        return new Promise((res) => {
            setTimeout(res, RandomTime(1, 5), 1);
        })
    
    }   

let firstPromise = await getFirstPromise()

let secondPromise = (await getFirstPromise()) + 1

let thirdPromise = (await getFirstPromise()) + 2

Promise.race([firstPromise, secondPromise, thirdPromise])
     .then((result) => {
         console.log(result)
     })
     .catch (err => {
     console.log(err)
 })
}

f()