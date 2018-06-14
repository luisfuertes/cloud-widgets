import React from 'react'
//import InputTextStyled from './styled'

export default class View extends React.Component {
  static defaultProps = {
    id: null,
    label: '',
    value: '',
    type: 'text',
    placeholder: '',
    validation: null,
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
    autoFocus: false
  }

  constructor(props) {
    super(props)
    this.state = {
      touched: false,
      valid: true,
      error: ''
    }
  }

  validate(v) {
    if (this.props.validation) {
      const value = v != null ? v : this.props.value
      const validation = this.props.validation(value)
      this.setState({ valid: validation.isValid, error: validation.error })
      return validation.isValid
    } else {
      return true
    }
  }

  setValid(touched, valid, error) {
    this.setState({ touched, valid, error })
  }

  _onBlur(e) {
    this.validate()
    this.props.onBlur(e)
  }
git
  _onFocus(e) {
    this.setState({ touched: true })
    this.props.onFocus(e)
  }

  _onChange(e) {
    const value = e.target.value
    this.props.onChange(value)
  }

  render() {
    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          id={this.props.id}
          type={this.props.type}
          onChange={e => this._onChange(e)}
          onFocus={e => this._onFocus(e)}
          onBlur={e => this._onBlur(e)}
          value={this.props.value}
          placeholder={this.props.placeholder}
          autoComplete={'off'}
          autoFocus={this.props.autoFocus}
        />
        {this.state.touched && this.state.error && <span>{this.state.error}</span>}
      </div>
    )
  }
}
