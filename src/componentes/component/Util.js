import React, { Component } from 'react';
import { Rate, Select, Button, Card, Menu, Row, Col } from 'antd';
import tenis from './../../img/tenis.png';
import banner from '../../img/banner.png';
import americaexpress from '../../img/americaexpress.png';
import dinersclub from '../../img/dinersclub.png';
import mastercard from '../../img/mastercard.png';
import visa from '../../img/visa.png';

const SubMenu = Menu.SubMenu;
const Option = Select.Option;

const Produto = () => {
    return (
        <div>
            <Card style={{ width: 215, float: "left", margin: '10px' }}>
            <a href="/detalhe#tenis-converse-ct-all-star-core-ox-branco">
                <div><img src={tenis} style={{ width: 200, padding: 13 }}/></div>
                <div className="nome">Alpargatas</div>
                <div><span class="vReal">R$30,00</span><span class="vPromocao">R$25,00</span></div>
            </a>
            </Card>
        </div>
    )
}

const MenuVertical = () => {
    return (
        <div className="menu-vertical">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ width: 256 }}
            >
                <SubMenu key="sub1" title={<span>Marcas</span>}>
                    <Menu.Item key="1">Sapato</Menu.Item>
                    <Menu.Item key="2">Botas</Menu.Item>
                    <Menu.Item key="3">Tênis</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span>Tamanho</span>}>
                    <Menu.Item key="5">PP</Menu.Item>
                    <Menu.Item key="6">P</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )
}

const MenuHorizontal = ({home}) => {
    return (
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={home?['1']:[]}
        style={{ lineHeight: '64px' }}
        className="menuHorizontal"
      >
        <Menu.Item key="1"><a href="/">Masculino</a></Menu.Item>
        <Menu.Item key="2"><a href="/">Feminino</a></Menu.Item>
        <Menu.Item key="3"><a href="/">Infantil</a></Menu.Item>
        <Menu.Item key="4"><a href="/">Marcas</a></Menu.Item>
      </Menu>
    )
}

const DetalheValor = () => {
    return (
        <div>
            <div className="linha bold textTransformUC">Converse</div>  
            <div className="linha">Tênis Converse CT All Star Core Ox Branco</div>  
            <div className="linha preco"><span>R$25,00</span> - <span>R$50,00</span></div>  
            <div className="linha"><Rate allowHalf defaultValue={2.5} /></div>  
            <div className="linha">
                <label>Selecione o Tamanho:</label>
                <Select defaultValue="Tamanho" style={{ width: 150 }}>
                  <Option value="34">34</Option>
                  <Option value="35">35</Option>
                  <Option value="36">36</Option>
                  <Option value="37">37</Option>
                </Select></div>  
            <div className="linha"><Button type="primary" block>Comprar</Button></div>  
            <div className="linha"><Button block>Calcular Frete</Button></div>  
        </div>
    )
}

const Caracteristica = () => {
    return (
        <div>
            <div className="linha bold textTransformUC">Descrição</div>  
            <div className="linha">Tênis VIA UNO Cadarço Branco </div>
            <div className="linha">Tipo de Produto: Tênis</div>
            <div className="linha">Tamanho: 38</div>
            <div className="linha">Fechamento: Cadarço</div>
            <div className="linha">Material: Sintético</div>
            <div className="linha">Material Interno: Têxtil</div>
            <div className="linha">Material da Sola: Borracha</div>  
        </div>
    )
}

const Informacoes = () => {
    return (
        <div>
            <div className="linha bold textTransformUC">Informações</div>  
            <div className="linha">Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Viva Forevis aptent taciti sociosqu ad litora torquent. Detraxit consequat et quo num tendi nada. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.</div>
       </div>
    )
}

const Outros = () => {
    return (
        <div className="outros">
            <div className="linha bold textTransformUC">Outros:</div>
            <div className="outros-produtos">
                <Produto />
                <Produto />
                <Produto />
                <Produto />
            </div>
       </div>
    )
}

const Banner = () => {
    return (
        <div className="">
            <a href="#"><img className="banner" src={banner} alt="Banner" /></a>
        </div>
    )
}

const Rotape = () => {
    return (
        <div>
            <Row className="rodape">
              <Col span={6}>
                <Row className="bold">1-800-234-000</Row>
                <Row>atendimento@vendas.com.br</Row>
              </Col>
              <Col span={6}>
                <Row className="bold">Forma de Pagamento</Row>
                <Row className="tipopagamento-ico">
                    <Col className="tipopagamento-ico-card"><img src={americaexpress} alt="" title="" /></Col>
                    <Col className="tipopagamento-ico-card"><img src={visa} alt="" title="" /></Col>
                    <Col className="tipopagamento-ico-card"><img src={dinersclub} alt="" title="" /></Col>
                    <Col className="tipopagamento-ico-card"><img src={mastercard} alt="" title="" /></Col>
                </Row>
              </Col>
              <Col span={6}>
                <Row className="bold">Company</Row>
                <Row>
                    Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Em pé sem cair, deitado sem dormir, sentado 
                    sem cochilar e fazendo pose.
                </Row>
              </Col>
              <Col span={6}>
                <Row className="bold">Help</Row>
                <Row>
                    Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Manduma pindureta quium dia nois paga. 
                    Admodum accumsan disputationi eu sit.
                </Row>
              </Col>
            </Row>
        </div>
    )
}

export default {
    MenuVertical: MenuVertical,
    MenuHorizontal: MenuHorizontal,
    Produto: Produto,
    DetalheValor: DetalheValor,
    Caracteristica: Caracteristica,
    Informacoes: Informacoes,
    Outros: Outros,
    Banner: Banner,
    Rotape: Rotape,
};
