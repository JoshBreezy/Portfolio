import React, { useState } from 'react';
import { CardBody, CardText, CardTitle, CardFooter, Card, CardSubtitle, Fade, Button } from 'reactstrap';


export default function MobBlogCard ({blog}) {

    const [visible, setVisible] = useState(false);

    function toggleIn () {
        setVisible(!visible);
    }

    function toggleOut () {
        setVisible(!visible);
    }

    return(
        <Card style={{ height: '18rem', backgroundColor: '#F7EFE6', color: '#212529' }}>
            <CardTitle tag='h3' className='m-2'>{blog.title}</CardTitle>
            <CardSubtitle className='offset-1'>{blog.date}</CardSubtitle>
            <CardBody className='my-auto'>
                <div className='row h-100'>
                    <Button color='primary' onClick={toggleIn} className='col-5 m-auto'>View Blog</Button>
                </div>
            </CardBody>
            <CardFooter className='mb-5'>Comments comming soon!</CardFooter>
            <Fade in={visible} exit className='card custom-card'>
                <CardBody>
                    <CardText onClick={toggleOut}>{blog.content}</CardText>
                </CardBody>
            </Fade>
        </Card>
)
}