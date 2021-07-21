import React, { FC, useEffect, useState } from "react";

import { FlatList, ActivityIndicator } from "react-native";

import { Column, Row, Text } from "src/components";

import MusicItem, { MusicItemProps } from "./MusicItem";

import { getArtists } from "src/services";

export interface SearchProps {
  searching: string;
}

const LIMIT_SEARCH_MUSICS = 3;

const MusicsList: FC<SearchProps> = ({ searching }) => {
  const [musicsList, setMusicsList] = useState<MusicItemProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searching) {
          const response;

          const musics = [
            ...response.message.body.artist_list.map(({ artist }) => {
              return {
                id: artist.artist_id,
                name: artist.artist_name,
                image_path: "",
              };
            }),
          ];

          setMusicsList(musics);
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
          {musicsList && (
            <FlatList
              renderItem={({ item }) => <MusicItem {...item} />}
              data={musicsList}
            />
          )}
        </Row>
      )}
    </Column>
  );
};

export default MusicsList;
