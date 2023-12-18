import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const toCamelCase = (text) => {
  return text.replace(/\s+/g, '').toLowerCase();
};

export default function GroupButton() {
  const [selectedButton, setSelectedButton] = useState('Executive View');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const renderComponentBasedOnButton = () => {
    switch (selectedButton) {
      case 'Executive View':
        return ;
      case 'Return Stream':
        return <p>Display Return Stream Component</p>;
      case 'Goal Projection':
        return <p>Display Goal Projection Component</p>;
      default:
        return null;
    }
  };

  useEffect(() => {
    handleButtonClick('Executive View');
  }, []);

  return (
    <Box
      sx={{
        marginTop:"1%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'right',
        '& > *': {
          m: 1.5,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          onClick={() => handleButtonClick('Executive View')}
          style={{
            backgroundColor: selectedButton === 'Executive View' ? '#E6F2FB' : '',
            color: selectedButton === 'Executive View' ? '#0076CE' : '',
          }}
        >
          {toCamelCase('Executive View')}
        </Button>
        <Button
          onClick={() => handleButtonClick('Return Stream')}
          style={{
            backgroundColor: selectedButton === 'Return Stream' ? '#E6F2FB' : '',
            color: selectedButton === 'Return Stream' ? '#0076CE' : '',
          }}
        >
          {toCamelCase('Return Stream')}
        </Button>
        <Button
          onClick={() => handleButtonClick('Goal Projection')}
          style={{
            backgroundColor: selectedButton === 'Goal Projection' ? '#E6F2FB' : '',
            color: selectedButton === 'Goal Projection' ? '#0076CE' : '',
          }}
        >
          {toCamelCase('Goal Projection')}
        </Button>
      </ButtonGroup>
      {renderComponentBasedOnButton()}
    </Box>
  );
}
