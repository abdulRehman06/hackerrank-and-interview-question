// ---------------------------callBack 
var inValue = 0;
let sun10 = () => {
    return inValue += 10;
}

let sun30 = ( inValue ,  callBack) => {
    setTimeout(() => {
        inValue += 30 
        console.log('final value 30  :' ,  inValue)
        callBack (inValue) ;
    }, 1000);
}
function clousere(callBack) {
    setTimeout(() => {
        inValue += 20
        console.log('final value 20  :' ,  inValue) 
          callBack(inValue  ,   function(invalue){ console.log('final value :' ,  invalue)})
    }, 1000);
}

function sum() {
    sun10();
    clousere(sun30);
    console.log('sum :', inValue)

}

sum()

// --------------------------------- promise 
// var inValue = 0;
// let sun10 = () => {
//     return new Promise((res, rej) => {
//         inValue += 10
//         // console.log( '10 :' , inValue )
//         res(inValue)
//     })
// }
// let sun20 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             inValue += 20;
//             // console.log( '20 :' , inValue )
//             res(inValue)
//         }, 1000);
//     })

// }
// let sun30 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             inValue += 30;
//             // console.log( '30 :' , inValue )
//             res(inValue)
//         }, 1000);
//     })

// }

// function sum() {
//     sun10().then(
//         sun20().then(
//             sun30().then( (result )  => 
//                 console.log('sum :', result)
//             )
//         )
//     )
    
   

// }

// sum()

// --------------------------------- wait 

// var inValue = 0;
// let sun10 = () => {
//     return new Promise((res, rej) => {
//         inValue += 10
//         // console.log( '10 :' , inValue )
//         res(inValue)
//     })
// }
// let sun20 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             inValue += 20;
//             // console.log( '20 :' , inValue )
//             res(inValue)
//         }, 1000);
//     })

// }
// let sun30 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             inValue += 30;
//             // console.log( '30 :' , inValue )
//             res(inValue)
//         }, 1000);
//     })

// }

// async function sum() {
//     await sun10()
//     await sun20()
//     await sun30().then(
//         (result) => console.log('sum :', result)
//     )
// }

// sum()