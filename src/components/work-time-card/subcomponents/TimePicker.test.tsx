import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { TimePicker } from './TimePicker';

Enzyme.configure({ adapter: new Adapter() });

describe('TimePicker', () => {
  let label: string;
  let onChangeStub: () => void;
  let value: Date;

  beforeEach(() => {
    label = 'I am an awesome label.';
    onChangeStub = jest.fn();
    value = new Date();
  });

  it('should show the given label', () => {
    const wrapper = Enzyme.shallow(
      <TimePicker label={label} onChange={onChangeStub} />
    );
    expect(wrapper.find({ floatingLabelText: label })).toBeTruthy();
  });

  it('should show the given value', () => {
    const wrapper = Enzyme.shallow(
      <TimePicker label={label} onChange={onChangeStub} />
    );
    expect(wrapper.find({ value: value })).toBeTruthy();
  });

  it('should have auto-ok aktivated', () => {
    const wrapper = Enzyme.shallow(
      <TimePicker label={label} onChange={onChangeStub} />
    );
    expect(wrapper.find({ autoOk: true })).toBeTruthy();
  });

  it('should have set the time format to 24hrs', () => {
    const wrapper = Enzyme.shallow(
      <TimePicker label={label} onChange={onChangeStub} value={value} />
    );
    expect(wrapper.find({ format: '24hr' })).toBeTruthy();
  });
});
