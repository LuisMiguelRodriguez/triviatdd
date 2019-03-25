import React from 'react'
import { waitForElement, render, getByText, fireEvent, cleanup } from 'react-testing-library';
import axios from 'axios';
import App from './App';

afterEach(cleanup)

test('Should Render Header', () => {

    const { getByText } = render(<App />)
    expect(getByText('Computer Trivia')).toBeDefined();

})

const q1 = {
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
    question: "What does GHz stand for?"
}

const q2 = {
    correct_answer: "Objective-C"
    incorrect_answers: ["C++", "Ruby", "C#"],
    question: "The programming language &#039;Swift&#039; was created to replace what other programming language?"
}

const questions = [q1, q2];

describe('Questions to show', () => {
    afterEach(cleanup)
    beforeEach(() => {
        axios.get = jest.fn(() => Promise.resolve(comments))
    })
    test('It fetches comments and renders them to the page', async () => {
        render(<Comments />)
    })
})

// describe('Getting data from API', () => {
//     it('should contains name', async () => {
//       const { getByText } = render(<Hello name="Antony" />)
//       await waitForElement(() => getByText('Antony'))
//     })
//   })


