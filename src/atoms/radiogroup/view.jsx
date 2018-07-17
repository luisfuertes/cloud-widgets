import React from 'react'
import RadioInput from '../radioinput/'
import _ from 'lodash'

export default class View extends React.Component {
  static defaultProps = {
    id: null,
    label: '',
    value: '',
    type: 'radio',
    validation: null,
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
    containerClassName: '',
    className: '',
    textPosition: 'right',
    options: [],
  }

  constructor(props) {
    super(props)
    this._onChange = this._onChange.bind(this)
    this._onBlur = this._onBlur.bind(this)
    this._onFocus = this._onFocus.bind(this)
    this.state = {
      touched: false,
      valid: true,
      error: '',
    }
  }

  validate(v) {
    if (this.props.validation) {
      const value = v != null ? v : this.props.value
      const validation = this.props.validation(value)
      this.setState({ valid: validation.isValid, error: validation.error, touched: true })
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

  _onFocus(e) {
    this.setState({ touched: true })
    this.props.onFocus(e)
  }

  _onChange(v) {
    this.props.onChange(v)
  }

  render() {
      const { options, textPosition, className, containerClassName } = this.props
        return (
        <div className={containerClassName}>
            <label>{this.props.label}</label>
            { _.map(options, (opt, i) => {
                return ( 
                    <RadioInput 
                        checked={this.props.value == opt.value ? true : false} 
                        onChange={ this._onChange } 
                        onBlur={ this._onBlur } 
                        onFocus={ this.onFocus } 
                        textPosition={textPosition} 
                        label={opt.label} 
                        value={opt.value} 
                        className={className}
                    />
                )
            }) }
            {this.state.touched && this.state.error && <span>{this.state.error}</span>}
        </div>
        )
  }
}
