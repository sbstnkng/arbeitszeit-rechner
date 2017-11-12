import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { ContentCard } from './ContentCard';
import { CardHeader, CardText } from 'material-ui';

Enzyme.configure({ adapter: new Adapter() });

describe('ContentCard', () => {
  let title: string;

  beforeEach(() => {
    title = 'I am an awesome title.';
  });

  it('should render a <CardHeader /> component', () => {
    const wrapper = Enzyme.shallow(<ContentCard title={title} />);
    expect(wrapper.find(CardHeader)).toHaveLength(1);
  });

  it('should render a <CardText /> component', () => {
    const wrapper = Enzyme.shallow(<ContentCard title={title} />);
    expect(wrapper.find(CardText)).toHaveLength(1);
  });

  it('should send the title to the <AppBar /> component', () => {
    const wrapper = Enzyme.shallow(<ContentCard title={title} />);
    expect(wrapper.find(CardHeader).props().title).toBe(title);
  });

  it('should contain the given child component', () => {
    const content = (
      <ContentCard title={title}>
        <div id="childComponent" />
      </ContentCard>
    );
    const wrapper = Enzyme.shallow(content);
    expect(wrapper.find('#childComponent')).toHaveLength(1);
  });
});
