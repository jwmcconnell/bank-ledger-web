import React from 'react';
import { shallow } from 'enzyme';
import TransactionForm from './TransactionForm';

describe('TransactionForm component', () => {
  it('renders TransactionForm', () => {
    const wrapper = shallow(<TransactionForm 
      handleSubmit={() => {}} 
      handleUpdate={() => {}}
      depositValue={123}
      transactionType='withdrawal'
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
