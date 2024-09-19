"use strict";

// Sample data for books array
const books = [
    { keywords: ['computer science', 'programming'] },
    { keywords: ['algorithms', 'data structures'] },
    { keywords: ['web development', 'javascript'] }
];

//12.1
const allKeywords = [];
for (const book of books) {
    allKeywords.push(...book.keywords);
}
console.log("All Keywords:", allKeywords);

//12.2
const uniqueKeywords = new Set(allKeywords);
console.log("Unique Keywords (Set):", uniqueKeywords);

//12.3
uniqueKeywords.add("coding");
uniqueKeywords.add("science");
console.log("Unique Keywords after adding 'coding' and 'science':", uniqueKeywords);

//12.4
uniqueKeywords.delete("business");
console.log("Unique Keywords after deleting 'business':", uniqueKeywords);

//12.5
const uniqueKeywordsArr = [...uniqueKeywords];
console.log("Unique Keywords Array:", uniqueKeywordsArr);

//12.6
uniqueKeywords.clear();
console.log("Unique Keywords after clearing:", uniqueKeywords);