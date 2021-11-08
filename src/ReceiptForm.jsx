
  
import React,{useEffect,useState} from 'react';
import { useForm } from './useForm';
import { Form, Button } from 'react-bootstrap';
import { generatePdf } from './generatePdf';
import moment from 'moment';

export const ReceiptForm = () => {

  const [total,setTotal] = useState(0)

  const [formValues, handleInputChange] = useForm({
    name: '',
    concept: '',
    cost: '200',
    charge: '0',
    date: moment().format('YYYY-MM-DD'),
  });

  
  const { name, concept, cost, charge,date } = formValues;
  
    const handleSubmit = (e) => {
    e.preventDefault()
    generatePdf(name,concept,cost,charge,date)
  }

  useEffect(()=>{
    setTotal(Number(cost)+Number(charge))
  },[cost,charge])

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

      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          defaultValue={date}
          onChange={handleInputChange}
        />
      </Form.Group>

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

      <Form.Group className="mt-3">
        <Form.Label>Cost</Form.Label>
        <Form.Control
          type="number"
          autoComplete="off"
          name="cost"
          placeholder="Enter the cost"
          value={cost}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Charge</Form.Label>
        <Form.Control
          type="number"
          autoComplete="off"
          name="charge"
          placeholder="Enter the cost"
          value={charge}
          onChange={handleInputChange}
        />
      </Form.Group>

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