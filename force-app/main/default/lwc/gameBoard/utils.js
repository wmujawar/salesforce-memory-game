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

/**
 * Remove class from the list of classes
 * 
 * @param {String} classList list of class as a string
 * @param {String} classToRemove class to remove from the list of classes
 * @returns {String}
 */
export function removeClass(classList, classToRemove) {
    classList = classList.replace(classToRemove, '').replace('  ', ' ').trim();
    return classList;
}

/**
 * Delay execution
 * 
 * @param {number} time 
 * @returns 
 */
export function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export function formatNumber(number, noOfDigit) {
    return number.toLocaleString('en-US', {
        minimumIntegerDigits: noOfDigit,
        useGrouping: false
      })
}
