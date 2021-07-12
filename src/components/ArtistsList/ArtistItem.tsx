import React, { FC } from "react";

import { Column, Text } from "src/components";

export interface Artist {
  artist_id: number;
  artist_name: string;
  artist_country: "US";
  artist_rating: number;
  artist_twitter: string;
  artist_alias_list: string[];
}

const ArtistItemComponent: FC<Artist> = ({
  artist_id,
  artist_name,
  artist_country,
  artist_rating,
  artist_twitter,
}) => (
  <Column key={artist_id}>
    <Text>{artist_name}</Text>
    <Text>{artist_country}</Text>
    <Text>{artist_rating}</Text>
    <Text>{artist_twitter}</Text>
  </Column>
);

export default ArtistItemComponent;
