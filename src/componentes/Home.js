import React, { Component } from 'react';
import { Layout, Row, Col, Select, Menu } from 'antd';
import Produtos from './component/Produtos';
import Util from './component/Util'
const { MenuHorizontal, MenuVertical, Banner, Rotape } = Util;
const { Header, Content, Footer } = Layout;
const Option = Select.Option;

export default class Home extends Component {

  render() {
    return (
      <Layout>
        <Header>
          <Row>
            <Col span={4}>
              <div className="logo"><a href="#" style={{color:'#fff'}}>LOGO</a></div>
            </Col>
            <Col span={12}>
              <MenuHorizontal home={1}/>
            </Col>
          </Row>
        </Header>
        <Content>
          <Row>
            <Banner />
          </Row>
          <Row>
            <div style={{textAlign: "right", marginRight: 10}}>
              <Select defaultValue="Mais procurados" style={{ width: 150 }}>
                <Option value="menorpreco">Menor Preço</Option>
                <Option value="maiorpreco">Maior Preço</Option>
                <Option value="bemavaliados">Bem Avaliados</Option>
              </Select>
            </div>
          </Row>
          <Row>
            <Col span={7}>
              <MenuVertical />
            </Col>
            <Col span={16}>
              <Produtos />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center', marginTop: '10px' }}>
          <Rotape />
        </Footer>
      </Layout>
    );
  }
}
