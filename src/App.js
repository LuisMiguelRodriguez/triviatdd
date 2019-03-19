import React, { Component } from 'react';
import Question from './components/Question'
import { ProgressBar, Container, Row, Col, Image, Button, Jumbotron } from 'react-bootstrap'

/**
 * 
 * App Component
 */

class App extends Component {

    /**
     * 
     * 
     * @property { Array}   questions - Array of questions from API Call
     * @property { Number } position  - Number that represent position of current questions
     * @property { String } currentQ  - Current Question
     * @property { String } currentA  - Current answer for current question
     * @property { Array } currentAnswers - An Array of current answers to choise from
     * @property { Boolean } isGameOn - A boolean to indicate if the game has started
     */
    state = {
        questions: [],
        position: 0,
        currentQ: '',
        currentA: '',
        currentAnswers: [],
        isGameOn: false
    }


    /**
     * @memberof App
     * @description Makes an api call to retreive trivia questions.
     */
    componentDidMount() {

        fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
            .then(res => res.json())
            .then(({ results }) => this.setState({ questions: results }));

    }

    /**
     * @function updateQuestion 
     * @description A function that updates question to next question
     * @memberof App
     */
    updateQuestion = () => {
        const { questions, position } = this.state;

        this.setState({
            currentQ: questions[position].question,
            currentA: questions[position].correct_answer,
            currentAnswers: [...questions[position].incorrect_answers, questions[position].correct_answer]
        }, this.updatePosition);

    }
    /**
     * 
     * @method updatePosition
     * @description  Increments position by one.
     * @memberof App
     */
    updatePosition = () => {
        let position = this.state.position;
        console.log(this.state.questions.length)
        console.log(this.state.position)
        if (position >= this.state.questions.length - 1) {

            console.log('timer stopped')
            this.stopTimer();
        } else {
            console.log('Position', position, 'Still running our function')
            console.log(position)
            position += 1;
            this.setState({ position, isGameOn: true });

        }
    }
    /**
     *
     * @function startTimer
     * @description Starts a timer thats runs this.update  method every 5 secs
     * holds reference to timer on `this.timer`
     * @memberof App
     */
    startTimer = () => {
        this.updateQuestion();

        this.timer = setInterval(this.updateQuestion, 5000)
    }

    /**
     *
     * @function stopTimer
     * @description Stops timer by using clearInterval() method passing `this.timer`  reference
     * @memberof App
     */
    stopTimer = () => {

        clearInterval(this.timer)

    }

    render() {
        const { questions, position } = this.state;
        return (
            <div>
                <Container>
                    <Jumbotron style={{ textAlign: 'center' }}>

                        {this.state.isGameOn ?
                            <Container>
                                <Row>
                                    <Col xs={12} md={12} style={{ textAlign: 'center' }} >
                                        <Image src="https://via.placeholder.com/300" thumbnail />

                                        {this.state.currentQ ? <h3>{this.state.currentQ}</h3> : <h3></h3>}
                                    </Col>
                                </Row>
                                <Container>
                                    <Row>
                                        <Col xs={12} md={12} style={{ textAlign: 'center', marginBottom: 20 }}>

                                            <ProgressBar now={position * 10} />

                                        </Col>
                                        <Col xs={6} md={6} style={{ textAlign: 'center' }}>

                                            <Button onClick={this.startTimer} variant="success">Start</Button>
                                        </Col>
                                        <Col xs={6} md={6} style={{ textAlign: 'center' }}>

                                            <Button onClick={this.stopTimer} variant="danger">Stop</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Container> :
                            <Container>
                                <h1>Computer Trivia</h1>
                                <Button onClick={this.startTimer} variant="success">Start</Button>
                            </Container>
                        }
                    </Jumbotron>
                    <Container >
                        <Row>
                            {this.state.currentAnswers.map(answer => {
                                return (
                                    <Col xs={6} md={6} style={{ textAlign: 'center' }}>
                                        <Image src="https://via.placeholder.com/150" thumbnail />

                                        <h3>{answer}</h3>
                                    </Col>
                                )
                            })
                            }
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default App;