import React, { useState } from 'react'
import InputAndCalcComp from './InputAndCalcComp'
import CalculatedDisplayComp from './CalculatedDisplayComp'


function WhitePage() {
  const [calculatedValue, setCalculatedValue] = useState(0)
  const [totalValue, setTotalValue] = useState(0)

  return (
    <div style={{backgroundColor: 'hsl(0, 0%, 100%)', height:'50%', width: '55%', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem'}}>
             <InputAndCalcComp setCalculatedValue={setCalculatedValue} setTotalValue={setTotalValue} />
            <CalculatedDisplayComp calculatedValue={calculatedValue} totalValue={totalValue} />

    </div>
  )
}

export default WhitePage