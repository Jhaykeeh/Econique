import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Econique brand in header', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Econique/i);
  expect(brandElements.length).toBeGreaterThan(0);
});

test('renders homepage hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to/i);
  expect(heading).toBeInTheDocument();
});

test('renders navigation links when not authenticated', () => {
  render(<App />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Login/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Register/i).length).toBeGreaterThan(0);
});
