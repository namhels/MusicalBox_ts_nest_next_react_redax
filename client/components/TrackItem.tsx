import React from 'react';
import {ITrack} from "../types/track";
import { Card, Grid, IconButton } from '@mui/material';
import { PlayArrow, Pause, Delete } from '@mui/icons-material';
import styles from '../styles/TrackItem.module.scss';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {

    return (
      <Card className={styles.track}>
        <IconButton>
          {!active
            ? <PlayArrow />
            : <Pause />
          }
        </IconButton>
        <img width={70} height={70} src={track.picture} alt='poster' />
        <Grid className={styles.nameArtist} container direction="column">
          <div>{track.name}</div>
          <div className={styles.artist}>{track.artist}</div>
        </Grid>
        {active && <div>02:42 / 03:22</div>}
        <IconButton className={styles.iconDelete}>
          <Delete/>
        </IconButton>
      </Card>
    );
};

export default TrackItem;