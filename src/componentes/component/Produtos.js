import React, { Component } from 'react';
import { Pagination, Row, Col } from 'antd';
import Util from './Util'
const { Produto } = Util;

export default class Produtos extends Component {
  render() {
    return (
      <div>
        <Row>
            <Col span="8"><Produto /></Col>
            <Col span="8"><Produto /></Col>
            <Col span="8"><Produto /></Col>
            <Col span="8"><Produto /></Col>
            <Col span="8"><Produto /></Col>
            <Col span="8"><Produto /></Col>
            <Col span="8"><Produto /></Col>
            <Col span="8"><Produto /></Col>
            <Col span="8"><Produto /></Col>
        </Row>
        <Row className="paginacao">
            <Pagination defaultCurrent={1} total={50} />
        </Row>
      </div>
		);
  }
}