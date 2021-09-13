import React, { FC } from "react";

import { TouchableOpacityProps, Image } from "react-native";
import styled from "styled-components/native";

import { useNavigation } from "@react-navigation/native";
import { Column, Row, Text } from "src/components";
import { ColumnProps } from "../Column";
import { truncateString } from "src/utils";

const MAX_TEXT_LENGHT = 30;
export interface TrackItemProps {
  id: number;
  name: string;
  album_name?: string;
  album_id?: number;
  artist_name?: string;
  artist_id?: number;
  image_path?: string;
}

const TrackItemComponent: FC<TrackItemProps> = ({
  id,
  name,
  album_name,
  album_id,
  artist_name,
  artist_id,
  image_path,
}): JSX.Element => {
  const navigation = useNavigation();
  console.log(
    JSON.stringify(
      {
        id,
        name,
        album_name,
        album_id,
        artist_name,
        artist_id,
        image_path,
      },
      null,
      2
    )
  );

  return (
    <ItemContainer key={id} onPress={() => navigation.push("Music")}>
      <Column p="5px" style={{ elevation: 1, backgroundColor: "grey" }}>
        <Image
          source={{
            uri:
              image_path ||
              "http://distribuidorajhs.com.br/wp-content/uploads/2019/05/sem-foto.gif",
          }}
          style={{ width: 40, height: 40, borderRadius: 40 }}
        />
      </Column>
      <Column pl="10px">
        <Row>
          <Column width="150px">
            <Text fontSize="12px" fontWeight={700} color="white">
              {truncateString(name, MAX_TEXT_LENGHT)}
            </Text>
            <Text fontSize="12px" fontWeight={400} color="white">
              Song
            </Text>
          </Column>

          <Column>
            <Text fontSize="12px" fontWeight={500} color="white">
              {album_name}
            </Text>

            <Text width={100} fontSize="12px" fontWeight={400} color="white">
              Album
            </Text>
          </Column>
        </Row>
      </Column>
    </ItemContainer>
  );
};

interface ItemContainerProps extends ColumnProps, TouchableOpacityProps {}

const ItemContainer: FC<ItemContainerProps> = styled.TouchableOpacity<ItemContainerProps>`
  flex-direction: row;
  width: 100%;
  padding: 10px;
`;

export default TrackItemComponent;
