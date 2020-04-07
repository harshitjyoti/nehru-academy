import React from 'react';
import Gallery from './gallery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select, Divider } from 'antd';
import { getExercise, getClass } from '../store/login/login.actions.creator';
const { Option } = Select;

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    !this.props.classes && this.props.getClass();
  }

  handleChange = (value) => {
    !this.props.exercise && this.props.getExercise(value)
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
    const { exercise, classes, isProcessing } = this.props;
    return (<div style={{ textAlign: 'center' }}>
      <h2>Daily Exercises !</h2>
      <Select placeholder="Select class" loading={isProcessing} style={{ width: 140 }} onChange={this.handleChange}>
        {classes && classes.map((c) => <Option value={c.id}>{c.name}</Option>)}

      </Select>
      <Gallery data={exercise||[]} keyName={'exercise'} />
    </div>
    );
  }
}

const mstp = (state) => {
  return {
    exercise: state.user.exercise,
    classes: state.user.classes,
    isProcessing: state.user.isProcessing,
  }
}

const mdtp = (dispatch) => bindActionCreators({ getExercise, getClass }, dispatch)
export default connect(mstp, mdtp)(Exercise)