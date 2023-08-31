import React from 'react';
import Navbar from '@/components/Navbar'
import Player from '@/components/Player';
import { Container } from '@mui/material'

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <>
      <Navbar />
      <Container style={{margin: '90px 0'}}>
        {children}
      </Container>
      <Player/>
    </>
  )
}

export default MainLayout;