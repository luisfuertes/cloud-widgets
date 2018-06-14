import React, { Component } from 'react'
import Spinner from 'react-spinkit'

export default class View extends Component {
  static defaultProps = {
    label: '',
    onClick: null,
    isFetching: false,
    enabled: true
  }

  _handleClick(e) {
    if (this.props.enabled && !this.props.isFetching) {
      this.props.onClick && this.props.onClick(e)
    }
  }

  _renderContent() {
    if (this.props.isFetching) {
      return (
        <span className="button-label">
          <Spinner color={'#11A8AD'} name={'circle'} fadeIn={'none'} />
        </span>
      )
    } else {
      return <span className="button-label">{this.props.label}</span>
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <button type={this.props.onClick ? 'button' : 'submit'} onClick={this._handleClick.bind(this)}>
          {this._renderContent()}
        </button>
      </div>
    )
  }
}
