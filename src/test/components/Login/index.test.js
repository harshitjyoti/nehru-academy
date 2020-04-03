import React from 'react';
import { Login } from '../../../components';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      user: {
        userDetails: null,
        isProcessing: false,
        hasError: false,
        isUserFetched: true
      },
    });
    component = renderer.create(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  test('SnapShot test', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

})
