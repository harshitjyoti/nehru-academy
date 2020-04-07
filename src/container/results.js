import React from 'react';
import Gallery from './gallery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select } from 'antd';
import { getResult, getClass } from '../store/login/login.actions.creator';
const { Option } = Select;

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    !this.props.classes && this.props.getClass();
  }

  handleChange = (value) => {
    !this.props.result && this.props.getResult(value)
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { result, classes, isProcessing } = this.props;
    return (<div style={{ textAlign: 'center' }}>
      <h2>Results !</h2>
      <Select placeholder="Select class" loading={isProcessing} style={{ width: 140 }} onChange={this.handleChange}>
        {classes && classes.map((c) => <Option value={c.id}>{c.name}</Option>)}

      </Select><hr />
      <Gallery data={result||[]} keyName={'result'} />
    </div>
    );
  }
}

const mstp = (state) => {
  return {
    result: state.user.result,
    classes: state.user.classes,
    isProcessing: state.user.isProcessing,
  }
}

const mdtp = (dispatch) => bindActionCreators({ getResult, getClass }, dispatch)
export default connect(mstp, mdtp)(Result)