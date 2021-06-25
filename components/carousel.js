import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [

    {
        src: '../education.svg',
        altText: 'Education',
        caption: 'Collaborate with education and learning'
    },
    {
        src: '../Data.svg',
        altText: 'Work',
        caption: 'A new way of working your questions'
    },
    {
        src: '../quiz.svg',
        altText: 'Quiz',
        caption: 'Mount your activities more easily'
    },
    {
        src: '../Questions.svg',
        altText: 'Questions',
        caption: 'You can post your questions and collaborate with the community'
    },
    {
        src: '../teacher.svg',
        altText: 'Teachers',
        caption: 'An APP designed for teachers'
    },
    {
        src: '../Group.svg',
        altText: 'Group',
        caption: 'A network to meet new people'
    }
];

const Carocel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                className="text-center"
            >
                <style>
                    {`
                .box{
                    height:85vh;
                    width:100vw;
                    align:center;
                    background: rgba(233, 109, 100, 0.7);
                }
                .imgCarousel{
                    margin-top: 40px;
                    height:60vh;
                    width:80vw;
                    align:center;
                }
              
              `}
                </style>
                <div className="box">
                    <img src={item.src} alt={item.altText} className="mt-4 mb-4 imgCarousel" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
                </div>

            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Carocel;