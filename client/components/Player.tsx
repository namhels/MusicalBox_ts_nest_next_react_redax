import React, {useEffect} from 'react';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import { ITrack } from '@/types/track';
import s from '../styles/Player.module.scss'
import styles from '../styles/TrackItem.module.scss'
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';

let audio: any;

const Player = () => {
  const track: ITrack = { _id: "1", name: "Track 1", artist: "DDT", text: "kjlkjsdaas", listens: 5, audio: "http://localhost:5000/src/audio/Mika.mp3", picture: "https://dictionary.cambridge.org/ru/images/thumb/poster_noun_002_28550.jpg?version=5.0.333", comments: [] };

  const { pause, volume, active, currentTime, duration } = useTypedSelector(state => state.player);
  const { pauseTrack, playTrack } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio()
      audio.src = track.audio
    }
  }, [track.audio])


  const play = () => {
    if (pause) {
      playTrack()
      audio.play()
    } else {
      pauseTrack()
      audio.pause()
    }
  };

  return (
    <div className={s.player}>
      <IconButton onClick={play}>
          {pause
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