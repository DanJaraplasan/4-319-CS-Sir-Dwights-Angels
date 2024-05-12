import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './pages/Login.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login', () => {
  it('goes to register', () => {
    render(
      <Router>
        <Login />
      </Router>
    );
  });

  it('has underline when hovered', async () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const linkElement = screen.getByText("Don't have an Account?");
    expect(linkElement).toBeInTheDocument();

    // Verify initial style (no underline)
    expect(linkElement).not.toHaveClass('hover:underline');

    // Simulate mouse enter (hover) event
    fireEvent.mouseEnter(linkElement);

    // Wait for CSS transition or animation to complete
    await waitFor(() => {
      expect(linkElement).toHaveClass('hover:underline');
    });

    // Simulate mouse leave (end hover) event
    fireEvent.mouseLeave(linkElement);
    });
  });
