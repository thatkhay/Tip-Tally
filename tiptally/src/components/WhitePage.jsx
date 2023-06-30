import React from 'react'
import InputAndCalcComp from './InputAndCalcComp'
import CalculatedDisplayComp from './CalculatedDisplayComp'

function WhitePage() {
  return (
    <div style={{backgroundColor: 'hsl(0, 0%, 100%)', height:'50%', width: '55%', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem'}}>
       <InputAndCalcComp />
       <CalculatedDisplayComp />
    </div>
  )
}

export default WhitePage