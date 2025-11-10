//! 1. Create and Access Elements
//    a) Create array
const arr = [10, 20, 30];
//    b) Access element using index
console.log(arr[1]);
//    c) Get array length
console.log(arr.length);

//! 2. Insert Elements
//    a) push() → add to end
arr.push(40);
//    b) unshift() → add to start
arr.unshift(0);
console.log(arr);

//! 3. Remove Elements
//    a) pop() → remove last
arr.pop();
//    b) shift() → remove first
arr.shift();

//! 4. Insert or Remove at Specific Position
//    a) splice(start, deleteCount, ...items) → insert
console.log(arr);
const sliced = arr.splice(1, 2, 100);
//    b) splice(start, deleteCount) → remove
arr.splice(1, 2);
//    c) splice(start, 1, newItem) → replace
console.log("slice", arr);

//! 5. Find Elements
//    a) indexOf() → get index
//    b) includes() → check presence
//    c) find() → get first matching value
//    d) findIndex() → get index of matching value

//! 6. Loop through Array
//    a) for loop
//    b) for...of loop
//    c) forEach() method

//! 7. Copy and Combine Arrays
//    a) slice() → copy part of array
//    b) concat() → join arrays
//    c) spread operator (...) → combine arrays

//! 8. Transform and Filter
//    a) map() → transform elements
//    b) filter() → keep matching elements
//    c) reduce() → accumulate result

//! 9. Sort and Reverse
//    a) sort() → arrange elements
//    b) reverse() → reverse order

//! 10. Check Type
//    a) Array.isArray() → check if variable is array
