//! 12. longest-substring without repeating characters
//? Longest Substring Without Repeating Characters (JS)

//? Prompt:
//? Given a string, return the length of the longest substring that contains no repeating characters.
//? Input
//?"abcabcbb"
//? Expected output
//? 3 // ("abc")

const lengthOfLongestSubstring = (s) => {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

// Ejemplo de uso
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
