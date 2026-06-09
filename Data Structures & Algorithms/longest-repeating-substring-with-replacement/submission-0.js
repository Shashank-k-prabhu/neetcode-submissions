    class Solution {
        /**
         * @param {string} s
         * @param {number} k
         * @return {number}
         */
        characterReplacement(s, k) {
            let l =0;
            let map = new Map();
            let max= 0;
            for(let r=0;r<s.length;r++){
                let ch = s.charAt(r);
                map.set(ch,(map.get(ch)|| 0)+1);

                while(((r-l+1)-Math.max(...map.values())>k)){
                    map.set(s.charAt(l),map.get(s.charAt(l))-1)
                    l++;
                }

                max = Math.max((r-l+1),max);
            }
            return max
        }
    }
