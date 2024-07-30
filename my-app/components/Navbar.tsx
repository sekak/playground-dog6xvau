import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {NAV_LINKS} from '../constants';
import Button from './Button';

const Navbar = () => {
    return (
        <nav className="max-w-[1400px] flexCenterBetween mx-auto py-5 padding-container transition-all z-30 "> 
            <Image src="/hilink-logo.svg" alt="logo" width={80} height={80} />
            <div className="hidden lg:flex gap-8">
                {NAV_LINKS.map((item:[]|any) => (
                    <div className="text-gray" key={item.key}>
                        <Link href={item.href} key={item.key}>
                            {item.label}
                        </Link>
                    </div>
                ))}
            </div>
            <div className=''>
                <Button   type="button" variant="btn-gray-white regular-18 rounded-[25px] gap-2 text-gray-50 sm:flex hidden" icon="/user.svg"  content="Login"/>
                <Image src="/menu.svg" alt="cart" width={30} height={30} className='sm:hidden flex'/>
            </div>
        </nav>
    );
};

export default Navbar;