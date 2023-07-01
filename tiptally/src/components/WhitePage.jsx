import React, { useState } from 'react'
import InputAndCalcComp from './InputAndCalcComp'
import CalculatedDisplayComp from './CalculatedDisplayComp'
import { useMediaQuery } from '@mui/material';

function WhitePage() {
  const [calculatedValue, setCalculatedValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0)
  const isSmallScreen = useMediaQuery('(max-width: 750px)');
  const isTabScreen = useMediaQuery('(max-width: 1200px)');

  return (
    <div style={{backgroundColor: 'hsl(0, 0%, 100%)', height: isSmallScreen ? '100%' : '50%', width: isTabScreen ? '100%' : '55%', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem', flexDirection: isSmallScreen ? 'column' : 'row' }}>
             <InputAndCalcComp setCalculatedValue={setCalculatedValue} setTotalValue={setTotalValue} />
            <CalculatedDisplayComp calculatedValue={calculatedValue} totalValue={totalValue} />

    </div>
  )
}

export default WhitePage