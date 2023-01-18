// function findCommon(arr) {
//     let counts = {};
//     let common;
//     let minCount = -1;
//     for (let i = 0; i < arr.length; i++) {
//       if (counts[arr[i]] === undefined) {
//         counts[arr[i]] = 1;
//       } else {
//         counts[arr[i]]++;
//       }
//       if (minCount === -1 || counts[arr[i]] >= minCount) {
//           minCount = counts[arr[i]];
//           common = arr[i];
//           console.log('val:', arr[i], counts[arr[i]], minCount, 'common:', common);
//       }
//     }
//     console.log(counts);
//     return common;
//   }
//   console.log(findCommon(["Duck", "Duck", "Goose", "Duck", "Duck", "Penguin", "Duck", "Penguin", "Goose"]));


// function sortAscending(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//           let temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//         }
//       }
//     }
//     return arr;
//   }
//   console.log(sortAscending([5, 3, 8, 1]));

// function isPalindrome(str) {
//     for (let i = 0; i < str.length / 2; i++) {
//       if (str[i] !== str[str.length - i - 1]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(isPalindrome("racecar"));

// function findLongestWord(str) {
//     let words = str.split(" ");
//     let longest = words[0];
//     for (let i = 1; i < words.length; i++) {
//       if (words[i].length > longest.length) {
//         longest = words[i];
//       }
//     }
//     return longest;
//   }
//   console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
