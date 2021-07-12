import React, { FC, useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";

import ArtistItem, { Artist } from "./ArtistItem";

import { getArtists } from "src/services";
import { Column, Row } from "src/components";

interface ArtistsListComponent {
  searching: string;
}

const ArtistsListComponent: FC<ArtistsListComponent> = ({ searching }) => {
  const [artistsList, setArtistsList] = useState<Artist[]>([]);
  const [loadingArtistsList, setLoadingArtistsList] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingArtistsList(true);
        if (searching) {
          const response = await getArtists(searching, 5);

          const artists = [
            ...response.message.body.artist_list.map(({ artist }) => {
              return {
                artist_id: artist.artist_id,
                artist_name: artist.artist_name,
                artist_country: artist.artist_country,
                artist_rating: artist.artist_rating,
                artist_twitter: artist.artist_twitter,
                artist_alias_list: artist.artist_alias_list,
              };
            }),
          ];

          setArtistsList(artists);
        }
      } catch (err) {
        console.log("err", err);
      } finally {
        setLoadingArtistsList(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Column alignItems="center" flex={1} justifyContent="center" p="16px">
      <Row alignItems="center" mb="10px">
        {loadingArtistsList ? (
          <ActivityIndicator color="green" size="small"></ActivityIndicator>
        ) : (
          <Column>
            {artistsList && (
              <FlatList
                renderItem={({ item }) => <ArtistItem {...item} />}
                data={artistsList}
              />
            )}
          </Column>
        )}
      </Row>
    </Column>
  );
};

export default ArtistsListComponent;
