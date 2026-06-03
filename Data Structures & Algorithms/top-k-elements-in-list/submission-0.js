class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
                map.set(nums[i],map.get(nums[i])+1);
            }
            else{
                map.set(nums[i],1);
            }
        }
        // console.log(map);
        let output=[];
        for(let [key,value] of map){
            // console.log(key,value);
            if(value>=k){
                // console.log(key);
                output.push(key);
                
            }
        }
     return output

    }
}
