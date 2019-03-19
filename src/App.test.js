import React from 'react'
import {render,getByText, fireEvent} from 'react-testing-library'
import App from './App';

test('Should Render Header', () => {

    const {getByText} = render(<App/>)
    expect(getByText('Computer Trivia')).toBeDefined();

})



