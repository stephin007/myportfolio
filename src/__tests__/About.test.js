import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';
 
describe('<About />', () => {
    beforeEach(() => {
        render(<About />);
    });

    it('should have a title and a subtitle', () => {
        expect(
            screen.getByRole('heading', {
                name: /about me/i
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole('heading', {
                name: /communication is the key/i
            })
        ).toBeInTheDocument();
    });

    it('should have Personal Information section', () => {
        expect(
            screen.getByRole('heading', {
                name: /personal information/i
            })
        ).toBeInTheDocument();
    });

    it('should have Work Experience section', () => {
        expect(
            screen.getByRole('heading', {
                name: /work experience/i
            })
        ).toBeInTheDocument();
    });

    it('should have Education section', () => {
        expect(
            screen.getByTestId('section--eductaion')
        ).toBeInTheDocument();
    });
});