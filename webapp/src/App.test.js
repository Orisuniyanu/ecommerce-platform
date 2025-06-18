import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Products heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/products/i);
  expect(headingElement).toBeInTheDocument();
});
