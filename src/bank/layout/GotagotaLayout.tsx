import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { NavBar, SideBar } from '../components';

interface GotagotaLayoutProps {
  children: ReactNode;
}
const drawerWidth =240;

export const GotagotaLayout: React.FC<GotagotaLayoutProps> = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth}/>

      <SideBar drawerWidth={drawerWidth} />  
    

    </Box>
  );
};