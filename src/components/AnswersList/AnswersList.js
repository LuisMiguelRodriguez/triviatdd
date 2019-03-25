import React from 'react';
import Answers from '../Answers';

const AnswersList = props => {
    const { answers } = props;
    return (
        <>
            {
                answers.map(answer => <Answers answer={answer} />)
            }
        </>
    );
}

export default AnswersList;