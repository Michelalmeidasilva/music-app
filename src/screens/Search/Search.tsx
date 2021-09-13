import React, { FC, useState, useCallback } from "react";
import { ScrollView } from "react-native";

import {
  Column,
  ArtistsList,
  TracksList,
  SearchInput,
  Row,
  Button,
} from "src/components";
import { useEffect } from "react";

const Search: FC = () => {
  const [searchField, setSearchField] = useState<string>("");
  const [valueSearch, setValueSearch] = useState<string>("");
  const [isClosed, setIsClosed] = useState<boolean>(false);

  const handleChange = (value: string) => {
    setSearchField(value);
  };

  const handleSearch = useCallback((): void => {
    try {
      setValueSearch(searchField);
      console.log("aaa", valueSearch);
    } catch (err) {
      console.log("err", err);
    } finally {
    }
  }, [valueSearch]);

  console.log("a");

  useEffect(() => {}, [valueSearch, isClosed]);

  return (
    <ScrollView>
      <Column flex={1}>
        <Row>
          <SearchInput
            bg={"purple"}
            height={36}
            width="100%"
            placeholder="Procure uma música ou artista."
            onClose={() => {
              setIsClosed(true);
              handleChange("");
            }}
            value={searchField}
            color="white"
            onSubmitEditing={handleSearch}
            onChangeText={handleChange}
          />
        </Row>

        {/* <ArtistsList searching={searchField} /> */}

        <TracksList searching={valueSearch} />
      </Column>
    </ScrollView>
  );
};

export default Search;
