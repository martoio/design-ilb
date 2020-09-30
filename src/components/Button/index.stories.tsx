import React from "react";
import {Button, BUTTON_VARIANT, BUTTON_SIZE} from ".";
import { BUTTON_COLOR } from "./styles";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: [BUTTON_VARIANT.DEFAULT, BUTTON_VARIANT.OUTLINE, BUTTON_VARIANT.TEXT]
      }
    },
  },
};

export const Primary = () => {
  return (
    <>
      <Button>Demo</Button><br></br><br></br>
      <Button size={BUTTON_SIZE.SM}>Demo</Button><br></br><br></br>
      <Button size={BUTTON_SIZE.LG}>Demo</Button><br></br><br></br>
    </>
  );
}

export const Outline = () => <Button variant={BUTTON_VARIANT.OUTLINE}>Demo</Button>;

export const Text = () => <Button variant={BUTTON_VARIANT.TEXT}>Demo</Button>;

export const DisabledShaddow = () => <Button disableShadow={true}>No drop shadow</Button>

export const DiasbledButton = () => <Button disabled={true}>Disabled</Button>

export const DiasbledTextButton = () => <Button variant={BUTTON_VARIANT.TEXT} disabled={true}>Demo</Button>

export const StartIconButton = () => <Button startIcon={'article'}>Demo</Button>;

export const EndIconButton = () => <Button endIcon={'local_grocery_store'}>Demo</Button>;

export const PrimaryColorButton = () => <Button color={BUTTON_COLOR.PRIMARY} endIcon={'local_grocery_store'}>Demo</Button>;
export const SecondaryColorButton = () => <Button color={BUTTON_COLOR.SECONDARY} endIcon={'local_grocery_store'}>Demo</Button>;
export const DangerColorButton = () => <Button color={BUTTON_COLOR.DANGER} endIcon={'local_grocery_store'}>Demo</Button>;
