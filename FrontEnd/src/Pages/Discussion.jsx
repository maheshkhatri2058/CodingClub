import React from 'react'
import Navbar from '../Components/Navbar'
import ProblemCard from '../Components/ProblemCard'

const Discussion = () => {
  return (
    <> 
      <div className='py-20'>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto my-8 ">
          <h1 className='text-center text-2xl font-bold'>Solved Problems:</h1>
      <p className='px-10'>1.Given an integer array, shift all zero elements to the end while maintaining the relative order of non-zero elements<br></br></p>
      <p className='px-10'>2. Given integer array , Find the second largest element , return -1 if not found</p>
      <p className='px-10'>3. Given an array of integers and an integer K, find how many distinct pairs (a, b) exist such that a + b = K.</p>
      

      </div>
  
      <ProblemCard
 title=" Problem of the Day: Longest Subarray With Sum Divisible by K"

description="Given an array of integers and an integer K, find the length of the longest subarray whose sum is divisible by K."

input="
The first line contains an integer N.
The second line contains N integers.
The third line contains integer K."

output="
Print the length of the longest such subarray."

example={`
Input:
7
2 7 6 1 4 5 3
3

Output:
4`
}

    />
    <ProblemCard
    title="Problem of the Day: Minimum Swaps to Sort the Array"

description="
Given an array of distinct integers, determine the minimum number of swaps required to sort the array in ascending order."

input="
The first line contains an integer N.
The second line contains N distinct integers."

output="
Print the minimum number of swaps needed."

example={`
Input:
5
4 3 1 2 5

Output:
3
`}
    />
      </div>
    </> 
  )
}

export default Discussion