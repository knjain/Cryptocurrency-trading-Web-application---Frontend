import React from 'react'

const Rank = () => {
  return (
    <div className='flex flex-col gap-8'>
    <div className="flex justify-between">
      <div className="text-[#A5A5A5] text-base">Rank 1</div>
      <div className="pr-12 text-[#A5A5A5] text-base">Reward:</div>
    </div>
    <div className="flex flex-col">
      <div>
      <div className="flex items-center gap-0">
        <div className="w-[40px] h-[20px] custom-box-shadow rounded-full bg-gradient-to-b from-[#D3D7FC] to-[#FF65B9]"></div>
        <div className="w-5/6 h-[8px] bg-gradient-to-b from-[#D3D7FC] to-[#FF65B9]"></div>
        <div className="w-full h-[2px] bg-[#505050]"></div>
        <div className="w-[40px] h-[20px] rounded-full bg-[#D9D9D9]"></div>
      </div>
      <div className="justify-end flex pr-12 py-2 text-[#FFFFFF] text-sm">Target:</div>
      </div>
    </div>
    </div>
  )
}

export default Rank