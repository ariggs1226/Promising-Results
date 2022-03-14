// // console.log("whats up") {Test console log}
// //Promise .then() chaining

// slowMath
//     .add(6, 2)
//     .then((res) => {
//         console.log(res);
//         return slowMath.multiply(res, 2)
//     })

//     .then((res) => {
//         console.log(res);
//         return slowMath.divide(res, 4)
//     })

//     .then((res) => {
//         console.log(res);
//         return slowMath.subtract(res, 3)
//     })

//     .then((res) => {
//         console.log(res);
//         return slowMath.add(res, 98)
//     })
//     .then((res) => {
//         console.log(res);
//         return slowMath.remainder(res, 2)
//     })
//     .then((res) => {
//         console.log(res);
//         return slowMath.multiply(res, 50)
//     })
//     .then((res) => {
//         console.log(res);
//         return slowMath.remainder(res, 40)
//     })
//     .then((res) => {
//         console.log(res);
//         return slowMath.add(res, 32)
//     })
//     .then((res) => {
//         console.log(`The final resulet is ${res}`)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// happy pi day!!

//Async / Await

let doMath = async () => {
    try {
        let result;

        result = await slowMath.add(6, 2);
        console.log(result);
        result = await slowMath.multiply(result, 2);
        console.log(result);
        result = await slowMath.divide(result, 4);
        console.log(result);
        result = await slowMath.subtract(result, 3);
        console.log(result);
        result = await slowMath.add(result, 98);
        console.log(result);
        result = await slowMath.remainder(result, 2);
        console.log(result);
        result = await slowMath.multiply(result, 50);
        console.log(result);
        result = await slowMath.remainder(result, 40);
        console.log(result);
        result = await slowMath.add(result, 32);
        console.log(result);
        console.log(`The final result is ${result}!`);
    } catch (err) {
        console.log(err)
    } finally {
        console.clear();
    }
};

 doMath();