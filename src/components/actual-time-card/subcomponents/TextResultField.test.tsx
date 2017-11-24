import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { TextResultField } from './TextResultField';

Enzyme.configure({ adapter: new Adapter() });

describe('TextResultField', () => {
  let label: string;
  let value: string;

  beforeEach(() => {
    label = 'I am an awesome label.';
    value = '7.8h (8665)';
  });

  it('should show the given label', () => {
    const wrapper = Enzyme.shallow(<TextResultField label={label} />);
    expect(wrapper.find({ floatingLabelText: label })).toBeTruthy();
  });

  it('should show the given value', () => {
    const wrapper = Enzyme.shallow(<TextResultField label={label} />);
    expect(wrapper.find({ value: value })).toBeTruthy();
  });

  it('should be disabled', () => {
    const wrapper = Enzyme.shallow(<TextResultField label={label} />);
    expect(wrapper.find({ disabled: true })).toBeTruthy();
  });
});
