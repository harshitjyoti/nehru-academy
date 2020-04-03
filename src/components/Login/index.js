import React from 'react';
import { Button, Input, Layout, Card, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction, setUser } from '../../store';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      password: null
    };
  }

  error = () => {
    message.error('Login Failed ! Wrong Credentials !');
    this.props.setUser()

  };

  setUser = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value })
  }

  login = () => {
    const { user, password } = this.state;
    this.props.loginAction({ user, password })
  }

  componentDidUpdate() {
    const { isUserFetched, userDetails, history, hasError } = this.props;
    isUserFetched && userDetails && history.push('/planets');
    isUserFetched && !userDetails && this.error()
    hasError && history.push('/error');
  }


  render() {
    const { isProcessing } = this.props;
    const { user, password } = this.state;
    return (
      <Layout.Content style={{
        textAlign: "center",
        top: '50%',
        position: 'absolute',
        left: '50%',
        msTransform: 'translateY(-50%) translateX(-50%)',
        transform: 'translateY(-50%) translateX(-50%)',
        width: '40%'
      }}>
        <div style={{
          textAlign: "center"
        }}>
          <Card title={<><UserOutlined /> Login to Star-Wars</>}>
            <Input disabled={isProcessing} size="large" placeholder="User Name" id='user' prefix={<UserOutlined />} onChange={this.setUser} /><hr />
            <Input.Password disabled={isProcessing} size="large" placeholder="Password" id='password' onChange={this.setUser} /><br /><br />
            <Button disabled={!user || !password} type="primary" onClick={this.login} loading={isProcessing}>
              Login
                </Button>
          </Card>
        </div>
      </Layout.Content>
    );
  }
}

const mapStateToProps = ({ user: { isProcessing, userDetails, hasError, isUserFetched } }) => {
  return {
    isProcessing,
    userDetails,
    hasError,
    isUserFetched
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginAction, setUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);