import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Page from './components/Page';
import User from './components/User';
import * as pageActions from './actions/pageActions';

class App extends Component {
  render() {
    const { user, page } = this.props;
    const { getPhotos } = this.props.pageActions;
    return (
      <div className="row">
        <User name={user.name} />
        <Page
          year={page.year}
          photos={page.photos}
          getPhotos={getPhotos}
          fetching={page.fetching}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer,
  page: state.pageReducer,
});

const mapDispatchToProps = dispatch => ({
  pageActions: bindActionCreators(pageActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
