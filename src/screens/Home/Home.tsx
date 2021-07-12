import React, { FC } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Column, ArtistsList } from "src/components";

const Home: FC = () => {
  return (
    <ScrollView>
      <Column alignItems="center" flex={1} justifyContent="center" p="16px">
        <ArtistsList searching="Iron Maiden" />
      </Column>
    </ScrollView>
  );
};

export default Home;
