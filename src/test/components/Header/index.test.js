import React from 'react';
import { Header } from '../../../components';
import renderer from 'react-test-renderer';

test('SnapShot test', () => {
  const component = renderer.create(
    <Header onSearch={()=> true} isProcessing={false} user={'Harhsit'} logout={()=> true}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});