import * as React from "react";
import {StyledComponent} from 'styled-components';
import {BaseButton, OutlineButton, TextButton, StyledButtonProps} from './styles';
import Icon from "../Icon";

export { BUTTON_SIZE } from './styles';

export enum BUTTON_VARIANT {
    DEFAULT, OUTLINE, TEXT
}

interface ButtonProps extends StyledButtonProps {
    variant?: BUTTON_VARIANT;
}

export const Button = function Button(props: ButtonProps) {
    let ButtonComponent: StyledComponent<"button", any, StyledButtonProps> = BaseButton;

    if(props.variant === BUTTON_VARIANT.OUTLINE) ButtonComponent = OutlineButton;

    if(props.variant === BUTTON_VARIANT.TEXT) ButtonComponent = TextButton;

    return (
        <ButtonComponent {...props}>
            {props.startIcon ? <Icon icon={props.startIcon} /> : ''}
            {props.children}
            {props.endIcon ? <Icon icon={props.endIcon} /> : ''}
        </ButtonComponent>
    );
}

export default Button;
