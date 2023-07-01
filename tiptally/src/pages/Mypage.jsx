import React from 'react'
import WhitePage from '../components/WhitePage'
import { useMediaQuery } from '@mui/material';

function Mypage() {
  const isSmallScreen = useMediaQuery('(max-width: 750px)');

  return (
    <div style={{backgroundColor: 'hsl(185, 41%, 84%)', height: isSmallScreen ? 'auto' : '90vh', padding: '2rem'}}>
            <h2 style={{textTransform: 'capitalize'}}>tip <br/> tally</h2>
<div style={{ display: 'flex' , alignItems: 'center', justifyContent: 'center', }}>

     <WhitePage />
    </div>
    </div>
    
  )
}

export default Mypage