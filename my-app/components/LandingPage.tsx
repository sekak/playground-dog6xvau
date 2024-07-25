import React from 'react';
import Image from 'next/image';
import Button from './Button';

const LandingPage = () => {
    return (
        <div className="w-full relative min-h-screen">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 top-[-600px] w-full bg-img-0 bg-[url('/pattern-bg.png')] " />
            </div>
            <div className='w-full max-w-[1400px] mx-auto mt-[60px] flex xl:flex-row flex-col gap-10'>
                <div className='flex flex-col gap-10 flex-1 z-20 '>
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
                <div className="flex flex-1">text2</div>
            </div>
        </div>
        // <div className='max-w-[1400px] padding-container mx-auto flex xl:flex-row flex-col gap-10 mt-[60px]'>
        //     <div className="bg-img-0 bg-[url('/pattern-bg.png')]  top-0 -z-10"/>
        //     <div className='relative flex flex-col gap-10 flex-1 z-20'>
        //         <Image src='/camp.svg' width={50} height={50} alt='hero' className='absolute top-1 lg:top-5'/>
        //         <h1 className="text-[50px] font-bold lg:text-[90px] mt-10">
        //             Putuk Truno Camp Area
        //         </h1>
        //         <p className='text-gray-50 xl:max-w-[520px]'>
        //             We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        //         </p>
        //         <div className='flex items-center gap-1 mr-4'>
        //             {Array(5).fill(1).map((_, i) => (
        //                 <div key={i}>
        //                     <Image src='/star.svg' width={25} height={25} alt='hero' />
        //                 </div>
        //             ))}
        //             <p className='font-bold text-lg'>198k <span className='font-[400]'>Excellent Reviews</span></p>
        //         </div>
        //         <div className='flex flex-col sm:flex-row sm:gap-6 gap-2'>
        //             <Button content="Download App" variant='flex gap-2 btn-green-white' type='button' icon=""/>
        //             <Button content="How we work?" variant='flex gap-2 btn-transparent-black' type='button' icon="/play.svg"/>
        //         </div>
        //     </div>
        //     <div className="flex flex-1">text2</div>
        // </div>
    );
};

export default LandingPage;