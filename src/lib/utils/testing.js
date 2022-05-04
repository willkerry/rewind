export function makeNonsenseQuestion() {
    let result = [];
    const words = ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'];
    // Make a random sentence length, n
    const n = Math.floor(Math.random() * 50) + 1;
    // Make a random array of n words
    for (let i = 0; i < n; i++) {
        result.push(words[Math.floor(Math.random() * words.length)]);
    }
    // Capitalise the first letter
    result[0] = result[0].charAt(0).toUpperCase() + result[0].slice(1);
    // Join to a string and append a question mark
    return result.join(' ').concat('?');
}