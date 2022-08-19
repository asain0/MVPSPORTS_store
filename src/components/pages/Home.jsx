import React from "react";
import { useEffect, useState, useRef } from 'react';
import '../layout/home.css';

    function Home() {
      const [data, setData] = useState([]);
      const carousel = useRef(null);
      const carousel2 = useRef(null);
      const [data2, setData2] = useState([]);
      const carousel3 = useRef(null);
      const [data3, setData3] = useState([]);
      
      useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json').then((Response)=> Response.json()).then(setData);
    
      }, []);
      
      useEffect(() => {
    fetch('http://localhost:3000/static/sports.json').then((Response)=> Response.json()).then(setData2);
    
      }, []);
      
      useEffect(() => {
    fetch('http://localhost:3000/static/blog.json').then((Response)=> Response.json()).then(setData3);
    
      }, []);
    
    const handleLeftClick = (e) => {
      e.preventDefault ();
      console.log(carousel.current.offsetWidth);
      carousel.current.scrollLeft -= carousel.current.offsetWidth
    
      
    }
    const handleRightClick = (e) => {
      e.preventDefault ();
      console.log(carousel.current.offsetWidth)
      carousel.current.scrollLeft += carousel.current.offsetWidth
    
    
    }
    const handleLeftClick2 = (e) => {
      e.preventDefault ();
      console.log(carousel2.current.offsetWidth);
      carousel2.current.scrollLeft -= carousel2.current.offsetWidth
    
      
    }
    const handleRightClick2 = (e) => {
      e.preventDefault ();
      console.log(carousel2.current.offsetWidth)
      carousel2.current.scrollLeft += carousel2.current.offsetWidth
    
    
    }
    const handleLeftClick3 = (e) => {
      e.preventDefault ();
      console.log(carousel3.current.offsetWidth);
      carousel3.current.scrollLeft -= carousel3.current.offsetWidth
    
      
    }
    const handleRightClick3 = (e) => {
      e.preventDefault ();
      console.log(carousel3.current.offsetWidth)
      carousel3.current.scrollLeft += carousel3.current.offsetWidth
    
    
    }
    
    
    
      if(!data || !data.length) return null;
      if(!data2 || !data2.length) return null;
      if(!data3 || !data3.length) return null;
      
      return (
       <div className='container'>
        <div className='news'>
        <h1>Novidades</h1>
        </div>
        <div className='carousel' ref={carousel}>
    
          {data.map((item) => {
            const {id, name, price, oldPrice, image} = item
            return (
        <div className='item' key={id}>
          <div className='image'>
            <img src={image} alt={name} />
          </div>
          <div className='info'>
            <span className='name'>{name}</span>
            <span className='oldPrice'>R$ {oldPrice}</span>
            <span className='price'>R$ {price}</span>
          </div>
        </div>
            ) 
        })}
        </div>
        <div className='buttons'>
          <button onClick={handleLeftClick}>
            <img src='\static\images\216151_right_chevron_icon.png' alt='Scroll left'></img> </button>
          <button onClick={handleRightClick}>
            <img src='\static\images\216151_right_chevron_icon.png' alt='Scroll Right'></img> </button>
        </div>
        
        <div className='container'>
        <div className='news'>
        <h1>Experimente um novo esporte</h1>
        </div>
        <div className='carousel' ref={carousel2}>
    
          {data2.map((item) => {
            const {id, name, image} = item
            return (
        <div className='item' key={id}>
          <div className='image'>
            <img src={image} alt={name} />
          </div>
          
        </div>
            ) 
        })}
        </div>
        <div className='buttons'>
          <button onClick={handleLeftClick2}>
            <img src='\static\images\216151_right_chevron_icon.png' alt='Scroll left'></img> </button>
          <button onClick={handleRightClick2}>
            <img src='\static\images\216151_right_chevron_icon.png' alt='Scroll Right'></img> </button>
        </div>
    
       </div>
    
       <div className='container'>
        <div className='news'>
        <h1>Blog</h1>
        </div>
        <div className='carousel' ref={carousel3}>
    
          {data3.map((item) => {
            const {id, name, image} = item
            return (
        <div className='item' key={id}>
          <div className='image'>
            <img src={image} alt={name} />
          </div>
          
        </div>
            ) 
        })}
        </div>
        <div className='buttons'>
          <button onClick={handleLeftClick3}>
            <img src='/static/images/216151_right_chevron_icon.png' alt='Scroll left'></img> </button>
          <button onClick={handleRightClick3}>
            <img src='/static/images/216151_right_chevron_icon.png' alt='Scroll Right'></img> </button>
        </div>
    
       </div>

       </div>

       
      );
    }  


export default Home;