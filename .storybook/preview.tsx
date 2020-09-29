// .storybook/preview.js

import * as React from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';


import { Theme } from '../src/theme';

export const decorators = [
    (Story: Story) => <ThemeProvider theme={Theme}><Story/></ThemeProvider>
];