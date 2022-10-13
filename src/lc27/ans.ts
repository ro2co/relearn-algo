function removeElement(nums: number[], val: number): number {
    //const len = nums.length
    //const arr =[]
    //for (let i =0; i<len; i++ ) {
    //    if (val !== nums[i]){
    //        arr.push(nums[i])
    //    }
    //}
    //return arr.length
    ///**
    let count = 0
    for(let i=0; i<nums.length; i++){
        if( nums[i] != val ) {
            nums[count] = nums[i]
            count++
        }
    }
    console.log(nums)
    return count
}


console.log(removeElement([3,2,2,3], 3))
