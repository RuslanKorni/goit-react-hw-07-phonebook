import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import {FormFilter, LabelFilter} from './Filter.styled';
import { Input } from 'components/FormList/FormList.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

    return (
      <FormFilter>
        <LabelFilter>
          <Input
            type="name"
            value={value}
            onChange={handleChange}
            placeholder="Please enter a name to search"
          />
        </LabelFilter>
      </FormFilter>
    );
  };
  
  export default Filter;

