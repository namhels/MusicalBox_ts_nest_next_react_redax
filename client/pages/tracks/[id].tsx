import React from 'react';
import { ITrack } from '@/types/track';
import MainLayout from '@/layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const TrackPage = () => {
  const router = useRouter();
  const track: ITrack = { _id: "1", name: "Track 1", artist: "DDT", text: "kjlkjsdaas", listens: 5, audio: "http://localhost:5000/audio/3495.mp3", picture: "https://dictionary.cambridge.org/ru/images/thumb/poster_noun_002_28550.jpg?version=5.0.333", comments: [] };

  return (
    <MainLayout>
      <Button
        style={{ fontSize: 32, marginBottom: 15 }}
        variant={"outlined"}
        onClick={() => router.push('/tracks')}
      >
        To track list
      </Button>
      <Grid
        container
        style={{margin: '20px 0'}}
      >
        <img
          src={track.picture}
          alt='poster'
          width={200}
          height={200}
        />
        <div style={{ marginLeft: 30 }}>
          <h2>Track name - {track.name}</h2>
          <h2>Artist - {track.artist}</h2>
          <h2>Listens - {track.listens}</h2>
        </div>
      </Grid>
      <h2>Track words</h2>
      <p>{track.text}</p>
      <h2>Comments</h2>
      <Grid container>
        <TextField
          label="Your name"
          fullWidth
        />
        <TextField
          label="Comment"
          fullWidth
          multiline
          rows={4}
        />
        <Button>Send</Button>
      </Grid>
      <div>
        {track.comments.map(comment =>
          <div key={comment._id}>
            <div>Autor - {comment.username}</div>
            <div>Comment - {comment.text}</div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default TrackPage;