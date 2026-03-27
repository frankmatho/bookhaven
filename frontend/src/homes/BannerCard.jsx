import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './BannerCard.css';

// ✅ Import images directly at the top
import book1 from '../assets/banner-books/book1.png';
import book2 from '../assets/banner-books/book2.png';
import book3 from '../assets/banner-books/book3.png';
import book4 from '../assets/banner-books/book4.png';
import book5 from '../assets/banner-books/book5.png';

const books = [book1, book2, book3, book4, book5];

const BannerCard = () => {
  return (
    <div className='banner'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {books.map((book, index) => (
          <SwiperSlide key={index}>
            <img src={book} alt={`book-${index + 1}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCard;