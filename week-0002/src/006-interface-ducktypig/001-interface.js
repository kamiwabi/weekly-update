// taken from https://medium.com/@ajay.bhosale/typescript-and-duck-typing-7b3d7bb6f03c
;
function printItem(item) {
    console.log(item.id + " > " + item.title);
}
var i = {
    id: 10,
    title: "ABC"
};
//Ok - As it implements IItem
printItem(i);
//Ok - As it implicitly implements IItem
printItem({ id: 11, title: "XYZ" });
;
var book = {
    id: 1,
    title: "C# in Depth",
    author: "Jon Skeet"
};
//Ok - Even though book implements IProduct and not the IItem
//It has two properties "id" and "title" 
//which is actually the print function is interested in
printItem(book);
