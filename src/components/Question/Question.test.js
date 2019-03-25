
import React from 'react'
import { waitForElement, render, getByText, fireEvent, cleanup } from 'react-testing-library';
import Question from './Question';

afterEach(cleanup)
describe('Question', () => {
    test('it renders a question', () => {
        // Arrange
        const props = {
            currentQ: 'Whats the best programming language?'
        }
        // Act
        const { getByText } = render(<Question {...props} />)
        // Assert
        const answer = getByText(props.currentQ )
        expect(answer).toBeDefined()
    })
})