import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { ActualTimeCard } from './ActualTimeCard';
import { TextResultField } from './subcomponents';
import { ContentCard } from '../content-card';

Enzyme.configure({ adapter: new Adapter() });

describe('ActualTimeCard', () => {
  let actualTime: {};

  beforeEach(() => {
    actualTime = {
      time: new Date(),
      overtime: new Date()
    };
  });

  it('should render a <ContentCard /> component', () => {
    const wrapper = Enzyme.shallow(<ActualTimeCard actualTime={actualTime} />);
    expect(wrapper.find(ContentCard)).toHaveLength(1);
  });

  it('should render two <TextResultField /> components', () => {
    const wrapper = Enzyme.shallow(<ActualTimeCard actualTime={actualTime} />);
    expect(wrapper.find(TextResultField)).toHaveLength(2);
  });
});
