import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from 'react';
import { Link } from "react-scroll";


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "poi"
        },
        {
            id: 2,
            link: "polappa paaruya"
        }
    ]


    return (
        <div className='flex justify-between items-center w-full h-20  lg:px-10 md:px-6 px-4 text-black  bg-[#1d1d1d] shadow-2xl '>
        <div>
            <h1 className="text-2xl text-white font-semibold">flames</h1>
        </div>
        <ul className='hidden '>
            {links.map(({link, id}) => (
                <li 
                key={id} 
                className='px-4 cursor-pointer capitalize font-normal hover:text-white text-black hover:scale-105'>
                <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-2 z-10 text-black '>
            {nav ? <LiaTimesSolid size={30} /> : <RxHamburgerMenu color="white" size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center content-end items-center absolute bg-white   top-0 left-0 w-full h-screen divide-y divide-grey'>
            {links.map(({link, id}) => (
                    <li 
                    key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
        )}
        
    </div>
    )
}

export default Navbar;