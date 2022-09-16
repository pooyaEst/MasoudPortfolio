import { useState, useContext, useEffect } from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { scrolledComponent } from '../../helper/scrolled';

const Nav = () => {

    const {scrolled, setScrolled}: any = useContext(scrolledComponent)
    const [active, setActive] = useState('#header');
    useEffect(()=>{
        setActive(scrolled);
    }, [scrolled])
        

    return (
        <nav>
            <a
             href="#header"
             onClick={()=>setActive("#header")}
             className={active === '#header' ? 'active' : ''}>
                 <AiOutlineHome/>
            </a>

            <a
             href="#about"
             onClick={()=>setActive("#about")}
             className={active === '#about' ? 'active' : ''}>
                 <AiOutlineUser />
            </a>

            <a
             href="#experience"
             onClick={()=>setActive("#experience")}
             className={active === '#experience' ? 'active' : ''}>
                 <BiBook/>
            </a>

            <a
             href="#testimonials"
             onClick={()=>setActive("#testimonials")}
             className={active === '#testimonials' ? 'active' : ''}>
                 <RiServiceLine className='tooltip'/>
            </a>

            <a
             href="#contact"
             onClick={()=>setActive("#contact")}
             className={active === '#contact' ? 'active' : ''}>
                 <BiMessageSquareDetail className='tooltip'/> 
            </a>
        </nav>
    );
};

export default Nav;