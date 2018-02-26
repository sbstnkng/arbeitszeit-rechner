import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { WorkTimeCard } from './WorkTimeCard';
import { ContentCard } from '../content-card';
import { TimePicker } from './subcomponents';

Enzyme.configure({ adapter: new Adapter() });

describe('WorkTimeCard', () => {
  let onArrive: () => void;
  let onLeave: () => void;
  let time: {};

  beforeEach(() => {
    onArrive = jest.fn();
    onLeave = jest.fn();
    time = {
      arrival: new Date(),
      leave: new Date()
    };
  });

  it('should render a <ContentCard /> component', () => {
    const wrapper = Enzyme.shallow(
      <WorkTimeCard time={time} onArrive={onArrive} onLeave={onLeave} />
    );
    expect(wrapper.find(ContentCard)).toHaveLength(1);
  });

  it('should render two <TimePicker /> components', () => {
    const wrapper = Enzyme.shallow(
      <WorkTimeCard time={time} onArrive={onArrive} onLeave={onLeave} />
    );
    expect(wrapper.find(TimePicker)).toHaveLength(2);
  });
});
