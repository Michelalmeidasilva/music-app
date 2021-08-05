import React, { FC } from "react";

import { TouchableOpacityProps, Image } from "react-native";
import styled from "styled-components/native";

import { useNavigation } from "@react-navigation/native";
import { Column, Text } from "src/components";
import { ColumnProps } from "../Column";

export interface TrackItemProps {
  id: number;
  name: string;
  album_name: string;
  album_id: number;
  artist_name: string;
  artist_id: number;
  image_path: string;
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

  return (
    <ItemContainer key={id} onPress={() => navigation.push("Music")}>
      <Column p="5px">
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
        <Text fontSize="14px" fontWeight={700} color="white">
          {name}
        </Text>

        <Text fontSize="12px" fontWeight={400} color="white">
          Song
        </Text>
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
