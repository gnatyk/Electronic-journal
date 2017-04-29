import React, { Component } from 'react'
import User from '../../components/User'
import Page from '../../components/Page'
import { connect } from 'react-redux';

 class App extends Component {
  render() {
      const { user, page, setYear } = this.props
      return <div>
       <User name={user.name} />
       <Page photos={page.photos} year={page.year} setYear={setYear}/> 
       </div>
  }
}
import { setYear } from '../../modules/page';
export default connect(
    state => ({
        user: state.user,
        page: state.page
    }),
    {
        setYear
    }
)(App);
