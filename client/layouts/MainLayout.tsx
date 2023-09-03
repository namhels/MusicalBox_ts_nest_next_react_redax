import React from 'react';
import Navbar from '@/components/Navbar';
import Player from '@/components/Player';
import { Container } from '@mui/material';
import Head from "next/head";

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps>
= ({
    children,
    title,
    description,
    keywords
    }) => {
  return (
    <>
      <Head>
                <title>{title || 'Musical Box'}</title>
                <meta name="description" content={`Music area. Here everyone can leave their track and become famous` + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || "Music, tracks, artists"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
      <Navbar />
      <Container style={{margin: '90px 0'}}>
        {children}
      </Container>
      <Player/>
    </>
  )
}

export default MainLayout;