import { bool, oneOf, node, shape } from "prop-types";

export const ButtonAppearances = oneOf(["default", "primary", "secondary"]);

export const ButtonProps = shape({
  /** The base styling to apply to the button. */
  appearance: ButtonAppearances,
  /** The content to render inside of the button. */
  children: node,
  /** Set if the button is disabled. */
  isDisabled: bool,
  /**
   * Set if the button is loading. When isLoading is true, text is hidden, and
   * a spinner is shown in its place. The button maintains the width that it
   * would have if the text were visible.
   */
  isLoading: bool,
}).isRequired;
