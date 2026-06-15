import React from 'react';
import {render} from '@testing-library/react';
import Layout from '../layout/Layout';

describe('Layout', () => {

    it('renders children correctly', () => {
        const { getByText } = render(
            <Layout>
                <div>Test Component</div>
            </Layout>
        );

        expect(getByText('Test Component')).toBeInTheDocument();
    });

});