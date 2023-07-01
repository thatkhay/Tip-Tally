import React from 'react'
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';

function CalculatedDisplayComp({ calculatedValue, totalValue }) {
  const isSmallScreen = useMediaQuery('(max-width: 750px)');

  const handleReset = () => {
    window.location.reload();
  };
  
  return (
    <div style={{ width: isSmallScreen ? '100%' : '50%', marginLeft: isSmallScreen ? '0' : '1rem', backgroundColor: 'hsl(183, 100%, 15%) ' , height: '100%', padding: isSmallScreen ? '1rem 1rem  2rem 1rem' : '1rem', borderRadius: '.7rem', marginTop: isSmallScreen ? '2rem' : '0' }}>
     
     <div style={{ display: 'flex', alignItems: 'center' , justifyContent: 'space-between'}}>
      <div>
       <h5 style={{fontSize: '.7rem', color: 'white', textTransform: 'uppercase', textAlign: 'left'}}>tip amount</h5>
       <span style={{fontSize: '.6rem', color: 'hsl(189, 41%, 97%)', textAlign: 'left' , marginLeft: '-2rem' }}>/ person</span>
      </div >
      <span style={{fontSize: '2rem', color: 'hsl(172, 67%, 45%)'}}>${calculatedValue.toFixed(2)}</span>
     </div>


     
     <div style={{ display: 'flex', alignItems: 'center' , justifyContent: 'space-between', marginTop: '2rem'}}>
      <div>
      <h5 style={{fontSize: '.7rem', color: 'white', textTransform: 'uppercase', textAlign: 'left'}}>total</h5>
       <span style={{fontSize: '.6rem', color: 'hsl(189, 41%, 97%)', textAlign: 'left' }}>/person</span>
      </div>
      <span style={{fontSize: '2rem', color: 'hsl(172, 67%, 45%)'}}>${totalValue.toFixed(2)}</span>
     </div>
     
     <Button  variant="contained" style={{ backgroundColor: 'hsl(172, 67%, 45%)', height: '2rem', width: '70%', color: 'hsl(183, 100%, 15%)', marginTop: '3rem' }} onClick={handleReset}>reset</Button>
    </div>
  )
}

export default CalculatedDisplayComp