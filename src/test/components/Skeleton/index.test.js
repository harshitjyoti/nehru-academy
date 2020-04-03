import React from 'react';
import { Skeleton } from '../../../components';
import renderer from 'react-test-renderer';

test('SnapShot test', () => {
  const component = renderer.create(
    <Skeleton />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});