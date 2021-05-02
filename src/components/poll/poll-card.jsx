import React, {useEffect, useState} from "react";
import {Button, Card} from "react-bootstrap";
import cats from "../../data/cats";

function PollCard({ catId, onVote }) {
    const [cat, setCat] = useState({});

    useEffect(() => {
        let item = cats.filter(c => {
            return c.key === catId
        })

        setCat(item);
    }, []);

    const handleVote = () => {
        onVote(cat.key);
    }

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cat.image} />
            <Card.Body>
                <Card.Title>{cat.name}</Card.Title>
                <Button onClick={handleVote()} variant="primary">Vote for {cat.name}</Button>
            </Card.Body>
        </Card>
    );
}

export default PollCard;