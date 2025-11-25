import React from 'react'
import Navbar from '../Components/Navbar'
import ProblemCard from '../Components/ProblemCard'

const Discussion = () => {
  return (
    <> 
      <div className='py-6'>
      <ProblemCard
      title="Shift All Zeros to the End"
      description="Given an array, your task is to shift all the zeros to the end of the array while maintaining the order of non-zero elements.Order of non zero element should be shame after shifting"
      input="The first line contains an integer N (size of the array). The second line contains N integers."
      output="Print the array after shifting all zeros to the end."
      example={`Input:
7
0 1 0 3 12 0 5

Output:
1 3 12 5 0 0 0`}
    />
      </div>
    </>
  )
}

export default Discussion