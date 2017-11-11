import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Title } from './Title';
import AppBar from 'material-ui/AppBar';

Enzyme.configure({ adapter: new Adapter() });

describe('Title', () => {
  let title: string;

  beforeEach(() => {
    title = 'I am an awesome title.';
  });

  it('should render a <AppBar /> component', () => {
    const wrapper = Enzyme.shallow(<Title title={title} />);
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });

  it('should send the title to the <AppBar /> component', () => {
    const wrapper = Enzyme.shallow(<Title title={title} />);
    expect(wrapper.find(AppBar).props().title).toBe(title);
  });
});
