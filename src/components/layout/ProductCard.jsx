import React from 'react'
import { useEffect, useState, useRef } from 'react'
import '../layout/ProductCard.css'

function ProductCard(props) {
  const [data, setData] = useState([])
  const productCard = useRef(null)

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
  }, [])

  const Card = props => {
    return props.data.map(item => {
      const { id, name, price, oldPrice, image } = item

      return (
        <div className="item" key={id}>
          <div className="image">
            <img src={image} alt={name} object-fit={'fill'} />
          </div>
          <div className="info">
            {name && oldPrice && price && (
              <div>
                <span className="name">{name}</span>
                <span className="oldPrice">R$ {oldPrice}</span>
                <span className="price">R$ {price}</span>
              </div>
            )}
          </div>
        </div>
      )
    })
  }

  return (
    <div className="card">
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <div className="productCard" ref={productCard}>
        <Card data={data} />
      </div>
    </div>
  )
}

export default ProductCard
