import React from 'react';
import { Pannel } from '../../../components';
import renderer from 'react-test-renderer';
import { planets } from "../../testData"
test('SnapShot test', () => {
  const component = renderer.create(
    <Pannel planets={planets.results}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});