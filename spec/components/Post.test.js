import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Post from '../../client/src/components/Post';
import testData from '../testData';

Enzyme.configure({ adapter: new Adapter() });

const component = shallow(
  <Post
    post={testData.text}
    id={testData.text.id}
    addOrRemove={() => {}}
    favorite={false}
    type="text"
  />);

test('Post content should be text for type text', () => {
  expect(component.find('Text').length).toEqual(1);
});

test('Post component should have add button if not favorited', () => {
  expect(component.find('.add-favorite').length).toEqual(1);
});

test('Post component should have remove button if not favorited', () => {
  const favorited = shallow(
    <Post
      post={testData.text}
      id={testData.text.id}
      addOrRemove={() => {}}
      favorite={true}
      type="text"
    />);

  expect(favorited.find('.remove-favorite').length).toEqual(1);
});
