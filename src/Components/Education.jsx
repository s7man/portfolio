import React from 'react'

const Education = () => {
  return (
    <div name="Education" className="max-w-screen-2xl max-h-screen container mx-auto md:px-20 my-20 md:my-32 border-2 border-blue-500 rounded-lg shadow-lg p-4 bg-white">
      <h2 className='text-2xl md:text-3xl font-bold'>EDUCATION</h2>
      <div className='flex flex-col md:justify-evenly md:flex-row gap-5 mt-4'>
        <div className='border-l-4 border-blue-500 rounded-lg shadow-lg p-5 md:p-8 md:w-1/3'>
        I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE) at <span className='font-semibold'>Sister Nivedita University</span>.
        <p>CGPA: 8.27</p>
        </div>
        <div className='border-l-4 border-blue-500 rounded-lg shadow-lg p-5 md:p-8 md:w-1/3'>
        I completed my Higher Secondary from K. M. High School, Bankura. I scored 82% in my Higher Secondary examination and my stream being Pure Science.
        </div>
        <div className='border-l-4 border-blue-500 rounded-lg shadow-lg p-5 md:p-8 md:w-1/3'>
        I completed my Matriculation from Jujur High School, Bankura. I scored 79% in my class 10th examination. 
        </div>
      </div>
    </div>
  )
}

export default Education
