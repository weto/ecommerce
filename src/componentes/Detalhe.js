import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import CarouselInfo from './component/CarouselInfo';
import { Layout, Row, Col, Menu } from 'antd';
import Util from './component/Util'
const { Header, Content, Footer } = Layout;
const { DetalheValor, Caracteristica, Informacoes, Outros, Banner, Rotape, MenuHorizontal } = Util;
const load = require('./../img/load.gif')

const loading = () => {
  return (
    <div>
      <img src={load} alt="Carregando" title="Carregando" />
    </div>
  )
}

class Detalhe extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <Row>
              <Col span={4}>
                <div className="logo"><a href="#" style={{color:'#fff'}}>LOGO</a></div>
              </Col>
              <Col span={12}>
                <MenuHorizontal />
              </Col>
            </Row>
          </Header>
          <Content>
            <Row>
              <Col span={14}>
                { Carousel? <CarouselInfo Carousel={Carousel} />: loading }
              </Col>
              <Col span={10}>
                <DetalheValor />
              </Col>
            </Row>
            <Row>
              <Col span={14}>
                <Caracteristica />
              </Col>
              <Col span={10}>
                <Informacoes />
              </Col>
            </Row>
            <Row>
              <Col>
                <Outros />
              </Col>
            </Row>
            <Row>
              <Col>
                <Banner />
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center', marginTop: '10px' }}>
            <Rotape />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Detalhe;
