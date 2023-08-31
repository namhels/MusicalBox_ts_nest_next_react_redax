import React from 'react';
import StepWrapper from '@/components/StepWrapper';
import MainLayout from '@/layouts/MainLayout';

const Create = () => {
  return (
    <MainLayout>
      <StepWrapper activeStep={2}>
        <h1>Loading track</h1>
      </StepWrapper>
    </MainLayout>
  )
}

export default Create;