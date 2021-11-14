

import React, { useEffect, useState } from 'react';
import { useForm } from './useForm';
import { Form, Button, Table, Row, Col } from 'react-bootstrap';
import { generatePdf } from './generatePdf';
import moment from 'moment';

export const ReceiptForm = () => {

  const [total, setTotal] = useState(0)
  const [concepts, setConcepts] = useState([])

  const [formValues, handleInputChange] = useForm({
    name: '',
    concept: '',
    cost: '0',
    date: moment().format('YYYY-MM-DD'),
  });

  const { name, concept, cost, date } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault()
    generatePdf(name,date,concepts,total)
  }

  const handleAdd = () => {
    setConcepts([...concepts,{concept,cost}])
  }

  const handleRemove = (co) => {
    setConcepts(conp => conp.filter(c => c.concept !== co))
  }

  useEffect(() => {
    var t = 0

    for(var i = 0; i< concepts.length; i++){
      t = t + Number(concepts[i].cost)
    }

    setTotal(t)
  }, [concepts])

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          name="name"
          placeholder="Enter the student's name"
          value={name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          defaultValue={date}
          onChange={handleInputChange}
        />
      </Form.Group>

      <hr />

      <Row>
        <Col>
          <Form.Group className="mt-3">
            <Form.Label>Concept</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              name="concept"
              placeholder="Enter the concept"
              value={concept}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>

        <Col sm={3}>
          <Form.Group className="mt-3">
            <Form.Label>Cost ($)</Form.Label>
            <Form.Control
              type="number"
              autoComplete="off"
              name="cost"
              placeholder="Enter the cost"
              value={cost}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>

        <Col sm={2} className="d-grid gap-2 mt-3">
          <Button
            variant="info"
            onClick={handleAdd}
          >
            Add
          </Button>
        </Col>
      </Row>

      <Table 
        bordered 
        hover 
        size="sm"
        className="mt-3"
      >
        <thead>
          <tr>
            <th>Concept</th>
            <th>Cost ($)</th>
            <th>---</th>
          </tr>
        </thead>
        <tbody>
          {
            concepts?.map((c, i) => (
              <tr key={i}>
                <td>{c.concept}</td>
                <td>{c.cost}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={()=> handleRemove(c.concept)}
                  >
                    x
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>

      <hr />

      <Form.Group className="mt-3">
        <Form.Label>Total</Form.Label>
        <Form.Control
          type="number"
          autoComplete="off"
          value={total}
          disabled={true}
        />
      </Form.Group>

      <div className="d-grid gap-2 mt-3">
        <Button type="submit" variant="success">Confirm</Button>
      </div>
    </Form>
  );
};