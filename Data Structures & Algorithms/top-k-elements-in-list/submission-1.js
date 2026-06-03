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

        let sortedMap = 
            [...map.entries()].sort((a,b)=>b[1]-a[1])

        console.log(sortedMap);
        // console.log(map);
        let output=[];
        for(let i=0;i<k;i++){
            output.push(sortedMap[i][0])
        }
       
     return output

    }
}
