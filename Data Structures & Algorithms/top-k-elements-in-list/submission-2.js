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
        let freq =[];
        for(let i=0;i<=nums.length;i++){
            freq.push([]);
        }
        for(let [key,values] of map){
            freq[values].push
            (key);
        }
        let output = [];
        for(let l = freq.length -1;l>0;l--){
            for(let num of freq[l]){
                output.push(num);
                if(output.length === k){
                    return output;
                }
            }
        }        
       
     return ouput;

    }
}
