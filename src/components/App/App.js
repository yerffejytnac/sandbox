import React from "react";
import { Root } from "./styled";
import Button from "../Button";

const App = () => (
  <Root>
    <Button>Default</Button>
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button isDisabled>Disabled</Button>
  </Root>
);

export default App;
