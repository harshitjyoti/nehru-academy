import React from 'react';
import { ErrorComp } from '../../../components';
import renderer from 'react-test-renderer';

test('SnapShot test', () => {
  const component = renderer.create(
    <ErrorComp />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});