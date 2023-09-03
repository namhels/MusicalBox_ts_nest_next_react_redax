import React from 'react';
import {ITrack} from "../types/track";
import { Card, Grid, IconButton } from '@mui/material';
import { PlayArrow, Pause, Delete } from '@mui/icons-material';
import styles from '../styles/TrackItem.module.scss';
import { useRouter } from 'next/router';
import { useActions } from '@/hooks/useActions';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const {playTrack, pauseTrack, setActiveTrack} = useActions()

  const play = (e: any) => {
    e.stopPropagation()
    setActiveTrack(track)
    playTrack()
  }

    return (
      <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
        <IconButton onClick={play}>
          {!active
            ? <PlayArrow />
            : <Pause />
          }
        </IconButton>
        <img width={70} height={70} src={'http://localhost:5000/' + track.picture} alt='poster' />
        <Grid className={styles.nameArtist} container direction="column">
          <div>{track.name}</div>
          <div className={styles.artist}>{track.artist}</div>
        </Grid>
        {active && <div>02:42 / 03:22</div>}
        <IconButton className={styles.iconDelete} onClick={e => e.stopPropagation()}>
          <Delete/>
        </IconButton>
      </Card>
    );
};

export default TrackItem;