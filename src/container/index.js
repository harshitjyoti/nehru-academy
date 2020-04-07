import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Carousel, Spin } from 'antd';
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
    const { gallery, notice, isProcessing } = this.props;
    return (<div class="home">
      {isProcessing ? <Spin style={{marginTop: '25%'} }spinning={true} tip={'Loading . . .'}/>
       : <>{gallery && !!gallery.length && <><h4>Gallery</h4>
      <Carousel autoplay>
        {gallery.map((img) => {
          return <img src={'https://nehruacademy-1d46.restdb.io//media/' + img.image} />
        })}
      </Carousel></>}
      {notice && !!notice.length!=0 &&  <><h4>Notice Board</h4>
      <Carousel autoplay>
        {notice.map((img) => {
          return <img src={'https://nehruacademy-1d46.restdb.io//media/' + img.image} />
        })}
      </Carousel></>}
      {(!gallery || !gallery.length ) && (!notice || !notice.length ) && !isProcessing && <h2>Data Coming Soon !</h2>}
      </>}
    </div>
    );
  }
}

const mstp = (state) => {
  return {
    gallery: state.user.gallery,
    notice: state.user.notice,
    isProcessing: state.user.isProcessing
  }
}

const mdtp = (dispatch) => bindActionCreators({ getGallery, getNotice }, dispatch)
export default connect(mstp, mdtp)(InitApp)