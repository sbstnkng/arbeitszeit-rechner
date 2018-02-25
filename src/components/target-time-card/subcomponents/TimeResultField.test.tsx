import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { TimeResultField } from './TimeResultField';

Enzyme.configure({ adapter: new Adapter() });

describe('TimeResultField', () => {
  let label: string;
  let value: Date;

  beforeEach(() => {
    label = 'I am an awesome label.';
    value = new Date();
  });

  it('should show the given label', () => {
    const wrapper = Enzyme.shallow(<TimeResultField label={label} />);
    expect(wrapper.find({ floatingLabelText: label })).toBeTruthy();
  });

  it('should show the given value', () => {
    const wrapper = Enzyme.shallow(<TimeResultField label={label} />);
    expect(wrapper.find({ value: value })).toBeTruthy();
  });

  it('should be disabled', () => {
    const wrapper = Enzyme.shallow(<TimeResultField label={label} />);
    expect(wrapper.find({ disabled: true })).toBeTruthy();
  });

  it('should have set the time format to 24hrs', () => {
    const wrapper = Enzyme.shallow(
      <TimeResultField label={label} value={value} />
    );
    expect(wrapper.find({ format: '24hr' })).toBeTruthy();
  });
});
