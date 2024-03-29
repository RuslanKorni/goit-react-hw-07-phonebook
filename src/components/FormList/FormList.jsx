import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "../../redux/operations";
import {useState} from 'react';
import { Form, Label, Input, Button, Span } from './FormList.styled';
import { toast } from 'react-toastify';
import { notifyOptions } from '../notifyOptions/notifyOptions';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

const FormList = () => {
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const contacts = useSelector(selectVisibleContacts);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);

const handleSubmit = event => {
  event.preventDefault();

  const normalizedName = name.toLowerCase();
  const isAdded = contacts.find(
    el => el.name.toLowerCase() === normalizedName
  );

  if (isAdded) {
    toast.error(`${name}: is already in contacts`, notifyOptions);
    return;
  }

  dispatch(addContact({id: nanoid(), name, number }));
  setName('');
  setNumber('');
};

const handleChange = e => {
  const { name, value } = e.target;
  switch (name) {
    case 'name':
      setName(value);
      break;
    case 'number':
      setNumber(value);
      break;
    default:
      return;
  }
};


    return (
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          <Span>Name</Span>
          <Input
            type="text"
            placeholder="Your name"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <Span>Number</Span>
          <Input
            type="tel"
            placeholder="Your number"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add to contacts</Button>
      </Form>
    );
  
}

export default FormList;


