import React from 'react';
import { shallow } from 'enzyme';
import AuthForm from './AuthForm';

describe('AuthForm component', () => {
  it('renders AuthForm', () => {
    const wrapper = shallow(<AuthForm 
      handleSubmit={() => {}} 
      handleUpdate={() => {}} 
      errorMessage={'error'}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
