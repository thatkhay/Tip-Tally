import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';

function InputAndCalcComp() {
  const tipVal = [5, 10, 15, 20, 50];

const [bill, setBill] = useState('')
const [selectedTip, seSlectedTip] = useState(0)
const [numberOfPeople, setNumberOfPeople] = useState('')
const [customTip, setCustomTip] = useState('')


const handleCustomBill = (e) => {
  setCustomTip(e.target.value)
  console.log(e.target.value);
}

const handleBillChange = (e) => {
  setBill(e.target.value)
  console.log(e.target.value);
}

const handleTipSlelect  = (tip) => {
  seSlectedTip(tip)
console.log(tip);
}

const handlePeopleNoChange = (e) => {
  setNumberOfPeople(e.target.value)
  console.log(e.target.value);
}

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '50%', marginRight: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <label htmlFor="number" style={{ textTransform: 'capitalize', color: 'hsl(186, 14%, 43%)' }}>bill</label>
        <input type="number" style={{fontFamily: 'Space Mono', backgroundColor: 'hsl(189, 41%, 97%)', border: '0', borderRadius: '.2rem', height: '1.7rem', width: '20rem', marginTop: '1rem', marginLeft: '.5rem' , textAlign: 'right' }} onChange={handleBillChange} value={bill} />
      </div>

      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
        <label htmlFor="number" style={{ textTransform: 'capitalize', color: 'hsl(186, 14%, 43%)' }}>select tip</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 30%)', gap: '1rem' }}>
          {tipVal.map((tip) => (
            <Button key={tip} variant="contained" style={{ backgroundColor: 'hsl(183, 100%, 15%)', marginTop: '1rem' }} onClick={handleTipSlelect}>
              {tip} %
            </Button>
          ))}
          <input type="text" placeholder="Custom" style={{ fontFamily: 'Space Mono',  backgroundColor: 'hsl(189, 41%, 97%)', border: '0', borderRadius: '.4rem', height: '2.3rem', width: '5.7rem', marginTop: '1rem' , textAlign: 'right' , padding: '0 0.5rem'}} onChange={handleCustomBill} value={customTip}/>
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h5 style={{textTransform: 'capitalize'}}>number of people</h5>
            <h5 style={{textTransform: 'capitalize'}}>n</h5>
          </div>
          <input type="number" style={{fontFamily: 'Space Mono', backgroundColor: 'hsl(189, 41%, 97%)', border: '0', borderRadius: '.2rem', height: '1.7rem', width: '20rem', marginLeft: '.5rem', textAlign: 'right' }} onChange={handlePeopleNoChange} value={numberOfPeople} />
      </div>

    </div>
  );
}

export default InputAndCalcComp;
