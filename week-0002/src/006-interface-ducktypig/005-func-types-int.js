var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch("Wabi Teknologi", "abi"));
console.log(mySearch("Wabi Teknologi", "okay"));
