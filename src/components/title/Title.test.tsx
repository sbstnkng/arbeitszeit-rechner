import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Title } from './Title';
import AppBar from 'material-ui/AppBar';

Enzyme.configure({ adapter: new Adapter() });

describe('title', () => {
  it('should render a <AppBar /> component', () => {
    const title: string = 'Imagine here an awesome title.';
    const wrapper = Enzyme.shallow(<Title title={title} />);
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });
});
