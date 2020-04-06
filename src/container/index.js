import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Carousel, Tabs } from 'antd';
import { getGallery, getNotice } from '../store/login/login.actions.creator';
import './index.css'
class InitApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    !this.props.gallery && this.props.getGallery()
    !this.props.notice && this.props.getNotice()
  }

  render() {
    const { gallery, notice } = this.props;
    return (<div class="home">
      <h4>Gallery</h4>
      <Carousel autoplay>
        {gallery && gallery.map((img) => {
          return <img src={'https://nehruacademy-1d46.restdb.io//media/' + img.image} />
        })}
      </Carousel>
      <h4>Notice Board</h4>
      <Carousel autoplay>
        {notice && notice.map((img) => {
          return <img src={'https://nehruacademy-1d46.restdb.io//media/' + img.image} />
        })}
      </Carousel>
    </div>
    );
  }
}

const mstp = (state) => {
  return {
    gallery: state.user.gallery,
    notice: state.user.notice
  }
}

const mdtp = (dispatch) => bindActionCreators({ getGallery, getNotice }, dispatch)
export default connect(mstp, mdtp)(InitApp)