import { fireEvent, render, screen } from '@testing-library/react';
import { container } from 'tsyringe';

import App from './App';

const context = describe;

test('App', () => {
  render(<App />);
});

describe('App', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  context('when press increase button once', () => {
    it('counter', () => {
      render(<App />);

      fireEvent.click(screen.getByText('Increase'));

      expect(screen.getAllByText('Count: 1')).toHaveLength(2);
    });
  });

  context('when press increase button twice', () => {
    it('counter', () => {
      render(<App />);

      fireEvent.click(screen.getByText('Increase'));
      fireEvent.click(screen.getByText('Increase'));

      expect(screen.getAllByText('Count: 2')).toHaveLength(2);
    });
  });
});
