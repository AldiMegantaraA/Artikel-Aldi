import Link from 'next/link'
import footerStyles from '../styles/Footer.module.css'
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Logo from '../public/vercel.svg';
import Image from 'next/image'


function Footer() {
  const router = useRouter();
  
  return (
    <div className={footerStyles.footer}>
      <ul>
        <li className={footerStyles.logo}>
          <Link href='/'><Image src={Logo}/></Link>
        </li>
      </ul>
      <ul>
        <li className={router.pathname == "/" ? `${footerStyles.active}` : ""}>
          <Link href='/'>Home</Link>
        </li>
        <li className={router.pathname == "/about" ? `${footerStyles.active}` : ""}>
          <Link href='/about'>About</Link>
        </li>
      </ul>
      <ul>
        <li>
            <p>Aldi Megantara Arifin</p>
        </li>
      </ul>
    </div>
  )
}

export default Footer
