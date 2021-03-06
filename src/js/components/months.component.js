'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import utils from './../utils/utils';
import {setMonth} from './../actions/month.actions';

class Months extends Component {
  handleChange(val) {
    this.props.dispatch(setMonth(parseInt(val)));
  }
  
  render() {
    const options = utils.months.map((month, index) => (
      {
        value: index + 1,
        label: month
      }
    ));
    
    return (
      <div className="select-control">
        <Select
          clearable={false}
          searchable={false}
          name="months"
          value={this.props.month}
          options={options}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

Months.propTypes = {
  dispatch: PropTypes.func.isRequired,
  month: PropTypes.number.isRequired
};

export default connect((state) => ({
  month: state.month
}))(Months);
