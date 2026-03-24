import { render, screen } from '@testing-library/react';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Writing from './components/writing/Writing';
import About from './components/about/About';


test('renders portfolio page', () => {
  render(<Portfolio />);
  const pageHeadline = screen.getByText('Portfolio');
  expect(pageHeadline).toBeInTheDocument();
});

test('renders contact page', () => {
  render(<Contact />);
  const pageHeadline = screen.getByText('Contact');
  expect(pageHeadline).toBeInTheDocument();
});

test('renders writing page', () => {
  render(<Writing />);
  const pageHeadline = screen.getByText('Writing');
  expect(pageHeadline).toBeInTheDocument();
});

test('renders about page', () => {
  render(<About />);
  const pageHeadline = screen.getByText('About');
  expect(pageHeadline).toBeInTheDocument();
});
