import React, { useState } from 'react';
import { Box, Slider, Typography, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const valuetext = (value) => `$${value}`;

const FlightsPriceFilter = () => {
  
  const [priceValue, setPriceValue] = useState([50, 1200]); 
  const [open, setOpen] = useState(false);

  
  const handlePriceChange = (event, newValue) => {
    setPriceValue(newValue);
  };

  
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" onClick={handleToggle} sx={{ cursor: 'pointer' }}>
        <Typography variant="h6" fontSize="1rem" fontWeight="600" >Price</Typography>
        <IconButton>
          <ExpandMoreIcon sx={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
        </IconButton>
      </Box>

      <Collapse in={open} >
        <Box sx={{ mt: 2 }}>
          <Slider
            value={priceValue}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={50}
            max={1200}
          />
          <Box display="flex" justifyContent="space-between"  >
            <Typography>${priceValue[0]}</Typography>
            <Typography>${priceValue[1]}</Typography>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FlightsPriceFilter;
