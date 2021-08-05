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

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searching) {
          const response = await getTracks(searching, LIMIT_SEARCH_MUSICS);
          const tracks = [
            await Promise.all([
              ...response?.message?.body?.track_list?.map(
                async ({ track }: any) => {
                  const trackHtml = await loadGraphicCards(
                    track.track_share_url
                  );
                  const rootNode = DomSelector(trackHtml);
                  const imagePath = rootNode.getElementsByClassName(
                    "banner-album-image-desktop"
                  )[0].children[0].text;

                  return {
                    id: track.track_id,
                    name: track.track_name,
                    album_name: track.album_name,
                    album_id: track.album_id,
                    artist_name: track.artist_name,
                    artist_id: track.album_id,
                    image_path: imagePath,
                  };
                }
              ),
            ]),
          ];

          setTracksList(tracks);
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    fetchData();
  }, [searching]);

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
