import React from 'react'
import { MVPBD } from '../../data/MVPBD'
import CarouselSection from '../CarouselSection/CarouselSection'

const Home = () => {
  return (
    <div>
      <CarouselSection
        data={MVPBD.produtos}
        // dataUrl={'http://localhost:3000/static/shoes.json'}
        title={'Novidades'}
      />
      {/* <CarouselSection
        dataUrl={'http://localhost:3000/static/sports.json'}
        title={'Experimente um novo esporte'}
      />
      <CarouselSection
        dataUrl={'http://localhost:3000/static/blog.json'}
        title={'Blog'}
      /> */}
    </div>
  )
}

export default Home
