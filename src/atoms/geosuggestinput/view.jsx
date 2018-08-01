// React
import React from 'react';
import Geosuggest from 'react-geosuggest'


export default class extends React.Component {

  static defaultProps = {
    id                  : null,
    label               : '',
    value               : null,
    placeholder         : '',
    validation          : null,
    onChange            : () => {},
    onBlur              : () => {},
    onFocus             : () => {},
    autoFocus           : false,
    className           : '',
    country             : null,
    types               : [],
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

  updateValue(value) {
    this._geoSuggest.update(value)
  } 

  _onSuggestSelect(suggest) {
    this._geoSuggest.blur();
    this.validate(suggest)
    this.props.onChange(suggest)
  }

  _onChange() {
    this.props.onChange(null)
    this.validate(null)
  }

  _onBlur(e) {
    this.props.onBlur(e)
  }

  _onFocus(e) {
    this.setState({ touched: true })
    this.props.onFocus(e)
  }

  render() {
    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <Geosuggest
            ref             = { el => this._geoSuggest = el }
            id              = { this.props.id }
            placeholder     = { this.props.placeholder }
            onChange        = { (v) => this._onChange(v) }
            onSuggestSelect = { (suggest) => this._onSuggestSelect(suggest) }
            onFocus         = { e => this._onFocus(e) }
            onBlur          = { e => this._onBlur(e) }
            initialValue    = { this.props.value ? this.props.value.description : '' }
            types           = { this.props.types }
            country         = { this.props.country }
            location        = { this.props.location }
        />
        { this.state.touched && this.state.error ? <span>{ this.state.error }</span> : null }
      </div>
    )
  }
}
