import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../components/Card';

describe('Card component', () => {
    const testData = {
        capsule_serial: 'ABC123',
        capsule_id: 'dragon1',
        details: 'Sample details',
        status: 'active',
        landings: 2,
        original_launch: '2022-01-01T00:00:00.000Z',
    };

    test('renders card content and opens modal on button click', () => {
        render(<Card data={testData} />);

        // Assert that the rendered content is correct
        expect(screen.getByText('ABC123')).toBeInTheDocument();
        expect(screen.getByText('dragon1')).toBeInTheDocument();
        expect(screen.getByText('Sample details')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('1/1/2022')).toBeInTheDocument();

        // Mock showModal function
        document.getElementById = jest.fn().mockReturnValue({
            showModal: jest.fn(),
        });

        // Click the "More Info" button
        fireEvent.click(screen.getByText('More Info'));

    });
});
