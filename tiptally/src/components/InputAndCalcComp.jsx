import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

function InputAndCalcComp({ setCalculatedValue, setTotalValue }) {
  const tipVal = [5, 10, 15, 20, 50];
  const isSmallScreen = useMediaQuery('(max-width: 750px)');
  

  const [bill, setBill] = useState('');
  const [selectedTip, setSlectedTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [customTip, setCustomTip] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleCustomBill = (e) => {
    setCustomTip(e.target.value);
  };

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  const handleTipSlelect = (e, tip) => {
    setSlectedTip(tip);
  };

  const handlePeopleNoChange = (e) => {
    setNumberOfPeople(e.target.value);
  };

  useEffect(() => {
    const parsedBill = parseFloat(bill);
    const parsedCustomTip = parseFloat(customTip);
    const parsedSelectedTip = parseFloat(selectedTip);
    const parsedNumberOfPeople = parseFloat(numberOfPeople);

    if (!isNaN(parsedBill) && !isNaN(parsedNumberOfPeople) && parsedNumberOfPeople !== 0) {
      let calculatedValue = 0;

      if (parsedCustomTip) {
        calculatedValue = (parsedBill * parsedCustomTip) / 100 / parsedNumberOfPeople;
      } else {
        calculatedValue = (parsedBill * parsedSelectedTip) / 100 / parsedNumberOfPeople;
      }
      setCalculatedValue(calculatedValue);
    } else {
      setCalculatedValue(0);
    }
  }, [bill, selectedTip, numberOfPeople, customTip, setCalculatedValue]);

  useEffect(() => {
    const parsedBill = parseFloat(bill);
    const parsedSelectedTip = parseFloat(selectedTip);
    const parsedNumberOfPeople = parseFloat(numberOfPeople);
    const parsedCustomTip = parseFloat(customTip);

    if (
      !isNaN(parsedBill) &&
      !isNaN(parsedSelectedTip) &&
      !isNaN(parsedNumberOfPeople) &&
      parsedNumberOfPeople !== 0
    ) {
      let calculatedValue = 0;
      let totalBill = parsedBill / parsedNumberOfPeople;

      if (!isNaN(parsedCustomTip)) {
        calculatedValue = (parsedBill * parsedCustomTip) / 100 / parsedNumberOfPeople;
      } else {
        calculatedValue = (parsedBill * parsedSelectedTip) / 100 / parsedNumberOfPeople;
      }

      const totalValue = calculatedValue + totalBill;
      setTotalValue(totalValue);
    } else {
      setTotalValue(0);
    }
  }, [bill, selectedTip, numberOfPeople, customTip, setTotalValue]);

  useEffect(() => {
    if (numberOfPeople === '0') {
      setErrorMsg(`can't be 0`);
    } else {
      setErrorMsg('');
    }
  }, [numberOfPeople]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: isSmallScreen ? '100%' : '50%', marginRight: '1rem', textAlign: isSmallScreen ? 'left' : 'center ' }}>
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <label htmlFor="number" style={{ textTransform: 'capitalize', color: 'hsl(186, 14%, 43%)' }}>
          bill
        </label>
        <input
          type="number"
          style={{
            fontFamily: 'Space Mono',
            backgroundColor: 'hsl(189, 41%, 97%)',
            border: '0',
            borderRadius: '.2rem',
            height: '1.7rem',
            width: '20rem',
            marginTop: '1rem',
            marginLeft: '.5rem',
            textAlign: 'right',
          }}
          onChange={handleBillChange}
          value={bill}
        />
      </div>

      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
        <label htmlFor="number" style={{ textTransform: 'capitalize', color: 'hsl(186, 14%, 43%)' }}>
          select tip
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 30%)', gap: '1rem' }}>
          {tipVal.map((tip) => (
            <Button
              key={tip}
              variant="contained"
              style={{ backgroundColor: 'hsl(183, 100%, 15%)', marginTop: '1rem' }}
              onClick={(e) => handleTipSlelect(e, tip)}
            >
              {tip} %
            </Button>
          ))}
          <input
            type="number"
            placeholder="Custom"
            style={{
              fontFamily: 'Space Mono',
              backgroundColor: 'hsl(189, 41%, 97%)',
              border: '0',
              borderRadius: '.4rem',
              height: '2.3rem',
              width: '85%',
              marginTop: '1rem',
              textAlign: 'right',
              padding: '0 0.5rem',
            }}
            onChange={handleCustomBill}
            value={customTip}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h5 style={{ textTransform: 'capitalize'}}>number of people</h5>
          <h5 style={{ textTransform: 'capitalize', color: 'red' }}>{errorMsg}</h5>
        </div>
        <input
          type="number"
          style={{
            fontFamily: 'Space Mono',
            backgroundColor: 'hsl(189, 41%, 97%)',
            border: '0',
            borderRadius: '.2rem',
            height: '1.7rem',
            width: '20rem',
            marginLeft: '.5rem',
            textAlign: 'right',
          }}
          onChange={handlePeopleNoChange}
          value={numberOfPeople}
        />
        
      </div>
    </div>
  );
}

export default InputAndCalcComp;
