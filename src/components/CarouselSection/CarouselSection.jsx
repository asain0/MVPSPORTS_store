import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io'
// import { Link } from 'react-router-dom'
import '../CarouselSection/CarouselSection.css'
import ProductCard from '../CardProduto/CardProduto'

function CarouselSection(props) {
  const [data, setData] = useState([])
  const carousel = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(props.dataUrl)
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [props.dataUrl]);

  const handleLeftClick = e => {
    e.preventDefault()
    // console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  const handleRightClick = e => {
    e.preventDefault()
    // console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  // const Card = props => {
  //   return props.data.map(item => {
  //     const { id, name, price, oldPrice, image } = item

  //     return (
  //       <Link key={id} to="/Produto">
  //         <div className="item" key={id}>
  //           <div className="image">
  //             <img src={image} alt={name} object-fit={'fill'} />
  //           </div>
  //           <div className="info">
  //             {name && oldPrice && price && (
  //               <div>
  //                 <span className="name">{name}</span>
  //                 <span className="oldPrice">R$ {oldPrice}</span>
  //                 <span className="price">R$ {price}</span>
  //               </div>
  //             )}
  //           </div>
  //         </div>

  //       </Link>
  //     )
  //   })
  // }

  if (!data || !data.length) return null

  return (
    <div className="carousel">
      <div className="carousel__tittle">
        <h1>{props.title}</h1>
      </div>
      <div className="carousel__itens" ref={carousel}>
        {/* <Card data={data} /> */}
        {data.map( produto => (
          <ProductCard dadosProduto={produto}/>
        ))}
      </div>

      <div className="buttons">
        {/* <LeftButton onClick={handleLeftClick} /> */}
        <IoMdArrowDropleftCircle onClick={handleLeftClick} />
        
        {/* <RightButton onClick={handleRightClick} /> */}
        <IoMdArrowDroprightCircle onClick={handleRightClick} />
        
      </div>
    </div>
  )
}

export default CarouselSection