import React from 'react';
import { render, screen } from '@testing-library/react';
import MainBanner from '../components/MainBanner';

describe('MainBanner component', () => {
    test('renders main banner content', () => {
        render(<MainBanner />);

        // Assert that the rendered content is correct
        expect(screen.getByText('SpaceX Explorer')).toBeInTheDocument();
        expect(screen.getByText('Embark on an Interstellar Journey')).toBeInTheDocument();
        expect(screen.getByText('Explore')).toBeInTheDocument();
    });
});
