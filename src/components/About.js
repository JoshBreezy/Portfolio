import React from 'react';
import { Card, Row, Col, CardTitle, CardText, CardBody } from 'reactstrap';

export default function About () {
    return(
        <Row content>
            <Col>
                <Card>
                    <CardBody>
                        <CardTitle>About Josh</CardTitle>
                        <CardText>Hi there! I'm a recent NuCamp fullstack graduate excited to start a new career in web development!</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
};