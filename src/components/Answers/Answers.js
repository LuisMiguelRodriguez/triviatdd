import React from 'react';
import { Col, Image} from 'react-bootstrap';

export default function Answers(props) {
    return (
        <Col xs={6} md={6} style={{ textAlign: 'center' }}>
            <Image src="https://via.placeholder.com/150" thumbnail />

            <h3>{props.answer}</h3>
        </Col>
    )
}
