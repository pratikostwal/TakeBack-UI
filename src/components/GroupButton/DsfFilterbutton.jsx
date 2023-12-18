import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const toCamelCase = (text) => {
  return text.replace(/\s+/g, ' ').toLowerCase(); // Preserve space between words
};

export default function GroupButton() {
  const [selectedButton, setSelectedButton] = useState('Executive View');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const renderComponentBasedOnButton = () => {
    // Add logic here to render the component based on the selectedButton
  };

  useEffect(() => {
    handleButtonClick('Executive View');
  }, []);

  return (
    <Box
      sx={{
        marginTop: "1%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'right',
        '& > *': {
          m: 1.1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          onClick={() => handleButtonClick('DFS Global')}
          style={{
            backgroundColor: selectedButton === 'DFS Global' ? '#E6F2FB' : '',
            color: selectedButton === 'DFS Global' ? '#0076CE' : '',
          }}
        >
          {toCamelCase('DFS Global')}
        </Button>
        <Button
          onClick={() => handleButtonClick('DFS AMER')}
          style={{
            backgroundColor: selectedButton === 'DFS AMER' ? '#E6F2FB' : '',
            color: selectedButton === 'DFS AMER' ? '#0076CE' : '',
          }}
        >
          {toCamelCase('DFS AMER')}
        </Button>
        <Button
          onClick={() => handleButtonClick('DFS EMEA')}
          style={{
            backgroundColor: selectedButton === 'DFS EMEA' ? '#E6F2FB' : '',
            color: selectedButton === 'DFS EMEA' ? '#0076CE' : '',
          }}
        >
          {toCamelCase('DFS EMEA')}
        </Button>
        <Button
          onClick={() => handleButtonClick('DFS APJ')}
          style={{
            backgroundColor: selectedButton === 'DFS APJ' ? '#E6F2FB' : '',
            color: selectedButton === 'DFS APJ' ? '#0076CE' : '',
          }}
        >
          {toCamelCase('DFS APJ')}
        </Button>
      </ButtonGroup>
      {renderComponentBasedOnButton()}
    </Box>
  );
}
