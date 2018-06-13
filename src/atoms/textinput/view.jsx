// React
import React from 'react';

export default class View extends React.Component {

  static defaultProps = {
    id                  : null,
    label               : '',
    value               : '',
    type                : 'text',
    placeholder         : '',
    validation          : null,
    onChange            : () => {},
    containerClassName  : '',
    inputClassName      : '',
    labelClassName      : '',
    errorClassName      : '',
    autoFocus           : false,
  }

  constructor(props) {
    super(props)
    this.state = {
      touched: false,
      valid: true,
      error: '',
    }
  }

  validate(v) {
    if(this.props.validation) {
      const value = ( v != null ) ? v : this.props.value
      const validation = this.props.validation(value)
      this.setState({ touched: true, valid: validation.isValid, error: validation.error })
      return validation.isValid
    } else {
      return true
    }
  }

  setValid(touched, valid, error) {
    this.setState({ touched, valid, error })
  }

  _onBlur(e) {
    //this.setState({ touched: false, valid: true })
    this.validate()
  }

  _onFocus(e) {
    //this.validate()
  }

  _onChange(e) {
    let value = e.target.value
    //this.validate(value)
    this.props.onChange(value)
  }

  render() {
    
    return (

        <div>
          <label htmlFor={ this.props.id } >{ this.props.label }</label>
          <input 
            id            = { this.props.id } 
            type          = { this.props.type } 
            onChange      = { (e) => this._onChange(e) } 
            onFocus       = { (e) => this._onFocus(e) } 
            onBlur        = { (e) => this._onBlur(e) } 
            value         = { this.props.value } 
            placeholder   = { this.props.placeholder } 
            autoComplete  = { "off" }
            autoFocus     = { this.props.autoFocus }
          /> 
          { this.state.error && <span>{ this.state.error }</span> }
      </div>
    )
  }
}
