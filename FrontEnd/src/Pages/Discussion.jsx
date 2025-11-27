import React from 'react'
import Navbar from '../Components/Navbar'
import ProblemCard from '../Components/ProblemCard'

const Discussion = () => {
  return (
    <> 
      <div className='py-20'>
      <h1 className='text-center text-2xl font-bold'>Solved Problems:</h1>
      <p className='  text-center px-10'>1.Given an integer array, shift all zero elements to the end while maintaining the relative order of non-zero elements</p>
      <ProblemCard
      title="Problem of the day:Find the Second Largest Element"
description="Given an array of integers, your task is to find the second largest element in the array."
input="The first line contains an integer N (size of the array). The second line contains N integers."
output="Print the second largest element of the array. If it does not exist (e.g., all elements are equal or N < 2), print -1."
example={`Input:
6
10 5 20 8 20 3

Output:
10`}

    />
      </div>
    </>
  )
}

export default Discussion