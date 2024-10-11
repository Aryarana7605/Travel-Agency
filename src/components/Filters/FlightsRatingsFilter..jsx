import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FlightsRatingsFilter = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [open, setOpen] = useState(false); 

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating); 
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen); 
  };

  return (
    <Box sx={{ width: 250 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" onClick={handleToggle} sx={{ cursor: 'pointer' }}>
        <Typography variant="h6" fontSize="1rem" fontWeight="600">Rating</Typography>
        <IconButton>
          <ExpandMoreIcon sx={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
        </IconButton>
      </Box>

      <Collapse in={open}>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          {[0, 1, 2, 3, 4].map((rating) => (
            <Button
              key={rating}
              variant={selectedRating === rating ? 'contained' : 'outlined'}
              color="success"
              onClick={() => handleRatingSelect(rating)}
            >
              {rating}+
            </Button>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default FlightsRatingsFilter;