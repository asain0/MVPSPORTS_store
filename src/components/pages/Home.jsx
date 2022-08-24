import React from 'react'
import CarouselSection from '../layout/CarouselSection'

const Home = () => {
  return (
    <div>
      <CarouselSection
        dataUrl={'http://localhost:3000/static/shoes.json'}
        title={'Novidades'}
      />
      <CarouselSection
        dataUrl={'http://localhost:3000/static/sports.json'}
        title={'Experimente um novo esporte'}
      />
      <CarouselSection
        dataUrl={'http://localhost:3000/static/blog.json'}
        title={'Blog'}
      />
    </div>
  )
}

export default Home
