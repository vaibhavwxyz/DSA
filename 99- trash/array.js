// Sample array for practice
let nums = [10, 20, 30, 40];

// ============================================
//! 1. CREATE OPERATIONS
// ============================================

// -------- 1.1 Add element at the end --------

// WITH built-in method (push)
// nums.push(42);

// WITHOUT built-in method
// let length = 0;
// for (let i = 0; nums[i] != undefined; i++) {
//   length++;
// }
function getLength(arr) {
  let length = 0;
  for (i in arr) {
    length++;
  }
  return length;
}
// nums[nums.length] = 42;
let result = getLength(nums);
console.log(result);

// -------- 1.2 Add element at the beginning --------

// WITH built-in method (unshift)

// WITHOUT built-in method

// -------- 1.3 Add element at specific position --------

// WITH built-in method (splice)

// WITHOUT built-in method

// -------- 1.4 Add multiple elements --------

// WITH built-in method (push with spread or concat)

// WITHOUT built-in method

// -------- 1.5 Create array from another array --------

// WITH built-in method (slice, spread, Array.from)

// WITHOUT built-in method

// ============================================
// 2. READ OPERATIONS
// ============================================

// -------- 2.1 Access element by index --------

// WITH built-in method

// WITHOUT built-in method

// -------- 2.2 Find element by value --------

// WITH built-in method (indexOf, find)

// WITHOUT built-in method

// -------- 2.3 Find all elements by condition --------

// WITH built-in method (filter)

// WITHOUT built-in method

// -------- 2.4 Check if element exists --------

// WITH built-in method (includes, some)

// WITHOUT built-in method

// -------- 2.5 Get array length --------

// WITH built-in property

// WITHOUT built-in property

// -------- 2.6 Iterate through array --------

// WITH built-in method (forEach, for...of, map)

// WITHOUT built-in method (traditional for loop)

// -------- 2.7 Get first element --------

// WITH built-in method

// WITHOUT built-in method

// -------- 2.8 Get last element --------

// WITH built-in method

// WITHOUT built-in method

// ============================================
// 3. UPDATE OPERATIONS
// ============================================

// -------- 3.1 Update element at specific index --------

// WITH built-in method

// WITHOUT built-in method

// -------- 3.2 Update multiple elements --------

// WITH built-in method (map, forEach)

// WITHOUT built-in method

// -------- 3.3 Update element by value --------

// WITH built-in method (findIndex + update)

// WITHOUT built-in method

// -------- 3.4 Replace element at position --------

// WITH built-in method (splice)

// WITHOUT built-in method

// -------- 3.5 Transform all elements --------

// WITH built-in method (map)

// WITHOUT built-in method

// ============================================
// 4. DELETE OPERATIONS
// ============================================

// -------- 4.1 Remove last element --------

// WITH built-in method (pop)

// WITHOUT built-in method

// -------- 4.2 Remove first element --------

// WITH built-in method (shift)

// WITHOUT built-in method

// -------- 4.3 Remove element at specific position --------

// WITH built-in method (splice)

// WITHOUT built-in method

// -------- 4.4 Remove element by value --------

// WITH built-in method (splice with indexOf)

// WITHOUT built-in method

// -------- 4.5 Remove multiple elements --------

// WITH built-in method (splice, filter)

// WITHOUT built-in method

// -------- 4.6 Remove all elements (clear array) --------

// WITH built-in method

// WITHOUT built-in method

// -------- 4.7 Remove elements by condition --------

// WITH built-in method (filter)

// WITHOUT built-in method

// ============================================
// 5. ADVANCED OPERATIONS (BONUS)
// ============================================

// -------- 5.1 Reverse array --------

// WITH built-in method (reverse)

// WITHOUT built-in method

// -------- 5.2 Sort array --------

// WITH built-in method (sort)

// WITHOUT built-in method

// -------- 5.3 Merge two arrays --------

// WITH built-in method (concat, spread)

// WITHOUT built-in method

// -------- 5.4 Get subarray (slice) --------

// WITH built-in method (slice)

// WITHOUT built-in method

// -------- 5.5 Flatten nested array --------

// WITH built-in method (flat)

// WITHOUT built-in method

// -------- 5.6 Remove duplicates --------

// WITH built-in method (Set, filter)

// WITHOUT built-in method

// ============================================
// NOTES & TIPS
// ============================================
/*
 * 1. Always test your code with console.log()
 * 2. Remember: some methods mutate the original array, others don't
 * 3. Practice both approaches to understand what's happening under the hood
 * 4. Try to write your own implementations before looking at solutions
 * 5. Consider edge cases: empty arrays, single element, etc.
 */
