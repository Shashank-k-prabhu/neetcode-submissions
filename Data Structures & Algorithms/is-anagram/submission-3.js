class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
   isAnagram(s, t) {
    if(s.length !== t.length) return false; // Early exit!
    
    const freq = new Map();
    
    // Increment for s, decrement for t
    for(let i = 0; i < s.length; i++) {
        freq.set(s[i], (freq.get(s[i]) || 0) + 1);
        freq.set(t[i], (freq.get(t[i]) || 0) - 1);
    }
    
    // Check if all frequencies are 0
    for(let count of freq.values()) {
        if(count !== 0) return false;
    }
    return true;
}
}
