import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bubalakannan R Portfolio</title>
        <meta name="description" content="Portfolio of Bubalakannan R - Physical Designer and FPGA Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

