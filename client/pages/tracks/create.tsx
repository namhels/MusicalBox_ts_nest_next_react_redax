import React, { useState } from 'react';
import StepWrapper from '@/components/StepWrapper';
import MainLayout from '@/layouts/MainLayout';
import { Button, Grid } from '@mui/material';
import TrackInfo from '@/components/TrackInfo';
import FileUpload from '@/components/FileUpload';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const next = () => {
    setActiveStep(prev => prev + 1);
  }
  const back = () => {
    setActiveStep(prev => prev - 1);
  }

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 &&
          <TrackInfo/>
        }
        {activeStep === 1 &&
          <FileUpload
            setFile={setPicture}
            accept='image/*'
          >
            <Button>Download image</Button>
          </FileUpload>
        }
        {activeStep === 2 &&
          <FileUpload
            setFile={setAudio}
            accept='audio/*'
          >
            <Button>Download audio</Button>
          </FileUpload>
        }
      </StepWrapper>
      <Grid
        container justifyContent="space-between"
      >
        <Button
          variant={"outlined"}
          onClick={back}
          disabled={activeStep === 0}
        >Back
        </Button>
        <Button
          variant={"outlined"}
          onClick={next}
          disabled={activeStep === 3}
        >Next
        </Button>
      </Grid>
    </MainLayout>
  )
}

export default Create;