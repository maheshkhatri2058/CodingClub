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