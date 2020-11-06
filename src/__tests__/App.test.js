import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import ReactGa from 'react-ga';

import App from '../App';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-ga');
jest.mock('../components/Home', () => () => 'Home-Component');
jest.mock('../components/Navbar', () => () => 'Navbar-Component');

describe('<App />', () => {
  it('renders without crashing', () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <App />
        </Router>
      );
      expect(screen.getByText(/Navbar-Component/i)).toBeInTheDocument();
      expect(screen.getByText(/Home-Component/i)).toBeInTheDocument();
  });

  it('should call ReactGa.initialize()', () => {
    render(<App />);
    expect(ReactGa.initialize).toBeCalled();
  });

  it('should call ReactGa.pageview()', () => {
    render(<App />);
    expect(ReactGa.pageview).toBeCalled();
  });
});
