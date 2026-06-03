/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    
    let l=0;
    let maxSum = 0;
    let map = new Map();
    let sum=0;
    for(let r=0;r<nums.length;r++){

       if(map.has(nums[r])){
        map.set(nums[r],map.get(nums[r])+1)
       }
       else{
        map.set(nums[r],1)
       }
       sum = sum+ nums[r];

       while(map.get(nums[r])>1){
        sum = sum - nums[l];
        if(map.get(nums[l])>1){
            map.set(nums[l],map.get(nums[l]) - 1));
        }
        else{
            map.delete(nums[l]);
        }
        l++;
       }

       while((r-l+1)>k){
        sum = sum - nums[l];
        map.delete(nums[l]);
        l++;
       }
        if((r-l+1) == k)
            maxSum = Math.max(maxSum,sum);
    }

    return maxSum;

};
