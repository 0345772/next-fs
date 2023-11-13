'use client'

import Link from "next/link";
import cl from './Navbar.module.css'
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contacts",
    url: "/contacts",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
]

const Navbar = () => {
const logo = 'Step_65'
  return (
    <nav className={cl.navbar} >
      <Link href={"/"} className={cl.logo}>{logo}</Link>
      <div className={cl.links} >
        <DarkModeToggle/>
        {links.map((el) => (
          <Link key={el.id} href={el.url}>
            {el.title}
          </Link>
        ))}
        <button 
        className={cl.logout}
        onClick={()=>{console.log('logged out')}}
        >
        Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
