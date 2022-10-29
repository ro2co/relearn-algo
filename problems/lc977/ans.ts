function sortedSquares(nums: number[]): number[] {
  const result: number[] = []
  let i:number = 0;
  let j:number = nums.length -1;
  
  while (i<=j) {
    if (nums[i]*nums[i] > nums[j]*nums[j]) {
      result.unshift(nums[i]*nums[i])
      i++
    } else {
      result.unshift(nums[j]*nums[j])
      j--
    }
  }
  return result
};

const arr = [-4, -1, 0, 3, 10]
console.log(sortedSquares(arr))

export {};
