import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = (props) => {
  return (
    <div className='pb-10 pt-5  flex  gap-10  items-center h-[80vh] '>
      <Leftcontent/>
      <Rightcontent users={props.users}/>
      
    </div>
  )
}

export default Page1Content
