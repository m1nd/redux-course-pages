import React, { Component } from 'react';

export default class Page extends Component {
  render() {
    const { year, photos, fetching } = this.props;
    return (
      <div className="ib page">
        <p>
          <button
            className="btn"
            onClick={e => {
              this.props.getPhotos(+e.target.textContent);
            }}
          >
            2017
          </button>
          <button
            className="btn"
            onClick={e => {
              this.props.getPhotos(+e.target.textContent);
            }}
          >
            2016
          </button>
          <button
            className="btn"
            onClick={e => {
              this.props.getPhotos(+e.target.textContent);
            }}
          >
            2015
          </button>
          <button
            className="btn"
            onClick={e => {
              this.props.getPhotos(+e.target.textContent);
            }}
          >
            2014
          </button>
        </p>
        <h3>{year} year</h3>
        {fetching ? <p>Loading...</p> : <p>Your have {photos.length} photos</p>}
      </div>
    );
  }
}
