class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    
    hasDuplicate(nums) {
        let set = new Set();
        let length=nums.length
        for(let i=0;i<length;i++){
            if(set.has(nums[i]))
                return true;
            else
                set.add(nums[i]);
        }
        return false;

    }
}
