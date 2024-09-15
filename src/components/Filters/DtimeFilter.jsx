import React, { useState } from 'react';
import { Box, Slider, Typography, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const formatTime = (value) => {
  const totalMinutes = value * 5;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const suffix = hours >= 12 ? 'PM' : 'AM';
  const formattedHour = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  const formattedMinutes = minutes === 0 ? '00' : minutes;
  return `${formattedHour}:${formattedMinutes} ${suffix}`;
};

const DtimeFilter = () => {
  
  const [timeValue, setTimeValue] = useState([0, 287]); 
  const [open, setOpen] = useState(false);

  
  const handleTimeChange = (event, newValue) => {
    setTimeValue(newValue);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" onClick={handleToggle} sx={{ cursor: 'pointer' }}>
        <Typography variant="h6" fontSize="1rem" fontWeight="600">Departure Time</Typography>
        <IconButton>
          <ExpandMoreIcon sx={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
        </IconButton>
      </Box>

      <Collapse in={open}>
        <Box sx={{ mt: 2 }}>
          <Slider
            value={timeValue}
            onChange={handleTimeChange}
            valueLabelDisplay="auto"
            valueLabelFormat={formatTime} 
            min={0}
            max={287} 
            step={1} 
          />
          <Box display="flex" justifyContent="space-between">
            <Typography>{formatTime(timeValue[0])}</Typography>
            <Typography>{formatTime(timeValue[1])}</Typography>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default DtimeFilter;
