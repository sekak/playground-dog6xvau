import React from 'react'
import Image from 'next/image'

const Guide = () => {
  return (
    <div className='padding-container max-w-[1400px] mx-auto'>
        <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col relative'>
                <Image src='/camp.svg' width={50} height={50} alt='hero' className='absolute -top-[50px]'/>
                <span className='text-[24px] text-green-50'>WE ARE HERE FOR YOU</span>
                <span className='text-[64px] font-bold mt-[20px] w-[390px] leading-[80px]'>Guide You to Easy Path</span>
            </div>
            <div className='text-gray-50 w-[520px]'>
                <p>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
            </div>
        </div>
        <div className='w-[1400] h-[500px] relative mt-20'>
            <Image src='/boat.png' fill={true} alt='camping' className='lg:rounded-[30px]' />
            <div className='absolute bg-white rounded-[30px] z-10 w-[270px] h-[233px] p-6 top-[60px] left-[60px]'>
                <div className=''>

                </div>
                <div className=''>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Guide