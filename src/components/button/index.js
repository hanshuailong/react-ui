import React, { Component } from 'react'

export default class index extends Component {
  render() {
    let { text } = this.props;
    return (
      <div>
        <button className="btn">这是一个组件按钮{text}</button>
      </div>
    )
  }
}













// /**
//  * @Description: 
//  * @Author: hansl-a
//  * @Date: 2021-08-04 17:25:16
//  * @LastEditors: hansl-a
//  * @LastEditTime: 2021-08-04 17:25:19
//  */
// // src/components/button/index.js

// import React from 'react';
// import PropTypes from 'prop-types';
// import './index.css';

// const Button = ({ text }) => <button className="btn">这是一个组件按钮{text}</button>

// Button.propTypes = {
//   text: PropTypes.any
// };

// export default Button;

