import React, { FC } from "react";
import { ScrollView } from "react-native";

import { Column, Text } from "src/components";

const Artist: FC = () => {
  return (
    <ScrollView>
      <Column flex={1}>
        <Text
          textAlign="center"
          color="white"
          mt="66px"
          mb="10px"
          fontWeight={700}
          variant="regular"
        >
          Artist
        </Text>
      </Column>
    </ScrollView>
  );
};

export default Artist;
