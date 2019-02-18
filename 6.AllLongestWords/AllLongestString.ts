function AllLongestStrings(inputArray: string[]) : string[] {
    let longestLength = 0;
    const longestWords = [];
    inputArray.forEach((word: string)=>{
        if (word.length>longestLength){
            longestLength = word.length;
        }
    })

    inputArray.forEach((word:string)=>{
        if (word.length === longestLength){
            longestWords.push(word);
        }
    })

    return longestWords;
}

console.log(AllLongestStrings(["asdfa","sdfas"]));

