import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const LinearProgressWithLabel = (progress)  =>{

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={progress.progress}/>
      </Box>
      <Box sx={{ minWidth: 5 }}>
        <Typography variant="body2" color="text.secondary">{progress.progress}</Typography>
      </Box>
    </Box>
  );
};
export default LinearProgressWithLabel;