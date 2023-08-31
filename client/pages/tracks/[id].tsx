import React from 'react'
import { ITrack } from '@/types/track'
import MainLayout from '@/layouts/MainLayout';

const TrackPage = () => {
  const track: ITrack = { _id: "1", name: "Track 1", artist: "DDT", text: "kjlkjsdaas", listens: 5, audio: "http://localhost:5000/audio/3495.mp3", picture: "https://dictionary.cambridge.org/ru/images/thumb/poster_noun_002_28550.jpg?version=5.0.333", comments: [] };

  return (
    <MainLayout>
      TrackPage
    </MainLayout>
  )
}

export default TrackPage