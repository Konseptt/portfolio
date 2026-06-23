import React from 'react'
import './Review.css'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const Review = () => {

  const reviewData = [
    {
      avatar: require('../../assets/avatar1.webp'),
      name: 'College teammate',
      review: `Worked with Ranjan on a few class projects. He learns fast, shows up prepared, and does his share without needing reminders.`
    },
    {
      avatar: require('../../assets/avatar2.webp'),
      name: 'Study group',
      review: `Took several courses with him. Good at explaining his approach, writes clean code, and actually finishes what he starts.`
    }
  ]

  return (
    <section id='review'>
        <p className="section__subtitle" data-aos="fade-up" data-aos-anchor="#review"  data-aos-duration='700'>From people I've worked with</p>
        <h2 data-aos="fade-up" data-aos-anchor="#review"  data-aos-duration='900'>Reviews</h2>

        <Swiper 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        a11y={{
          enabled: true,
          prevSlideMessage: 'Previous review',
          nextSlideMessage: 'Next review',
          paginationBulletMessage: 'Go to review {{index}}',
        }}
        className="container reviews__container" data-aos="fade-up" data-aos-anchor="#review"  data-aos-duration='1800'>
          {
            reviewData.map(({avatar, name,review }, index) => (
              <SwiperSlide className="review" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt={`${name} avatar`} width="64" height="64" loading="lazy" decoding="async" />
                </div>
                <p className='client__name'>{name}</p>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            ))
          }
        </Swiper>
    </section >
  )
}

export default Review
