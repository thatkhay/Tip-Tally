import React from 'react'
import Button from '@mui/material/Button';

function CalculatedDisplayComp() {

  
  return (
    <div style={{ width: '50%', marginLeft: '1rem', backgroundColor: 'hsl(183, 100%, 15%) ' , height: '100%', padding: '1rem', borderRadius: '.7rem'}}>
     
     <div style={{ display: 'flex', alignItems: 'center' , justifyContent: 'space-between'}}>
      <div>
       <h5 style={{fontSize: '.7rem', color: 'white', textTransform: 'uppercase', textAlign: 'left'}}>tip amount</h5>
       <span style={{fontSize: '.6rem', color: 'hsl(189, 41%, 97%)', textAlign: 'left' , marginLeft: '-2rem' }}>/ person</span>
      </div >
      <span style={{fontSize: '2rem', color: 'hsl(172, 67%, 45%)'}}>$484.0</span>
     </div>


     
     <div style={{ display: 'flex', alignItems: 'center' , justifyContent: 'space-between', marginTop: '2rem'}}>
      <div>
      <h5 style={{fontSize: '.7rem', color: 'white', textTransform: 'uppercase', textAlign: 'left'}}>total</h5>
       <span style={{fontSize: '.6rem', color: 'hsl(189, 41%, 97%)', textAlign: 'left' }}>/ person</span>
      </div>
      <span style={{fontSize: '2rem', color: 'hsl(172, 67%, 45%)'}}>$484.0</span>
     </div>
     
     <Button  variant="contained" style={{ backgroundColor: 'hsl(172, 67%, 45%)', height: '2rem', width: '70%', color: 'hsl(183, 100%, 15%)', marginTop: '3rem' }}>reset</Button>
    </div>
  )
}

export default CalculatedDisplayComp