class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let map = new Map();
        for(let i=0;i<strs.length;i++){
            let secondMap= new Map();
            for (let i = 0; i < 26; i++) {
                 secondMap.set(String.fromCharCode(97 + i), 0);
                }
            let str=strs[i];
            for(let j=0;j<str.length;j++){
                let ch= str.charAt(j)
              secondMap.set(ch,secondMap.get(ch)+1);
            }
            let key = [...secondMap.values()].join('#')

            map.set(key,[...(map.get(key) || []),str]);

        }
        return [...map.values()];
    }
}
