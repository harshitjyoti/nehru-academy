import React from 'react';
import { Result, Button } from 'antd';

class ErrorComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Result
      status="warning"
      title="There are some problems with your operation."
      extra={<Button type="primary" key="console" onClick={() => this.props.history.push('/')}>
        Go To Login
            </Button>}>
    </Result>
  }
}

export default ErrorComp;