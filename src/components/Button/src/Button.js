import React from "react";
import { ButtonProps } from "./types";
import { Root } from "./styled";

export const defaultProps = {
  appearance: "default",
  children: null,
  isDisabled: false,
  isLoading: false,
};

const Button = ({ appearance, children, isDisabled, isLoading }) => {
  const props = { appearance, isDisabled };
  return <Root {...props}>{isLoading ? `Loading...` : children}</Root>;
};

Button.propTypes = ButtonProps;
Button.defaultProps = defaultProps;

export default Button;
