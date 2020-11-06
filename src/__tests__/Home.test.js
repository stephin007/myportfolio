import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
 
describe('<Home />', () => {
    beforeEach(() => {
        render(<Home />);
    });

    it('should have a profile image', () => {
        expect(screen.getByRole('img', { name: /profile img/i })).toBeInTheDocument();
    });

    it('should have the name', () => {
        expect(screen.queryByText(/Stephin T Reji/i)).toBeInTheDocument();
    });
});

