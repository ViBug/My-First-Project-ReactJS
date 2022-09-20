import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BrandBar from '../components/BrandBar';
import TypeBar from '../components/TypeBar';
import DeviceList from '../components/DeviceList';
import Pages from '../components/Pages';

const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;