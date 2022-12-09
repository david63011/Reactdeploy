import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Details from '../../Pages/Details';
import configureStore from '../../Redux/ConfigureStore';
import { BrowserRouter as Router } from 'react-router-dom';

test('Main renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore}>
        <Router>
          <Details />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
