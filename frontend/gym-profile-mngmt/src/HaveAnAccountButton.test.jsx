import {describe, it, expect} from "vitest"
import { render, screen } from '@testing-library/react'
import Register from './pages/Register.jsx';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';


    describe('Register', () => {
        it('goes to register', () => {
            render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
            );
        })
        it('has underline when hovered', async () => {
            render(<Register />);
            const element = screen.getByText(/Already have an account\?/);
              expect(element).toBeInTheDocument();
        
              // Verify initial style (no underline)
            expect(linkElement).not.toHaveClass('hover:underline');
        
            // Simulate mouse enter (hover) event
            fireEvent.mouseEnter(linkElement);
        
            // Simulate mouse leave (end hover) event
            fireEvent.mouseLeave(linkElement);
        
            // Wait for CSS transition or animation to complete
            await waitFor(() => {
              expect(linkElement).not.toHaveClass('hover:underline');
            });
          });
    })