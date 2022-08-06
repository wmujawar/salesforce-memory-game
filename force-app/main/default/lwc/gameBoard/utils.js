/**
 * Shuffle the given array
 * 
 * @param {Array} unshuffeledArray 
 * @returns 
 */
export function shuffleArray(unshuffeledArray) {
    let shuffeledArray = [];

    let length = unshuffeledArray.length;

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * length - i);
        shuffeledArray.push(unshuffeledArray.splice(random, 1)[0]);
    }


    return shuffeledArray;
}
