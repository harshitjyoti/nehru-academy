import React from 'react';
import Gallery from './gallery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select } from 'antd';
import { getHomework, getClass } from '../store/login/login.actions.creator';
const { Option } = Select;

class Homework extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    !this.props.classes && this.props.getClass();
  }

  handleChange = (value) => {
    !this.props.homework && this.props.getHomework(value)
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
    const { homework, classes, isProcessing } = this.props;
    return (<div style={{ textAlign: 'center' }}>
      <Select placeholder="Select class" loading={isProcessing} style={{ width: 140, margin: 20 }} onChange={this.handleChange}>
        {classes && classes.map((c) => <Option value={c.id}>{c.name}</Option>)}

      </Select><hr />
      <Gallery data={homework||[]} keyName={'homework'} />
    </div>
    );
  }
}

const mstp = (state) => {
  return {
    homework: state.user.homework,
    classes: state.user.classes,
    isProcessing: state.user.isProcessing,
  }
}

const mdtp = (dispatch) => bindActionCreators({ getHomework, getClass }, dispatch)
export default connect(mstp, mdtp)(Homework)