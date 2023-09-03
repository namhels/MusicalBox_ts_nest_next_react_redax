import React, { useState } from 'react';
import { ITrack } from '@/types/track';
import MainLayout from '@/layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import {GetServerSideProps} from "next";
import axios from "axios";
import { useInput } from '@/hooks/useInput';

const TrackPage = ({ serverTrack }: any) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter();
  const username = useInput('')
  const text = useInput('')

  const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
        } catch (e) {
            console.log(e)
        }
    }

  return (
    <MainLayout
            title={"Musical Box - " + track.name + " - " + track.artist}
            keywords={'Music, artists, ' + track.name + ", " + track.artist}
        >
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
          src={'http://localhost:5000/' + track.picture}
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
          {...username}
        />
        <TextField
          label="Comment"
          fullWidth
          multiline
          rows={4}
          style={{ marginTop: 10 }}
          {...text}
        />
        <Button
          onClick={addComment}
          style={{ fontSize: 22, marginTop: 10 }}
          variant={"outlined"}
        >Send
        </Button>
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params?.id)
    return {
        props: {
            serverTrack: response.data
        }
    }
}