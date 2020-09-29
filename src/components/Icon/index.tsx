import * as React from 'react';

import { StyledIcon } from './styles';

interface IconProps {
    icon: string
}

export const Icon = function Icon(props: IconProps) {
    return (
        <StyledIcon {...props} className={'material-icons'}>
            {props.icon}
        </StyledIcon>
    )
};

export default Icon;
