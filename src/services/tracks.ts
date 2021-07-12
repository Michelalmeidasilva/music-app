import fetchClient from "src/providers/fetchClient";

import { ArtistParams } from "src/services";
import { encodeQueryData } from "src/utils";

interface Track {
  track_id: number;
  track_name?: string;
  album_id?: number;
  album_name?: string;
  artist_name?: string;
  lyric: string;
}

export const getTrack: ArtistParams = (artist, page) =>
  fetchClient.get(
    "track.search?" + encodeQueryData({ q_artist: artist, page: page })
  );
