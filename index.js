// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
  //  console.log(`I'm ${age} years old. Happy birthday to me!`);
//}

// const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
 //   for (let i = 0; i < gifts.length; i++){
 //       console.log(`Wrapped ${gifts[i]} and added a bow!`);
        

 //   }
 //   return gifts;
// }

// wrapGifts(gifts);

function writeCards (nameArray, eventName){
    let cardArray = [];
    for (let i = 0; i < nameArray.length; i++){
        cardArray.push (`Thank you, ${nameArray[i]}, for the wonderful surprise gift!`)
    }
    return cardArray;

}
function countDown (anyNumber){
  let i = anyNumber
  while ( i >= 0){
console.log(i);
i--;
  }


}