import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListWrap, List } from './ContactList.styled';
import { Button } from 'components/FormList/FormList.styled';
import { getVisibleContacts } from '../../redux/selectors';
import { deleteContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ListWrap>
      {contacts.map(({ id, name, number }) => (
        <List key={id}>
          {name + ' : ' + number}
          <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
            Delete
          </Button>
        </List>
      ))}
    </ListWrap>
  );
};

export default ContactList;
