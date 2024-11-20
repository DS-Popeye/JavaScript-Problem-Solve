function reverseWords(str) {
    const words = str.split(" ");

    const reversedWords = words.reverse();

    return reversedWords.join(" ");
}

const str = "Hello World";
console.log(reverseWords(str));