import React from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import big from '../assets/big.png'

const DevicePage = () => {
  const device = { id: 1, name: 'Sumsung Galaxy A20', price: 25000, rating: 5, img: 'https://addrom.com/wp-content/uploads/2019/03/samsung-galaxy-a20-a205-400x300.jpg' }
  const description = [
    { id: 1, title: 'Оперативная память', description: '5 гб' },
    { id: 2, title: 'Камера', description: '12 мп' },
    { id: 3, title: 'Процессор', description: 'Пентиум 3' },
    { id: 4, title: 'Кол-во ядер', description: '2' },
    { id: 5, title: 'Аккумулятор', description: '4000' },
  ]

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Form className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ background: `url(${big}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
            >
              {device.rating}
            </div>
          </Form>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-3">
        <h1>Характеристики</h1>
        {description.map((info, index) =>
          <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;