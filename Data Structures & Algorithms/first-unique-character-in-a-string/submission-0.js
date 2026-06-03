class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        let map= new Map();
        
        for(let i=0;i<s.length;i++){
            let ch=s.charAt(i);
            if(map.has(ch)){
                map.set(ch,-1);
            }
            else{
                map.set(ch,i)
            }
        }
        let index= -1;
        for(let [key,values] of map){
            if(values !== -1){
                index = values;
                return index;
            }
        }
        return index;
    }
}
