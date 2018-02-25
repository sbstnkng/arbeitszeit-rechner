import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { TargetTimeCard } from './TargetTimeCard';
import { TimeResultField } from './subcomponents';
import { ContentCard } from '../content-card';

Enzyme.configure({ adapter: new Adapter() });

describe('TargetTimeCard', () => {
  let targetTime: {
    normal: Date;
    max: Date;
  };

  beforeEach(() => {
    targetTime = {
      normal: new Date(),
      max: new Date()
    };
  });

  it('should render a <ContentCard /> component', () => {
    const wrapper = Enzyme.shallow(<TargetTimeCard targetTime={targetTime} />);
    expect(wrapper.find(ContentCard)).toHaveLength(1);
  });

  it('should render two <TimeResultField /> components', () => {
    const wrapper = Enzyme.shallow(<TargetTimeCard targetTime={targetTime} />);
    expect(wrapper.find(TimeResultField)).toHaveLength(2);
  });
});
