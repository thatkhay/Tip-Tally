import React from 'react';
import Button from '@mui/material/Button';

function InputAndCalcComp() {
  const tipVal = [5, 10, 15, 20, 50];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '50%', marginRight: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <label htmlFor="number" style={{ textTransform: 'capitalize', color: 'hsl(186, 14%, 43%)' }}>bill</label>
        <input type="number" style={{ backgroundColor: 'hsl(189, 41%, 97%)', border: '0', borderRadius: '.2rem', height: '1.7rem', width: '20rem', marginTop: '1rem', marginLeft: '1rem' }} />
      </div>

      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
        <label htmlFor="number" style={{ textTransform: 'capitalize', color: 'hsl(186, 14%, 43%)' }}>select tip</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {tipVal.map((tip) => (
            <Button key={tip} variant="contained" style={{ backgroundColor: 'hsl(183, 100%, 15%)', marginTop: '1rem' }}>
              {tip} %
            </Button>
          ))}
          <input type="text" placeholder="Custom" style={{ fontFamily: 'Space Mono',  backgroundColor: 'hsl(189, 41%, 97%)', border: '0', borderRadius: '.4rem', height: '2.3rem', width: '6rem', marginTop: '1rem' , textAlign: 'right' , padding: '0 0.5rem'}} />
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h5 style={{textTransform: 'capitalize'}}>number of people</h5>
            <h5 style={{textTransform: 'capitalize'}}>n</h5>
          </div>
          <input type="number" style={{ backgroundColor: 'hsl(189, 41%, 97%)', border: '0', borderRadius: '.2rem', height: '1.7rem', width: '20rem', marginLeft: '1rem', fontSize: '2rem' }} />
      </div>

    </div>
  );
}

export default InputAndCalcComp;
