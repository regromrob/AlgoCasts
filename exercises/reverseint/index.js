// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //take n and treat it as string by turning it into a string to then split into array
    const reversedNum = n.toString()
    .split('')
    .reverse()
    .join('')

    return parseInt(reversedNum) * Math.sign(n)
}

module.exports = reverseInt;
