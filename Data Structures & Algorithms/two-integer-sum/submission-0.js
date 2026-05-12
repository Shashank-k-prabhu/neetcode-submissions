class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
 
        let left=0,right=nums.length -1;
        while(left<right){
            let sum=nums[left]+nums[right];
            if(sum===target)
            return [left,right]
            else if(sum<target)
            left++;
            else
            right --;
        }
        return [0,0]
    }
}
