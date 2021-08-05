import React, { FC, useState } from "react";
import { ScrollView } from "react-native";

import {
  Column,
  ArtistsList,
  TracksList,
  SearchInput,
  Row,
} from "src/components";
import { useEffect } from "react";

const Search: FC = () => {
  const [searchField, setSearchField] = useState<string>("");
  const [isClosed, setIsClosed] = useState<boolean>(false);

  const handleChange = (value: string) => {
    setSearchField(value);
  };

  useEffect(() => {}, [searchField, setSearchField, isClosed]);

  return (
    <ScrollView>
      <Column flex={1}>
        <Row>
          <SearchInput
            bg={"purple"}
            height={36}
            width="100%"
            placeholder="Procure uma música ou artista."
            returnKeyType="next"
            onClose={() => {
              handleChange("");
            }}
            value={searchField}
            color="white"
            onChangeText={handleChange}
          />
        </Row>

        <ArtistsList searching={searchField} />

        <TracksList searching={searchField} />
      </Column>
    </ScrollView>
  );
};

export default Search;
