import Image from 'next/image'
import React from 'react'
import chatImage from "../public/chat.png"
import conversationImage from "../public/conversation.png"
import dashboardImage from "../public/dashboard.png"
import realObjectsImage from "../public/realObjects.png"
import grammar from "../public/grammar.png"
import selectImage from "../public/selectLang.png"

const Preview = () => {
  return (
    <div className="my-4 flex gap-4 justify-center items-center p-6 w-[1050px] h-[550px] 
      bg-white/40 backdrop-blur-lg shadow-lg rounded-xl border border-white/30">
      <div className="flex gap-2 flex-col">
        <Image src={chatImage} alt="chat-ai" width={460} height={260} 
          className="w-[460px] h-[260px] rounded-lg object-cover shadow-md" />
        <Image src={dashboardImage} alt="dashboard" width={460} height={260} 
          className="w-[460px] h-[260px] rounded-lg object-cover shadow-md" />
      </div>
      <div className="flex gap-2 flex-col">
        <Image src={conversationImage} alt="conversation" width={460} height={260} 
          className="w-[460px] h-[260px] rounded-lg object-cover shadow-md" />
        <Image src={realObjectsImage} alt="quiz" width={460} height={260} 
          className="w-[460px] h-[260px] rounded-lg object-cover shadow-md" />
      </div>
      <div className="flex gap-2 flex-col">
        <Image src={selectImage} alt="select language" width={460} height={260} 
          className="w-[460px] h-[260px] rounded-lg object-cover shadow-md" />
        <Image src={grammar} alt="grammar" width={460} height={260} 
          className="w-[460px] h-[260px] rounded-lg object-cover shadow-md" />
      </div>
    </div>
  )
}

export default Preview
