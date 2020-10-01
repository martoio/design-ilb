import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import {Button, BUTTON_VARIANT} from './';

describe('Button', () => {
    it('should show an outline button when variant is not specified', () => {

        const tree = shallow(<Button variant={BUTTON_VARIANT.OUTLINE} />);

        expect(tree.prop('variant')).toBe(BUTTON_VARIANT.OUTLINE);
    });
})

