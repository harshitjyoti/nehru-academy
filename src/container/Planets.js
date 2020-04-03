import React, { useEffect } from 'react';
import { Layout, Empty, message } from 'antd';
import { Blank, Header, Footer, Skeleton, Pannel } from '../components';
import { searchPlanetsFetch, resetCalls, logout } from '../store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearInterval } from 'timers';

const { Content } = Layout;

const Planets = ({ callsRemaining, searchPlanetsFetch, isProcessing,
  planets, history, userDetails, resetCalls, isSuperUser, logout, hasError }) => {
  let timer;
  useEffect(() => {
    clearInterval(timer);
    //!userDetails && history.push('/');
    timer = setInterval(() => {
      resetCalls()
    }, 60000);
  }, [])

  useEffect(() => {
    if (!userDetails) history.push('/');
  }, [userDetails])

  useEffect(() => {
    if (hasError) history.push('/error');
  }, [hasError])

  const error = () => {
    message.error('You have consumed your api calls please wait till it resets .');
  };

  return <Layout className="layout">
    {userDetails &&
      <><Header
        onSearch={(callsRemaining <= 0 && !isSuperUser) ? error : searchPlanetsFetch}
        isProcessing={isProcessing}
        user={userDetails.name}
        logout={logout} />
        <Content
          style={{
            position: "absolute",
            width: '100%',
            maxHeight: '80vh',
            padding: '80px 50px'
          }}>
          {isProcessing ? <Skeleton /> :
            <div className="site-layout-content">
              {!planets && <Blank />}
              {(planets && !!planets.count) && <Pannel planets={planets.results} />}
              {(planets && !planets.count) && <Empty />}
            </div>
          }
        </Content></>
    }
    {(planets && planets.count) && <Footer count={planets.count} onSearch={searchPlanetsFetch} />}
  </Layout>

}
const mapStateToProps = ({ planets: {
  isProcessing,
  planets,
  hasError,
  isPlanetsFetched,
  callsRemaining
},
  user: { userDetails, isSuperUser } }) => {
  return {
    isProcessing,
    planets,
    hasError,
    isPlanetsFetched,
    userDetails,
    isSuperUser,
    callsRemaining
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchPlanetsFetch, resetCalls, logout }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Planets);