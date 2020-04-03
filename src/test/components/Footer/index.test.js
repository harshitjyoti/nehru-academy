import React from 'react';
import { Footer } from '../../../components';
import renderer from 'react-test-renderer';

describe('Snapshot ', () => {
  beforeAll(() => {  
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test('SnapShot test', () => {
    const component = renderer.create(
      <Footer count={5} onSearch={()=>console.log("hi")}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});