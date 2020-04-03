import React from 'react';
import Blank from '../../../components/Blank';
import renderer from 'react-test-renderer';

test('SnapShot test', () => {
  const component = renderer.create(
    <Blank />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});