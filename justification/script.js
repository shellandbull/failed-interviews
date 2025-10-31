/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//   "This    is    an",
//   "example  of text",
//   "justification.  "
// ]
// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
//   Note that the second line is also left-justified because it contains only one word.
//   Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]

// take as many siblings as possible by joining them with an empty space
// up until its below threshold
// and then fill out with even spaces(left to right) so it meets the maxWdith

var fullJustify = function(words, maxWidth) {
};
