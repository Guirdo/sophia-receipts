import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Col,Row } from 'react-bootstrap'
import { ReceiptForm } from './ReceiptForm'

export default function App() {
  return (
    <Row
      className="justify-content-center m-3"
    >
      <h1 className="text-center text-dark mb-3">Sophia's receipts</h1>

      <Col
        sm={7}
        className="border border-3 border-dark bg-white"
      >
        <ReceiptForm />
      </Col>
    </Row>
  );
}
