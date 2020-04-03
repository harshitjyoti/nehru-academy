import React from 'react';
import { Result, Button } from 'antd';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return <>{hasError ?
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={
          <Button type="primary" key="console" onClick={() => this.props.history.push('/')}>
            Go To Login
                        </Button>}>
      </Result> :
      this.props.children
    }
    </>
  }
}

export default ErrorBoundary;