import SwiperCore, {Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import Plate from '../components/plate'
import Head from 'next/head'
import {useRef} from 'react'

SwiperCore.use([Navigation])

const GalleryPage = ({images}) => {
  const swiper = useRef();

  return (
    <>
      <Head>
        <title>Laowai | Gallery</title>
      </Head>
      <div className={'galleryPage'}>
        <div className={'galleryPage-container'}>
          <Swiper
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={20}
            onSwiper={(swiperVal) => swiper.current = swiperVal}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 1.5,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 4,
                centeredSlides: false,
                spaceBetween: 50,
              }
            }}
          >
            {images.map(image =>
              <SwiperSlide key={image.key}>
                <Plate className={'galleryPage-plate'} image={image.src} alt={image.alt}/>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        <div className='galleryPage-navigation'>
          <div className='galleryPage-navigation-left' onClick={() => swiper.current?.slidePrev?.()} />
          <div className='galleryPage-navigation-right' onClick={() => swiper.current?.slideNext?.()} />
        </div>
      </div>
    </>
  )
}


export const getStaticProps = async () => {
  const fs = require('fs').promises
  const path = require('path')
  const root = process.cwd()

  const files = await fs.readdir(path.join(root, 'public/images/gallery'))
  const images = files.map((file, index) => ({
    key: index,
    src: path.join('/images/gallery', file),
    alt: file.replace(/\.(jpg|jpeg|png|svg|gif)/g, '')
  }))

  return {
    props: {
      images
    }
  }
}


export default GalleryPage
