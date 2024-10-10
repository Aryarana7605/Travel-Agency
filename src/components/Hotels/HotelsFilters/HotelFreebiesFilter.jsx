import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, Typography, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const airlinesList = ['Free breakfast', 'Free parking', 'Free internet', 'Free airport shuttle', 'Free cancellation'];

const HotelFreebiesFilter = () => {
  const [checkedHotelFreebies, setCheckedHotelFreebies] = useState([]);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleCheckboxChange = (event) => {
    const airline = event.target.name;
    setCheckedHotelFreebies((prevChecked) =>
      prevChecked.includes(airline)
        ? prevChecked.filter((item) => item !== airline)
        : [...prevChecked, airline]
    );
  };

  return (
    <Box sx={{ width: 250 }} className="mt-4">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        onClick={handleToggle}
        sx={{ cursor: 'pointer', width: '100%' }}
      >
        <Typography variant="h6" sx={{ width: '100%' }} fontSize="1rem" fontWeight="600">
          Freebies
        </Typography>
        <IconButton>
          <ExpandMoreIcon
            sx={{
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '0.3s',
            }}
          />
        </IconButton>
      </Box>

      <Collapse in={open}>
        <Box sx={{ mt: 0.5 }}>
          {airlinesList.map((airline) => (
            <FormControlLabel
              key={airline}
              control={
                <Checkbox
                  checked={checkedHotelFreebies.includes(airline)}
                  onChange={handleCheckboxChange}
                  name={airline}
                  color="success"
                />
              }
              label={airline}
              sx={{ display: 'block' }}
            />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default HotelFreebiesFilter;
