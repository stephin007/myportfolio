import React from 'react';
import { render, screen } from '@testing-library/react';
import Project from '../components/Project';
import ProjectData from '../data/ProjectData';

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty;
 
describe('<Project />', () => {
    beforeEach(() => {
        render(<Project />);
    });

    it('should have a title', () => {
         if (hasOwnProperty.call(ProjectData, 'byID')) {
            const numberOfProjects = Object.keys(ProjectData.byID).length;
            expect(screen.getAllByTestId("portfolio-item").length).toBe(numberOfProjects)
         }
    });
});