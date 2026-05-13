class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack=[];
        const match={
            ')':'(',
            '}':'{',
            ']':'[',
        }

        for (let c of s){
            if(match[c]){
                if(stack.length>0&&stack[stack.length -1]=== match[c]){
                    stack.pop();
                }
                else{
                    return false;
                }
            }
            else{
                stack.push(c);
            }
        }

        if(stack.length !== 0){
            return false
        }
        else{
            return true
        }

    }
}
