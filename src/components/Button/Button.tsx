import React, { FC, useMemo } from "react";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { variant, space, layout, marginLeft } from "styled-system";
import { useTheme } from "@react-navigation/native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

import { ColumnProps, Text, Row } from "src/components";

const PRIMARY = "primary";
const SECONDARY = "secondary";
const DISABLED = "disabled";
const TRANSPARENT = "transparent";

type ButtonVariants = "primary" | "secondary" | "disabled" | "transparent";

interface ButtonComponent extends ColumnProps, TouchableOpacityProps {
  text: string;
  nameIcon: string;
  variant?: ButtonVariants;
  disabled?: boolean;
  loading?: boolean;
}

interface StyledButton extends TouchableOpacityProps {
  variant?: ButtonVariants;
}

const Button: FC<ButtonComponent> = ({
  text,
  variant,
  disabled,
  loading,
  nameIcon,
  ...props
}) => {
  const { colors } = useTheme();

  const textColor = useMemo(() => {
    if (disabled) return colors.gray.n400;

    if (variant === PRIMARY) return colors.white;

    return colors.secondary;
  }, [variant, disabled, colors]);

  return (
    <StyledButton
      variant={disabled ? "disabled" : variant}
      disabled={disabled}
      my="5px"
      width="100%"
      {...props}
    >
      {loading && <ActivityIndicator size="small" color={textColor} />}

      {!loading && (
        <Row alignItems="center" justifyContent="center">
          {nameIcon && (
            <Icon
              name={nameIcon}
              style={{ marginRight: 10 }}
              size={14}
              color="black"
            />
          )}

          <Text variant="small" fontWeight={600} color={textColor}>
            {text}
          </Text>
        </Row>
      )}
    </StyledButton>
  );
};

const StyledButton: FC<StyledButton> = styled.TouchableOpacity(
  variant({
    variants: {
      [PRIMARY]: {
        backgroundColor: "primary",
        borderColor: "primary",
      },
      [SECONDARY]: {
        backgroundColor: "white",
        borderColor: "white",
      },
      [DISABLED]: {
        backgroundColor: "transparent",
        borderColor: "gray.n400",
      },
      [TRANSPARENT]: {
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
    },
  }),
  `
    padding: 8px;
    min-height: 39px;
    border-width: 1px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
  `,
  space,
  layout
);

Button.defaultProps = {
  variant: "primary",
};

export default Button;
