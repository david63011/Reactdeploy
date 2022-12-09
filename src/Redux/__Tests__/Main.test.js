import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Details from '../../Pages/Details';
import configureStore from '../../Redux/ConfigureStore';

test('Main renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore}>
        <Details />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
