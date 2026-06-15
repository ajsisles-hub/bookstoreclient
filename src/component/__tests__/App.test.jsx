import React from 'react'
import { render } from '@testing-library/react'
import { App } from '../App'
import renderWithRedux from '../../util/testUtil';

describe('App Component ', () => {
  it('renders without crashing', () => {
    const { asFragment } = renderWithRedux(<App />, {});
    expect(asFragment()).toMatchSnapshot();
  })
})