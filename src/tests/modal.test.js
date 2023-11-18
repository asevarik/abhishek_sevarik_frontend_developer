import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal';

describe('Modal component', () => {
    const testData = {
        capsule_serial: 'ABC123',
        capsule_id: 'dragon1',
        details: 'Sample details',
        status: 'active',
        landings: 2,
        original_launch: '2022-01-01T00:00:00.000Z',
    };

    test('renders modal content and closes on button click', () => {
        render(<Modal data={testData} />);

        // Assert that the rendered content is correct
        expect(screen.getByText('ABC123')).toBeInTheDocument();
        expect(screen.getByText('dragon1')).toBeInTheDocument();
        expect(screen.getByText('Sample details')).toBeInTheDocument();
        expect(screen.getByText('active')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('1/1/2022')).toBeInTheDocument();
        expect(screen.getByText('Press ESC key or click on ✕ button to close')).toBeInTheDocument();

        // Mock showModal function
        document.getElementById = jest.fn().mockReturnValue({
            showModal: jest.fn(),
            close: jest.fn(),
        });

        // Click the close button
        fireEvent.click(screen.getByText('✕'));
    });
});
