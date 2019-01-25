import styled, { css } from "styled-components";
import { ifProp, switchProp } from "styled-tools";

export const Root = styled.button`
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  border: none;
  outline: 0;
  box-shadow: none;
  background-color: transparent;
  color: currentColor;

  ${switchProp("appearance", {
    primary: css`
      background-color: #1e306e;
      color: #fff;
    `,
    secondary: css`
      background-color: #fff;
      color: #151515;
      box-shadow: 0 0.3125rem 0.9375rem 0 rgba(0, 0, 0, 0.05), 0 0 0 0.0625rem rgba(0, 0, 0, 0.03),
        0 0.0625rem 0 0 rgba(0, 0, 0, 0.05), 0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.01);
    `,
  })}

  ${ifProp(
    "isDisabled",
    css`
      background-color: #e6e6e6;
      color: #ccc;
      pointer-events: none;
    `,
  )}
`;

export default {};
