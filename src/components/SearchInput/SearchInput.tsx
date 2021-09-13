import React, { FC, useState } from "react";
import { Row, Column } from "src/components";
import styled from "styled-components";
import { TextInputProps, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { ColumnProps } from "../Column";

interface SearchInputComponentProps
  extends Omit<TextInputProps, "style">,
    ColumnProps {
  label?: string;
  onClose(): void;
  error?: string;
  callToAction?(): void;
}

interface StyledInputProps extends TextInputProps {
  error?: string;
  type?: string;
}

interface StyledColumnProps extends ColumnProps {
  isFocused: boolean;
  error?: string;
  editable?: boolean;
  multiline?: boolean;
}

const SearchInputComponent: FC<SearchInputComponentProps> = ({
  multiline,
  editable = true,
  secureTextEntry = false,
  label,
  error,
  placeholder,
  testID,
  value,
  autoCapitalize = "none",
  callToAction,
  onChangeText,
  keyboardType,
  onClose,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer
      error={error}
      isFocused={isFocused}
      editable={editable}
      multiline={multiline}
      {...rest}
    >
      <Row pl="5px" justifyContent="center" alignItems="center" flex={1}>
        {/* <Icon name="search" size={14} color="white" /> */}

        <Column ml="5px" width="88%">
          <StyledInput
            editable={editable}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCapitalize={autoCapitalize}
            kerboardType="search"
            returnKeyType="search"
            color="white"
            value={value}
            onFocus={() => setIsFocused(true)}
            onChangeText={onChangeText}
            onBlur={() => setIsFocused(false)}
            testID={testID}
          />
        </Column>

        <TouchableOpacity onPress={onClose}>
          <Icon name="close" size={14} color={"white"} />
        </TouchableOpacity>
      </Row>
    </InputContainer>
  );
};

const InputContainer = styled.View<StyledColumnProps>`
  ${({ theme: { colors }, error, editable, isFocused, multiline, ...rest }) => {
    const disabledStyle = `
      background-color: ${colors.purple}
    `;

    const textAreaStyle = `
      height: 90px;
    `;

    const errorStyle = `
      border-color: ${colors.error};
    `;

    return `
      align-items: center;
      background-color: ${colors.gray.n700};
      flex-direction: row;
      min-height: 55px;

      ${error ? errorStyle : ""}
      ${!editable ? disabledStyle : ""}
      ${multiline ? textAreaStyle : ""}
    `;
  }}
`;

const StyledInput = styled.TextInput.attrs(
  ({ theme: { colors }, multiline, ...rest }) => ({
    autoCapitalize: "none",
    placeholderTextColor: colors.white,
    ...rest,
  })
)<StyledInputProps>`
  font-size: 14px;
  font-weight: 600;
`;
export default SearchInputComponent;

// const SearchInputStyle = styled`

// `;
