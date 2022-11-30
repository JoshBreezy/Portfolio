import React from 'react';
import { CardHeader, CardText, CardBody, Button } from 'reactstrap';
import { useDB } from '../../contexts/DBContext';
import { useAuth } from '../../contexts/AuthContext';

export default function DisplayComments() {

    const { comments, deleteComment } = useDB();
    const { currentUser } = useAuth();

    return (
        <>
            { comments.map((comment) => {
                return(
                    <div key={comment.key} className={ comment.data.visible? 'card comment-card' : 'd-none'} >
                        <CardHeader>
                            <h5>{comment.data.author}</h5>
                            <p>{comment.data.date}</p>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                {comment.data.comment}
                            </CardText>
                            { currentUser.uid === comment.data.authorID && <Button color='danger' onClick={() => deleteComment(comment.key)} >DeleteComment</Button> }
                        </CardBody>
                    </div>
                )
            })}
        </>
    )
}
