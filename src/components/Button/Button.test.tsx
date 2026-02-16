import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

test('renders label and responds to click', async () => {
  const user = userEvent.setup()
  const onClick = vi.fn()
  render(<Button label="Click me" onClick={onClick} />)
  const btn = screen.getByRole('button', { name: 'Click me' })
  expect(btn).toBeInTheDocument()
  await user.click(btn)
  expect(onClick).toHaveBeenCalled()
})
