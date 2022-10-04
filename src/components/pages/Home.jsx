import React from 'react'
import {Link} from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch';
import { MVPBD } from '../../data/MVPBD'
import CarouselSection from '../CarouselSection/CarouselSection'


const Home = () => {
  const url = "http://localhost/produtos";
  const {data: produtos, error} = useFetch(url);

  return (
    <div>
      <CarouselSection
        data={produtos}
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
