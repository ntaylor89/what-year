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
    const albums = await albumSearch(this.state.year, this.props.token)

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
