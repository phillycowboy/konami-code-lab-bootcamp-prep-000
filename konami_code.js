const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index=0;
const key=e.key
function init() {
  document.body.addEventListener('keydown', function(event){
  
  if(key===codes[index]){
    index++;
    if(index===codes.length){
      alert("Hurray!");
      index=0;
    }
  }else{
    index=0;
  }
  
// let index=0
// document.body.addEventListener('keydown', function(event){
//   const key=e.key
    

//   if (key === alphabet[index]) {
//     index++;

//     if (index === alphabet.length) {
//       alert("Hurray!");

//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
  
 
//   // if(e.key===codes.length){
//   //   alert("Hurray!")
    
//   // // }else{
//   // //   return e.preventDefault(alert)
//   // }
// });
  

// }
// let index = 0;

// // This is the function that would be invoked by the event listener.
// function onKeyDownHandler(e) {
//   const key = e.key;

//   if (key === alphabet[index]) {
//     index++;

//     if (index === alphabet.length) {
//       alert("Hurray!");

//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
});
  