// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//EXAMPLE 1
// function reverse(str) {
//    return str
// .split('')
// .reverse()
// .join('')
// }

//EXAMPLE 2 NO USING REVERSE FUNCTION
// function reverse(str) {
//     //create an empty string called 'reversed'
//     let reversed = ''
//     //for each char in string - take char and add it to the start of 'reversed'
//     for(let char of str){
//         reversed = char + reversed
//     }
//     //return the variable 'reversed'
//     return reversed
//  }

//EXAMPLE 3
function reverse(str){
    //transform string to array using split
    return str.split('')
    //use reduce helper function to condense to one value..our str reversed
    .reduce((reversed, char)=>char + reversed, '')
}

module.exports = reverse;
