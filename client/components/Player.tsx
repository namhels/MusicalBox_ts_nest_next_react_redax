import React from 'react';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import { ITrack } from '@/types/track';
import s from '../styles/Player.module.scss'
import styles from '../styles/TrackItem.module.scss'
import TrackProgress from './TrackProgress';

const Player = () => {
  const active = false;

  const track: ITrack = { _id: "1", name: "Track 1", artist: "DDT", text: "kjlkjsdaas", listens: 5, audio: "http://localhost:5000/audio/3495.mp3", picture: "https://dictionary.cambridge.org/ru/images/thumb/poster_noun_002_28550.jpg?version=5.0.333", comments: [] };

  return (
    <div className={s.player}>
      <IconButton onClick={e => e.stopPropagation()}>
          {!active
            ? <PlayArrow />
            : <Pause />
          }
      </IconButton>
      <Grid className={styles.nameArtist} container direction="column">
          <div>{track.name}</div>
          <div className={styles.artist}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => { }} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={() => { }} />
    </div>
  )
}

export default Player;