import React from 'react';
import { ErrorBoundary } from '../../../components';
import renderer from 'react-test-renderer';

test('SnapShot test', () => {
  const component = renderer.create(
    <ErrorBoundary />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});