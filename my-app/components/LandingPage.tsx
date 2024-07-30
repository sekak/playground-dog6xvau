import React from 'react';
import Image from 'next/image';
import Button from './Button';

const LandingPage = () => {
    return (
        <div className='w-screen overflow-hidden hide-scrollbar'>
            <div className="absolute w-screen h-screen bg-[url('/pattern-bg.png')] bg-cover bg-center -top-40  right-0" />
            <div className='max-w-[1400px] mx-auto padding-container flex lg:flex-row flex-col'>
                <div className='relative flex flex-col gap-10 flex-1 z-20 md:w-[50%]'>
                    <Image src='/camp.svg' width={50} height={50} alt='hero' className='absolute top-1 lg:top-5' />
                    <h1 className="text-[50px] font-bold lg:text-[90px] mt-10">
                        Putuk Truno Camp Area
                    </h1>
                    <p className='text-gray-50 xl:max-w-[520px]'>
                        We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
                    </p>
                    <div className='flex items-center gap-1 mr-4'>
                        {Array(5).fill(1).map((_, i) => (
                            <div key={i}>
                                <Image src='/star.svg' width={25} height={25} alt='hero' />
                            </div>
                        ))}
                        <p className='font-bold text-lg'>198k <span className='font-[400]'>Excellent Reviews</span></p>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:gap-6 gap-2'>
                        <Button content="Download App" variant='flex gap-2 btn-green-white' type='button' icon="" />
                        <Button content="How we work?" variant='flex gap-2 btn-transparent-black' type='button' icon="/play.svg" />
                    </div>
                </div>
                <div className="relative flex flex-1 w-full h-full mt-40 z-30">
                    <div className=' flex flex-col bg-gray-900 w-[260px] px-6 py-8 rounded-3xl gap-8'>
                        <div className='flex flex-col'>
                            <div className='flex justify-between items-center'>
                                <span className='text-gray-20 text-md'>Location</span>
                                <Image src='/close.svg' width={25} height={25} alt='hero' />
                            </div>
                            <span className='font-bold text-white text-xl'>Aguas Calientes</span>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <span className='text-gray-20 text-md'>Distance</span>
                                <span className='text-white font-bold text-xl'>173.28 mi</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-gray-20 text-md'>Elevation</span>
                                <span className='text-white font-bold text-xl'>2.040 km</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LandingPage;