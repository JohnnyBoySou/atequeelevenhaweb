'use client';
import { Camera } from 'lucide-react';
import React, {useState} from "react";
import Header from '../components/header';
import Carrousel from '../components/carrousel';

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={`${darkMode && "dark"}`}>
      <main className=" bg-zinc-100 dark:bg-zinc-800">
        <Header/>
        <button onClick={() => setdarkMode(!darkMode)} className='bg-zinc-800 px-12 py-6 rounded-full font-mono '>Dark Mode</button>
        <Carrousel/>
      </main>
    
    </div>
  );
}
