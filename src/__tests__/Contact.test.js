import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

 
describe('<Contact />', () => {
    beforeEach(() => {
        render(<Contact />);
    });

    it('should have a title Contact Me', () => {
        expect(screen.queryByText(/Contact Me/i)).toBeInTheDocument();
    });

    it('should have a Phone contact info ', () => {
        expect(screen.queryByText(/Call Me On/i)).toBeInTheDocument();
        expect(screen.getByText(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]/g)).toBeTruthy();
    });

    it('should have a Email contact info', function () {
        expect(screen.queryByText(/Email/i)).toBeInTheDocument();
        expect(screen.queryByText(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)).toBeTruthy();
    })
});

