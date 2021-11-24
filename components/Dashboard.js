import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
import Right from './Right';
import SpotifyWebApi from 'spotify-web-api-node';
import { useRecoilState } from 'recoil';
import { playingTrackState } from '../atoms/PlayerAtom';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

const Dashboard = () => {
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };
  return (
    <main>
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right />
    </main>
  );
};

export default Dashboard;
