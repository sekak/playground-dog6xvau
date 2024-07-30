'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

type contentType = {
    title1: string,
    title2: string,
}

const Content = ({ title1, title2 }: contentType) => {
    return (
        <div className='absolute inset-0 m-[30px] p-5'>
            <div className='w-full h-full flex flex-col justify-between'>
                <div className='flex gap-5'>
                    <div className='bg-green-50 w-[60px] h-[60px] rounded-full flex items-center justify-center'>
                        <Image src="/folded-map.svg" alt='' width={40} height={40} />
                    </div>
                    <div className='flex flex-col text-white'>
                        <span className='font-bold text-[24px]'>{title1}</span>
                        <span className='text-16 font-normal'>{title2}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 text-white'>
                    <div className='flex -space-x-3'>
                        <Image src="/person-1.png" alt='' width={40} height={40} />
                        <Image src="/person-2.png" alt='' width={40} height={40} />
                        <Image src="/person-3.png" alt='' width={40} height={40} />
                        <Image src="/person-4.png" alt='' width={40} height={40} />
                    </div>
                    <span className='text-[24px] font-bold'>50+ Joined</span>
                </div>
            </div>
        </div>
    )
}

const Camp = () => {
    useEffect(() => {
        const container = document.getElementById('container')
        const cards = document.getElementById('cards')
        let isPressed = false
        let cursorX = 0

        if (container && cards) {
            container.addEventListener('mousedown', (e) => {
                console.log(cards?.getBoundingClientRect())
                isPressed = true
                cursorX = e.offsetX - cards.offsetLeft
                container.style.cursor = 'grabbing'
                console.log(e.offsetX, cards.offsetTop, cursorX, cards.offsetWidth, cards.offsetHeight)
            })

            container.addEventListener('mousemove', (e) => {
                if (!isPressed) return
                cards.style.left = `${e.offsetX - cursorX}px`
                console.log(cards.offsetLeft)
                BoundSlider()
            })

            window.addEventListener("mouseup", () => {
                isPressed = false;
            });

            container.addEventListener('mouseup', () => {
                isPressed = false
                container.style.cursor = 'grab'
            })
        }
        function BoundSlider() {
            if (cards) {
                if (cards.offsetLeft > 0) {
                    cards.style.left = '0px'
                }
                if (cards.offsetLeft < -700) {
                    cards.style.left = '-700px'
                }
            }
        }
    }, [])
    return (
        <div className='w-screen h-[80vh] mt-[100px] my-0' id='container'>
            <div className='lg:max-w-[1400px] w-full padding-container h-full flex flex-col mx-auto relative overflow-hidden'>
                <div className='cards w-full flex gap-10 absolute top-0 lg:m-0 ' id="cards">
                    <div className='lg:w-[1100px] lg:h-[640px] w-[95%] h-[400px] flex-none relative disable-select'>
                        <Image alt='' src="/img-1.png" fill={true} className='rounded-[30px]' />
                        <Content title1='Putuk Truno Camp' title2='Prigen, Pasuruan' />
                    </div>
                    <div className='lg:w-[1100px] lg:h-[640px] w-full h-[400px] flex-none relative disable-select'>
                        <Image alt='' src="/img-1.png" fill={true} className='rounded-[30px]' />
                        <Content title1='Putuk Truno Camp' title2='Prigen, Pasuruan' />
                    </div>
                </div>
                <div className='absolute lg:w-[740px] lg:h-[480px] lg:top-[350px] lg:right-[100px] top-[450px] w-[80%] m-[2%] bg-green-50  rounded-[30px] text-white flex flex-col items-center lg:p-[60px] p-6  lg:gap-10 gap-4 '>
                    <span className='lg:text-[64px] lg:leading-[80px] text-[24px]'>
                        <b>Feeling LostAnd Not Knowing The Way?</b>
                    </span>
                    <span className='lg:text-[16px] lg:leading-5 text-[12px]'>
                        Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
                    </span>
                    <Image src="/quote.svg" alt='' width={200} height={200} className='absolute lg:bottom-10 lg:right-0 ' />
                </div>
            </div>
        </div>
    )
}
export default Camp