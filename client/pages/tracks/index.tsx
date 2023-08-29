import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import { Card, Grid, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { ITrack } from '@/types/track';
import TrackList from '@/components/TrackList';


const Index = () => {
  const router = useRouter()
  const tracks: ITrack[] = [
    { _id: "1", name: "Track 1", artist: "DDT", text: "kjlkjsdaas", listens: 5, audio: "http://localhost:5000/audio/3495.mp3", picture: "http://localhost:5000/image/avat.jpg", comments: [] },
    { _id: "2", name: "Track 2", artist: "DDT 2", text: "sdfsdfsdffsf", listens: 5, audio: "http://localhost:5000/audio/94150.mp3", picture: "http://localhost:5000/image/unnamed.jpg", comments: [] },
    {_id: "3", name: "Track 3", artist: "DDT 3", text: "xcvvxxbc", listens: 5, audio: "http://localhost:5000/audio/3495.mp3", picture: "http://localhost:5000/image/avat.jpg", comments: []},
  ]

  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
            <h1>Track list</h1>
            <Button onClick={() => router.push('/tracks/create')}>Load up</Button>
          </Grid>
          </Box>
          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index