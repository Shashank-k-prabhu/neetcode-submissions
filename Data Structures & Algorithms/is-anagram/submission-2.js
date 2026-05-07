class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const a = new Map()
        const b= new Map()
        for(let i=0;i<s.length;i++){
           a.set(s[i],(a.get(s[i])||0) +1)
        }
        for(let j=0;j<t.length;j++){
            b.set(t[j],(b.get(t[j]) || 0)+1)
        }
        console.log(a)
        console.log(b)
        if(s.length>t.length)
        for(let[num,count] of a){
            
            if(count !== (b.get(num) || 0)){
                return false
            }
        }
        else
        for(let[num,count] of b){
            if(count !== a.get(num) ){
                return false
            }
        }
        return true

    }
}
