import React, { Component } from 'react';
const tenisDetalhe1 = require('./../../img/tenisDetalhe1.jpg')
const tenisDetalhe2 = require('./../../img/tenisDetalhe2.jpg')
const tenisDetalhe3 = require('./../../img/tenisDetalhe3.jpg')

const CarouselInfo = ({ Carousel }) => {
  return (
    <div style={{ padding: 15, minHeight: 400 }}>
      {
        <Carousel>
          <img src={tenisDetalhe1} style={{ width: '50%', margin: '0 auto' }} />
          <img src={tenisDetalhe2} style={{ width: '50%', margin: '0 auto' }} />
          <img src={tenisDetalhe3} style={{ width: '50%', margin: '0 auto' }} />
        </Carousel>
      }
    </div>
  )
}

export default CarouselInfo;
