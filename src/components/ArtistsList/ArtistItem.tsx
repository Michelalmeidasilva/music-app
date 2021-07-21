import React, { FC } from "react";

import { TouchableOpacityProps, Image } from "react-native";
import styled from "styled-components/native";

import { useNavigation } from "@react-navigation/native";
import { Column, Text } from "src/components";
import { ColumnProps } from "../Column";

export interface ArtistItemProps {
  id: number;
  name: string;
  country?: string;
  rating?: number;
  twitter?: string;
  image_path?: string;
  aliasList?: string[];
}

const ArtistItemComponent: FC<ArtistItemProps> = ({
  id,
  name,
  twitter,
  image_path,
}): JSX.Element => {
  const navigation = useNavigation();

  return (
    <ItemContainer key={id} onPress={() => navigation.push("Artist")}>
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
          Artist
        </Text>

        <Text>{twitter}</Text>
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

export default ArtistItemComponent;
