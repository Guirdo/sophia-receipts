import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Row } from 'react-bootstrap'
import { ReceiptForm } from './ReceiptForm'

export default function App() {
  return (
    <Row
      className="justify-content-center m-5"
    >
      <h1 className="text-center mb-3">Recibos Sophia</h1>

      <Col
        sm={6}
        className="border border-3 border-dark "
      >
        <ReceiptForm />
      </Col>
    </Row>
  );
}
