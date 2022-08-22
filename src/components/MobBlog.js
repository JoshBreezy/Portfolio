import React, { useState } from "react";
import { BLOGS } from "./shared/blogs";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Button,
  CardFooter,
  CardText,
  Fade,
} from "reactstrap";

const items = BLOGS;

function MobBlogCard({ blog }) {
  const [visible, setVisible] = useState(false);

  function toggleIn() {
    setVisible(!visible);
  }
  return (
    <Card
      style={{ height: "18rem", backgroundColor: "#F7EFE6", color: "#212529" }}
    >
      <CardTitle tag="h3" className="m-2">
        {blog.title}
      </CardTitle>
      <CardSubtitle className="offset-1">{blog.date}</CardSubtitle>
      <CardBody className="my-auto">
        <div className="row h-100">
          <Button color="primary" onClick={toggleIn} className="col-5 m-auto">
            View Blog
          </Button>
        </div>
      </CardBody>
      <CardFooter className="mb-5">Comments comming soon!</CardFooter>
    </Card>
  );
}

export default function MobBlog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [visible, setVisible] = useState(false);

  function toggleOut() {
    setVisible(!visible);
  }

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(({ ...blog }) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={blog.id}
    >
      <MobBlogCard blog={blog} />
      <Fade in={visible} exit className="card mob-blog-card" enableTouch>
        <CardBody>
          <CardText onClick={toggleOut}>{blog.content}</CardText>
        </CardBody>
      </Fade>
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      fade
      enableTouch
      dark
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
