import React from 'react'
import JS from '../assets/js.png'
import HTML from '../assets/html.png'
import CSS from '../assets/CSS.png'
import PY from '../assets/python.png'
import NODE from '../assets/node.png'
import JAVA from '../assets/java.png'
import REACT from '../assets/react.png'
import DJANGO from '../assets/django.png'

const Skills = () => {
  return (
    <div name='skills' className='width-full h-screen bg-[#3B4A60] text-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-white'> Skills </p>
                <p className='py-4'> // My most confident technologies I have worked with </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt='js icon'/>
                    <p className='my-4'> JAVASCRIPT </p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='html icon'/>
                    <p className='my-4'> HTML </p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='css icon'/>
                    <p className='my-4'> CSS </p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={DJANGO} alt='django icon'/>
                    <p className='my-4'> DJANGO </p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PY} alt='python icon'/>
                    <p className='my-4'> PYTHON </p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REACT} alt='react icon'/>
                    <p className='my-4'> REACTJS </p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JAVA} alt='java icon'/>
                    <p className='my-4'> JAVA </p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={NODE} alt='node icon'/>
                    <p className='my-4'> NODEJS </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills