class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        let l=0;
 
        let map = new Map();
        let j = s1.length;

        for(let k=0;k<s1.length;k++){
            let ch= s1.charAt(k)
            map.set(ch,(map.get(ch) || 0)+1);
        }
        let winMap = new Map();

        for(let r=0;r<s2.length;r++){
            let ch= s2.charAt(r);
            winMap.set(ch,(winMap.get(ch) || 0)+1);

            while((r-l+1)>j){
                 let ch= s2.charAt(l);
               if(winMap.get(ch)>1){
                winMap.set(ch,(winMap.get(ch) -1));
               }
               else{
                winMap.delete(ch)
               }
               l++;
            }

            if((r-l+1)==j){
            let same = true;
            
             for (let [che,freq] of map) {
                if(winMap.get(che)!== freq){
                same= false;
                break;
                }
              }
              if(same)
                return true
            }

        }
        return false
    }
}
