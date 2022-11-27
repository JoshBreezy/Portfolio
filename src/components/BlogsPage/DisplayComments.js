import React from 'react';
import { Card, CardHeader, CardText, CardBody } from 'reactstrap';
import { useDB } from '../../contexts/DBContext';

export default function DisplayComments() {

    const { comments, pullComments } = useDB();

    pullComments();

    function MapComments(){
        comments.forEach((comment) => {
            return(
                <Card>
                    <CardHeader>
                        {comment.data.author}
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            {comment.data.comment}
                        </CardText>
                    </CardBody>
                </Card>
            )
        })
    }


    return (
        <>
            {comments && <MapComments />}
        </>
    )
}
