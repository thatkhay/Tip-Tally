import React, { useState } from 'react'
import InputAndCalcComp from './InputAndCalcComp'
import CalculatedDisplayComp from './CalculatedDisplayComp'
import { useMediaQuery } from '@mui/material';

function WhitePage() {
  const [calculatedValue, setCalculatedValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0)
  const isSmallScreen = useMediaQuery('(max-width: 750px)');
  return (
    <div style={{backgroundColor: 'hsl(0, 0%, 100%)', height:'50%', width: '55%', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem', flexDirection: isSmallScreen ? 'column' : 'row' }}>
             <InputAndCalcComp setCalculatedValue={setCalculatedValue} setTotalValue={setTotalValue} />
            <CalculatedDisplayComp calculatedValue={calculatedValue} totalValue={totalValue} />

    </div>
  )
}

export default WhitePage