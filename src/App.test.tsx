import { render, screen } from '@testing-library/react';
import App from 'App';
import React from 'react';

test('renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/hackernews/i);
  expect(linkElement).toBeInTheDocument();
});
