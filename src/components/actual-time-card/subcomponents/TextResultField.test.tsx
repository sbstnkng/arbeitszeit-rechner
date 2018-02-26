import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { TextResultField } from './TextResultField';

Enzyme.configure({ adapter: new Adapter() });

describe('TextResultField', () => {
  let label: string;
  let value: Date;
  let expected: string;

  beforeEach(() => {
    label = 'I am an awesome label.';
    value = new Date();
    value.setUTCHours(8, 34);
    expected = '8.57h (08:34)';
  });

  it('should show the given label', () => {
    const wrapper = Enzyme.shallow(
      <TextResultField label={label} value={value} />
    );
    expect(wrapper.find({ floatingLabelText: label })).toHaveLength(1);
  });

  it('should be disabled', () => {
    const wrapper = Enzyme.shallow(
      <TextResultField label={label} value={value} />
    );
    expect(wrapper.find({ disabled: true })).toHaveLength(1);
  });

  it('should show the given value', () => {
    const wrapper = Enzyme.shallow(
      <TextResultField label={label} value={value} />
    );
    expect(wrapper.find({ value: expected })).toHaveLength(1);
  });
});
