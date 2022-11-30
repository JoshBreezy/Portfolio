import React from 'react';
import { Card, CardHeader, CardText, CardBody } from 'reactstrap';
import { useDB } from '../../contexts/DBContext';

export default function DisplayComments() {

    const { comments } = useDB();

    return (
        <>
            { comments.map((comment) => {
                return(
                    <Card key={comment.key} className='comment-card' >
                        <CardHeader>
                            <h5>{comment.data.author}</h5>
                            <p>{comment.data.date}</p>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                {comment.data.comment}
                            </CardText>
                        </CardBody>
                    </Card>
                )
            })}
        </>
    )
}
