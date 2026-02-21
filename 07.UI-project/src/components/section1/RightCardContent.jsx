import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="absolute p-8 top-0 left-0 h-full w-full flex flex-col justify-between ">
        <h2 className="bg-white mb-30 rounded-full text-xl font-semibold h-8 w-8 flex justify-center items-center">
          {props.id+1}
        </h2>
        <div>
          <p className=" text-shadow-2xs leading-normal text-white mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, nisi! Ducimus, veritatis officiis? Dolorem, ipsum!
          </p>
          <div >
            <button style={{backgroundColor:props.color}} className=" text-white font-medium px-6 py-2  rounded-full">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white font-medium px-4 py-2  rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
