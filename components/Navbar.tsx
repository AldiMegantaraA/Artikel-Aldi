import Link from 'next/link'
import navStyles from '../styles/Navbar.module.css'
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Logo from '../public/vercel.svg';
import Image from 'next/image'


function Nav() {
  const [nav, setNavbar] = useState(false)
  const router = useRouter();

  useEffect(function mount() {
    function changeBackgroundColor() {
      if(window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }

    window.addEventListener("scroll", changeBackgroundColor);

    return function unMount() {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  });

  // window.addEventListener('scroll', changeBackgroundColor)
  
  return (
    <nav className={nav ? `${navStyles.navActive}` : `${navStyles.nav}`}>
      <ul>
        <li className={navStyles.logo}>
          <Link href='/'><Image src={Logo}/></Link>
        </li>
      </ul>
      <ul>
        <li className={router.pathname == "/" ? `${navStyles.active}` : ""}>
          <Link href='/'>Home</Link>
        </li>
        <li className={router.pathname == "/about" ? `${navStyles.active}` : ""}>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
