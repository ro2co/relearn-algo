function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let sum = nums.length + 1;
  let res = 0;
  while (right < nums.length) {
  	sum += nums[right]
  	if (sum >= target) {
       	while (sum - nums[left] >= target) {
  				sum -= nums[left]
         	left++
       	}
				res = Math.min(res, right - left + 1)  
  	} 
    right++
  	return res
  }
};

const nums = [2, 3, 1, 2 ,4,3]
const res = minSubArrayLen(7, nums)
console.log(res)
