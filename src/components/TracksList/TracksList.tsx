import React, { FC, useEffect, useState } from "react";
import DomSelector from "react-native-dom-parser";

import { FlatList } from "react-native";

import { Column, Row } from "src/components";

import TrackItem, { TrackItemProps } from "./TrackItem";

import { getTracks } from "src/services";

export interface SearchProps {
  searching: string;
}

const LIMIT_SEARCH_MUSICS = 3;

async function loadGraphicCards(searchUrl: string) {
  const response = await fetch(searchUrl); // fetch page
  return response.text();
}

const TracksList: FC<SearchProps> = ({ searching }) => {
  const [tracksList, setTracksList] = useState<TrackItemProps[]>([]);

  console.log("test", searching);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searching) {
          const response = await getTracks(searching, LIMIT_SEARCH_MUSICS);
          const tracks = [
            ...response?.message?.body?.track_list?.map(({ track }) => {
              return {
                id: track.track_id,
                name: track.track_name,
                album_name: track.album_name,
                album_id: track.album_id,
                artist_name: track.artist_name,
                artist_id: track.album_id,
              };
            }),
          ];

          setTracksList(tracks);
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    fetchData();
  }, [tracksList]);

  return (
    <Column alignItems="center" flex={1} justifyContent="center">
      {searching !== "" && (
        <Row alignItems="center">
          {tracksList && (
            <FlatList
              renderItem={({ item }) => <TrackItem {...item} />}
              data={tracksList}
            />
          )}
        </Row>
      )}
    </Column>
  );
};

export default TracksList;
