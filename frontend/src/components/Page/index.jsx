import React, { PropTypes, Component } from 'react'
export default class Page extends Component {
  render() {
    const { year, photos } = this.props
    return <div>
       <p>
        <button onClick={(e) => this.props.setYear(+e.target.innerText)}>2016</button>
        <button onClick={(e) => this.props.setYear(+e.target.innerText)}>2015</button>
        <button onClick={(e) => this.props.setYear(+e.target.innerText)}>2014</button>
      </p>
       <h3>{year} год</h3>
      <p>У тебя {photos.length} фото.</p>
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
}