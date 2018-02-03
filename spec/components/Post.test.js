import React from 'react';
import { shallow } from 'enzyme';
import Post from '../../client/src/components/Post';

beforeEach(() => {
  const component = shallow(<Post />);
});

test('Post', () => {
  expect(component).toBe.defined;
});
