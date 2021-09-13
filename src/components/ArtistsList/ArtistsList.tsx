import React, { FC, useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";

import ArtistItem, { ArtistItemProps } from "./ArtistItem";
import { Column, Row } from "src/components";

import { getArtists } from "src/services";

import { SearchProps } from "src/components/TracksList";

const LIMIT_SEARCH_ARTISTS = 1;

const ArtistsListComponent: FC<SearchProps> = ({ searching }) => {
  const [artistsList, setArtistsList] = useState<ArtistItemProps[]>([]);
  console.log("test", searching);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searching) {
          const response = await getArtists(searching, LIMIT_SEARCH_ARTISTS);

          const artists = [
            ...response.message.body.artist_list.map(({ artist }) => {
              return {
                id: artist.artist_id,
                name: artist.artist_name,
                country: artist.artist_country,
                rating: artist.artist_rating,
                twitter: artist.artist_twitter,
                aliasList: artist.artist_alias_list,
              };
            }),
          ];

          setArtistsList(artists);
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
          {artistsList && (
            <FlatList
              renderItem={({ item }) => <ArtistItem {...item} />}
              data={artistsList}
            />
          )}
        </Row>
      )}
    </Column>
  );
};

export default ArtistsListComponent;
