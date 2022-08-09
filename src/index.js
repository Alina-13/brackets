module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.join('').replace(/,/g, '');
       let store = [];
   for (let bracket of str) {
           let bracketsIndex = brackets.indexOf(bracket)

           if (bracketsIndex % 2 === 0) {
               
               if (bracket === brackets[bracketsIndex + 1] && store[store.length - 1] === bracketsIndex){
                  store.pop();
               } else if (bracket === brackets[bracketsIndex + 1] && store[store.length - 1] !== bracketsIndex) {
                   store.push(bracketsIndex)
               }
               else{
                 store.push(bracketsIndex)
               }
           } 
           else {
               if (store.pop() !== bracketsIndex-1){
                   return false;
               }
           }
           
       }
       return store.length === 0;
}
