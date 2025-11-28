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

      </div>
  
      <ProblemCard
      title="Problem of the Day: Count Distinct Pairs With Given Sum"
description="Given an array of integers and an integer K, find how many distinct pairs (a, b) exist such that a + b = K."
input="The first line contains an integer N. The second line contains N integers. The third line contains an integer K."
output="Print the number of distinct pairs with sum equal to K."
example={`Input:
6
1 5 7 -1 5 3
6

Output:
2`}


    />
      </div>
    </>
  )
}

export default Discussion