import React from 'react'
import { ButtonOutline, Group, Input, Label } from 'rebass'

const SearchForm = ({ value, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Label px={2} pb={1} children='Enter a year:' color='gray' />
    <Group px={2}>
      <Input
        px={3}
        placeholder='Enter a year 1950-current'
        value={value}
        onChange={handleChange}
      />
      <ButtonOutline
        type='submit'
        children='search'
        value='submit'
      />
    </Group>
  </form>
)

export default SearchForm
