import React, { Component } from 'react'
import { Container } from 'rebass'
import SearchForm from '../components/SearchForm'
import Albums from '../components/Albums'
import { albumSearch } from '../data/spotify'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      year: (new Date()).getFullYear(),
      albums: [],
      page: 0
    }
  }

  handleChange = (e) => {
    this.setState({ year: e.target.value })
  }

  handleSubmit = async (e) => {
    const albums = await albumSearch(this.state.year,
      'BQCbA79csqwOjNZ5amX9ZUzGWnrl24EdPja8NhxRrZ7ol4RhtLBfxdzFDnZVY-QHWQdVd9xb3iaQsv8D-CWlZAcyIlYrN_sCnFbiMGOfntzQeqYrdS-nOIXwPjpwVdYNwYAc0z1QHylRuMjIVQ')

    this.setState({ albums })
  }

  render () {
    const { albums, page, year } = this.state

    return (
      <Container>
        <SearchForm
          value={year}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Albums albums={albums.slice(page*50)} />
      </Container>

    )
  }
}

export default Search
