import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PollCard from "../components/poll/poll-card";

function Poll() {
    const [catLeftId, setCatLeftId] = useState('');
    const [catRightId, setCatRightId] = useState('');
    let catIds = [];

    useEffect(() => {
        catIds = JSON.parse(localStorage.getItem('catArray')) ? JSON.parse(localStorage.getItem('catArray')) : [];

        const left = getCatId();
        const right = getOtherCatId(left);

        console.log("Left : " + left + " and right : " + right);

        setCatLeftId(left);
        setCatRightId(right);
        localStorage.setItem('catArray', JSON.stringify(catIds));
    }, []);

    function getCatId() {
        let value = 0;

        do {
            value = Math.floor(Math.random() * 10 +1);
        } while (catIds.includes(value) === true);

        catIds.push(value);

        return value.toString();
    }
    function getOtherCatId(otherCat) {
        let value = 0;

        do {
            value = Math.floor(Math.random() * 10 +1);
        } while (catIds.includes(value) === true && value !== otherCat);

        catIds.push(value);

        return value.toString();
    }

    const onVote = () => {

    }

    return (
        <Container>
            <Row>
                <Col>
                    <PollCard catId={catLeftId} handleVote={onVote}/>
                </Col>
                <Col>
                    <PollCard catId={catRightId} handleVote={onVote}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Poll;