import React from 'react';
import { Grid, TextField } from '@mui/material';

const TrackInfo = () => {
  return (
    <Grid
            container
            direction={"column"}
            style={{padding: 20}}
          >
            <TextField
              style={{marginTop: 10}}
              label={"Track name"}
            />
            <TextField
              style={{marginTop: 10}}
              label={"Singer or band name"}
            />
            <TextField
              style={{marginTop: 10}}
              label={"Track words"}
              multiline
              rows={3}
            />
          </Grid>
  )
}

export default TrackInfo;