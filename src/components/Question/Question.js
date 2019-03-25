import React from 'react';
import { Container, Row, Col, ProgressBar, Button, Image } from 'react-bootstrap'

const Question = props => {
    const { position, currentQ, startTimer, stopTimer } = props;
    return (
        <Container>
            <Row>
                <Col xs={12} md={12} style={{ textAlign: 'center' }} >
                    <Image src="https://via.placeholder.com/300" thumbnail />

                    {<h3>{currentQ}</h3>}
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col xs={12} md={12} style={{ textAlign: 'center', marginBottom: 20 }}>

                        <ProgressBar now={position * 10} />

                    </Col>
                    <Col xs={6} md={6} style={{ textAlign: 'center' }}>

                        <Button onClick={startTimer} variant="success">Start</Button>
                    </Col>
                    <Col xs={6} md={6} style={{ textAlign: 'center' }}>

                        <Button onClick={stopTimer} variant="danger">Stop</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default Question;