class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        
        // var b=[];
        // for(let a=0 ;a<2;a++){
        //     b=b.concat(nums)
           
        // }

        return [...nums,...nums]
    }
}
