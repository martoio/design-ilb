import * as React from 'react';
import styled, {css} from 'styled-components';

import { StyledIcon } from '../Icon/styles';
import { DesignTheme } from '../../theme';

export enum BUTTON_SIZE {
    SM='6px 12px',
    MD='8px 16px',
    LG='11px 22px'
}

export enum BUTTON_COLOR {
    DEFAULT='default',
    PRIMARY='PRIMARY',
    SECONDARY='SECONDARY',
    DANGER='DANGER',
}

export interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disableShadow?: boolean;
    size?: BUTTON_SIZE;
    startIcon?: string;
    endIcon?: string;
    color?: BUTTON_COLOR;
    theme?: DesignTheme;
}

function getButtonColor(props: StyledButtonProps) {
    if(props.color && props.color !== BUTTON_COLOR.DEFAULT) {
        return '#fff';
    }

    return '#000';
}

function getButtonBackground(props: StyledButtonProps) {
    let color = css`
        background: #E0E0E0;
        &:hover {
            background: #AEAEAE;
        }
    `;

    switch (props.color) {
        case BUTTON_COLOR.PRIMARY:
            color = css`
                background: ${props.theme?.colors.primary};
                :hover{
                    background: #0039CB;
                }
            `;
            break;
        case BUTTON_COLOR.SECONDARY:
            color = css`
                background: ${props.theme?.colors.secondary};
                :hover{
                    background: #1C313A;
                }
            `;
            break;
        case BUTTON_COLOR.DANGER:
            color = css`
                background: ${props.theme?.colors.danger};
                :hover{
                    background: #9A0007;
                }
            `;
            break;
        default:
            break;
    }

    if (props.disabled) {
        color = css`
            &, &:hover {
                background: #E0E0E0;
            }
        `;
    }

    return color;
}

export const BaseButton = styled.button<StyledButtonProps>`
    ${getButtonBackground};
    display: flex;
    align-items: center;
    color: ${getButtonColor};
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    font-family: Noto Sans, Arial, Helvetica, sans-serif;
    padding: ${props => props.size ? props.size : BUTTON_SIZE.MD};
    border: none;
    box-shadow: ${props => props.disableShadow ? 'none' : css`0px 2px 3px rgba(51, 51, 51, 0.2)`};
    border-radius: 6px;
    transition: all 200ms ease-in-out;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};

    ${StyledIcon} {
        margin-left: ${props => props.endIcon ? '8px' : 0};
        margin-right: ${props => props.startIcon ? '8px' : 0};
        font-size: 20px;
    }
`;

export const OutlineButton = styled(BaseButton)`
    background: white;
    border: 1px solid #3D5AFE;
    color: #3D5AFE;

    &:hover, &:focus {
        background: rgba(41, 98, 255, 0.1);
    }
`;

export const TextButton = styled(BaseButton)`
    color: ${props => props.disabled ? '#9E9E9E' : '#3D5AFE'};
    background: none;
    box-shadow: none;

    &:hover, &:focus {
        background: ${props => props.disabled ? 'white' : css`rgba(41, 98, 255, 0.1)` };
    }
`;