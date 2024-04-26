import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from './App';
import './localization/config';

test('renders learn react link', () => {
  render(<App />);

  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(screen.getByText('App made by Amit')).toBeDefined();
});
