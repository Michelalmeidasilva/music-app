import React, { FC } from "react";
import { useEffect } from "react";
import { ScrollView } from "react-native";

import { Button, Column, Text } from "src/components";

import { saveExample, downloadMusic, downloadFile } from "src/utils";

const Music: FC = () => {
  useEffect(() => {
    // const syncSong = async () => {
    //   await downloadMusic("");
    // };
    // syncSong();
  });

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
          Music
        </Text>

        <Button text="test" onPress={downloadFile}></Button>
      </Column>
    </ScrollView>
  );
};

export default Music;
