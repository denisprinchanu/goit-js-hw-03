// function getProductPrice(productName) {
//      const products = [
//        { name: "Radar", price: 1300, quantity: 4 },
//        { name: "Scanner", price: 2700, quantity: 3 },
//        { name: "Droid", price: 400, quantity: 7 },
//        { name: "Grip", price: 1200, quantity: 9 },
//      ];
//    }
   
   
//    for (const product of products) {
//         if(product.name === productName) {
//              return price;
//         }  return null;
       
//    } 





// function foo(user) {


// user.mood ="happy";
// user.name="Den";

// const keys = Object.keys(user);

// for(const key of keys) {
//      console.log(`${key} : ${user[key]}`);  

// }


// }

// foo(user)


// console.log(user);



// const user = {
//     name: "Alice",
//     age: 20,
//     hobby: "html",
//     premium: true,
// };


// function foo(user) {
//     user.mood = "happy";
//     user.hobby = "skydiving";
//     user.premium = false;
    
//     const keys = Object.keys(user);
    
//     for(const key of keys) { 
//         console.log(`${key}: ${user[key]}`);
//     }
// }


// foo(user);


// console.log(user);





// function add(...args) {

//      let sum = 0;
       
//       for (let arg of args) {
//       sum += arg;
       
//      }
//        return sum;
//      }
     


// function addOverNum(value,...args) {



//      let sum = 0;
     
     
//      for (let arg of args) {
//        if (arg > value) {
//          sum += arg;
//        }  sum = 0;
     
       
//      }
//        return sum;
//      }
     
     
     
     


// function getExtremeScores(...scores) {

//      return Math.max(`{$best}`), Math.min(`{$worst}`);
       
//      }
     

//      getExtremeScores([89, 64, 42, 17, 93, 51, 26]);
//      getExtremeScores([19, 7, 4, 17, 81, 24])





// const first = { propA: 5, propB: 8, propC: 50 };
// const second = { propC: 15 };

// const third = {  ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }


const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };


const fifth = { ...second, propB: 20, ...first };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// квадратні душки це велью (значення)  []



// // для перевірки кожного елемента 




// function filterArray(numbers, value) {
//    let arr = [];

// for (const number of numbers) {



//      if (  number > value ) {

//         arr.push(number);
         

//      }
// }
//             return arr;     
// }







// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]