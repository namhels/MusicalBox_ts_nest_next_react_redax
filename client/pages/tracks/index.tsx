import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card, Grid, Button, Box, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import TrackList from '@/components/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchTracks, searchTracks } from '@/store/actions-creators/track';
import { useDispatch } from 'react-redux';


const Index = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector(state => state.track);
  const [query, setQuery] = useState<String>("");
  const dispatch = useDispatch() as NextThunkDispatch;

  const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    await dispatch(await searchTracks(e.target.value))
  }

  if (error) {
    return <MainLayout>
      <h2>{error}</h2>
    </MainLayout>
  }

  return (
    <MainLayout title={"Track list - Musical Box"}>
      <Grid container justifyContent='center'>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
            <h1>Track list</h1>
            <Button onClick={() => router.push('/tracks/create')}>Load up</Button>
          </Grid>
          </Box>
          <TextField
            fullWidth
            value={query}
            onChange={search}
            placeholder='Search track'
          />
          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks())
})

// export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
//   const dispatch = store.dispatch as NextThunkDispatch;
//   await dispatch(await fetchTracks());
//   return {
//     props: {},
//   };
// });