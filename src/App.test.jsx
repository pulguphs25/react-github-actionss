
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('React application', () => {
  it('displays the welcome heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1 })
    ).toBeInTheDocument()
  })
})
