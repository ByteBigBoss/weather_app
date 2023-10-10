'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const toggleTheme = ()=>{

  const root = document.documentElement;

  if(root.getAttribute('theme')==='light'){
    root.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }else{
    root.setAttribute('theme', 'light');
    localStorage.setItem('theme', 'light');
  }

}

const loadTheme = ()=>{
    const root = document.documentElement;
    const storedTheme = localStorage.getItem('theme');
    root.setAttribute('theme', storedTheme || 'light');
}


const Navbar = () => {

  useEffect(loadTheme, []);

  const [page, setPage] = useState('home');//state

  const Route = useRouter();
  
  const NavigateToLoginPage = ()=>{Route.push('/login', {scroll:false})}

  const path = usePathname();
  const params = useSearchParams();

  useEffect(()=>{
    
    if(path==='/'){
      setPage('home');
    }else if(path==='/login'){
      setPage('login');
    }else if(path==='/register'){
      setPage('register');
    }

  },[path, params]);

  // ----------------------------------------------------------------------
  
  return (
    <div className={`${'w-full h-auto bg-slate-800 box-border px-[40px] py-[30px] flex justify-between items-center'} ${page==='login'?'hidden':page==='register'?'hidden':'visible'}`}>
          <button className='w-[100px] h-[40px] bg-blue-500 rounded-[12px] text-white font-bold' onClick={NavigateToLoginPage}>Log out</button>
          <button className='px-[30px]  py-[20px] bg-blue-500 rounded-[12px] text-white font-bold' onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar