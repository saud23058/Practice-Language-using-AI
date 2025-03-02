'use client'
import { usePromptMutation } from '@/lib/redux_toolkit/features/chatApiSlice'
import React, { useState } from 'react'

const AskAI = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  

 


  
  const [chatApiSlice, { data, isLoading, isError }] = usePromptMutation();

  
  
  console.log(data);
  

  const handler = async() => {
    await chatApiSlice(prompt)
    // if (response?.length < 20) {
    //   setResponse((pre)=>[...pre,data])
    // }else{
    //  setMessage("Please click the Clear button for better performance because reached the limit")
    // }
   
    
  }

  const clear = () => {
    setResponse([])
  }




  return (
    <div className='w-full h-max bg-green-400'>
      <div className='flex flex-col'>
        <p>{data?.model }</p>
      <input type="text" placeholder='Type your message' onChange={(e) => setPrompt(e.target.value)} />
        <button onClick={handler} >Send</button>
        {
          message && <div>{message } <button>Clear</button></div>
        }
      </div>
      </div>
  )
}

export default AskAI
