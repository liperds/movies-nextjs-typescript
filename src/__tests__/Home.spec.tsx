import { screen, render } from '@testing-library/react'

import Home from '@pages/index'

describe('Home Tests', () => {
  it('Renders correctly', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 2, name: /Hello, WOrld!/i }))
  })
})
