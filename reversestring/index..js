function reverse(str) {
   debugger; 
  return  str.split('').reduce((reversed, character) => {
     return character + reversed;
   },''); 
}

reverse('asdf');

module.exports = reverse;

//function reverse(str) {
//  return str.split('').reverse().join('');
//}

/*
function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}
*/