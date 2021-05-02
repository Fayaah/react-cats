import React, {useEffect} from 'react';
import cats from '../data/cats';
import {Col, Container, Image, Row, Table} from "react-bootstrap";

function Stats() {
   let viewedCatIds = [];

    useEffect(() => {
        viewedCatIds = JSON.parse(localStorage.getItem('catArray'))
    }, []);

    return(
        <Container>
            <Row>
                <Col>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cats.filter(cat => viewedCatIds.includes(cat.key))
                            .sort((a, b) => a.rank < b.rank ? 1:-1).map((cat, key) => (
                            <tr key={key}>
                                <td>{cat.rank}</td>
                                <td><Image src={cat.image} roundedCircle />{cat.name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <h1>WINNER</h1>
                    {cats.forEach(function(cat) {
                        if (cat.rank === 1) {
                            return <Image src={cat.image} rounded />
                        }
                    })}
                </Col>
            </Row>
        </Container>
    );
}

export default Stats;