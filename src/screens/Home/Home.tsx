import React, { FC, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Column, Text, Button } from "src/components";
import { useEffect } from "react";

const Home: FC = () => {
  const [searchField, setSearchField] = useState<string>("");
  const navigation = useNavigation();

  useEffect(() => {}, [searchField, setSearchField]);

  return (
    <ScrollView>
      <Column px="10px">
        <Text
          textAlign="center"
          color="white"
          mt="66px"
          mb="10px"
          fontWeight={700}
          variant="bigger"
        >
          Search
        </Text>
        <Button
          text="Artistas ou músicas"
          variant="secondary"
          nameIcon="search"
          onPress={(): void => {
            navigation.push("Search");
          }}
        />
      </Column>
    </ScrollView>
  );
};

export default Home;
