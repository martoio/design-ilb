import React from "react";
import * as S from '@storybook/addon-essentials'
import Button, {BUTTON_VARIANT, BUTTON_SIZE} from ".";

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
