import React from 'react';
import Rating from '@material-ui/lab/Rating';
import './ProductRating.css'

import Box from '@material-ui/core/Box';

export default function SimpleRating(props) {
  return (
    <div>
      <Box component="fieldset" borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={props.x}
        />
      </Box>
    </div>
  );
}