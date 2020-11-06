import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import Navbar from '../components/Navbar';
 
describe('<Navbar />', () => {
    beforeEach(() => {
        render(<MemoryRouter><Navbar /></MemoryRouter>);
    });

    it('should have a logo img', () => {
        expect(
            screen.getByRole('img', {
                name: /logo/i
            })
        ).toBeInTheDocument();
    });

    it('should have required navigation links', () => {
        expect(
            screen.getByRole('link', {
                name: /(?:^|\W)home(?:$|\W)/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('link', {
                name: /about/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('link', {
                name: /project/i
            })
        ).toBeInTheDocument();
    });

    it('should have a burger-menu', () => {
        const burgerMenu = screen.getByRole('button', {
            name: /main menu/i
        });

        expect(burgerMenu).toBeInTheDocument();
    });

    it('should burger-menu be clickable and toggle the navbar', () => {
        const burgerMenu = screen.getByRole('button', {
            name: /main menu/i
        });
        expect(screen.getByTestId('navbar')).not.toHaveAttribute('class', 'showNav')
        userEvent.click(burgerMenu);
        expect(screen.getByTestId('navbar')).toHaveAttribute('class', 'showNav')
    });

    it('should have a link homepage', () => {
        const homepageLink =  screen.getByRole('link', {
            name: /homepage/i
        });

        expect(homepageLink).toBeInTheDocument();
    });

    it('should have a clickable link homepage that close the navbar', () => {
        const homepageLink =  screen.getByRole('link', {
            name: /homepage/i
        });
        const burgerMenu = screen.getByRole('button', {
            name: /main menu/i
        });

        //open the navbar and check if is open
        userEvent.click(burgerMenu);
        expect(screen.getByTestId('navbar')).toHaveAttribute('class', 'showNav')

        userEvent.click(homepageLink);
        expect(screen.getByTestId('navbar')).not.toHaveAttribute('class', 'showNav')
    });
});

