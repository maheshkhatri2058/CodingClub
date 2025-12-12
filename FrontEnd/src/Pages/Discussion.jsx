import React from 'react'
import Navbar from '../Components/Navbar'
import ProblemCard from '../Components/ProblemCard'

const Discussion = () => {
  return (
    <> 
      <div className='py-20'>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto my-8 ">
          <h1 className='text-center text-2xl font-bold'>Solved Problems:</h1>
      <p className='px-10'>1. Given an integer array, shift all zero elements to the end while maintaining the relative order of non-zero elements<br></br></p>
      <p className='px-10'>2. Given integer array , Find the second largest element , return -1 if not found</p>
      <p className='px-10'>3. Given an array of integers and an integer K, find how many distinct pairs (a, b) exist such that a + b = K.</p>
      <p className='px-10'>4. Given an array of integers and an integer K, find the length of the longest subarray whose sum is divisible by K.</p>
      <p className='px-10'>5. Given an array of distinct integers, determine the minimum number of swaps required to sort the array in ascending order.</p>
      <p className='px-10'>6. For each element in the circular array, find the next greater element. If none exists, print -1. .</p>
    </div>
    <ProblemCard
    title="Problem of the Day: Sliding Window Maximum"
description="Given an array and an integer K, return the maximum value in every sliding window of size K."
input="
The first line contains N.
The second line contains N integers.
The third line contains K."
output="
Print the maximum of each window."
example={`
Input:
8
1 3 -1 -3 5 3 6 7
3`}
    />
      </div>
    </> 
  )
}

export default Discussion