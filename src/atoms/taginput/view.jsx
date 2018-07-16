//React
import React from 'react';

//Components
import { Creatable } from 'react-select';
import 'react-select/dist/react-select.css'

export default class View extends React.Component {

  static defaultProps = {
    value               : null,
    placeholder         : '',
    onChange            : () => {},
    onBlur              : () => {},
    onFocus             : () => {},
    promptTextCreator   : (v) => 'Añadir "'+ v +'"',
    options             : [],
    id                  : null,
    isFetching          : false,
    validation          : null,
    readOnly            : false,
    noResultsText       : 'Sin resultados',
    isFetching          : false,
    labelKey            : 'label',
    valueKey            : 'value',
    clearable           : false,
    backspaceRemoves    : false,
    deleteRemoves       : false,
    searchable          : false,
    className           : '',
    multi               : true,
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
      this.setState({ valid: validation.isValid, error: validation.error, touched: true })
      return validation.isValid
    } else {
      return true
    }
  }

  setValid(touched, valid, error) {
    this.setState({ touched, valid, error })
  }

  _onChange(v) {
    this.validate(v)
    this.props.onChange(v)
  }

  _onFocus(e) {
    this.setState({ touched: true })
    this.props.onFocus(e)
  }

  _onBlur(e) {
    this.props.onBlur(e)
  }

  render() {

    return (
      <div className={this.props.className}>
            { this.props.label && <label> { this.props.label } </label> }
            <Creatable
              options           = { this.props.options }
              onChange          = { (v) => this._onChange(v) }
              onFocus           = { (e) => this._onFocus(e) } 
              onBlur            = { (e) => this._onBlur(e) } 
              value             = { this.props.value }
              isLoading         = { this.props.isFetching }
              disabled          = { this.props.disabled }
              placeholder       = { this.props.placeholder }
              noResultsText     = { this.props.noResultsText }
              isLoading         = { this.props.isFetching }
              labelKey          = { this.props.labelKey }
              valueKey          = { this.props.valueKey }
              clearable         = { this.props.clearable }
              backspaceRemoves  = { this.props.backspaceRemoves }
              deleteRemoves     = { this.props.deleteRemoves }
              searchable        = { this.props.searchable }
              promptTextCreator = { this.props.promptTextCreator }
              multi             = { this.props.multi}
            />
            { this.state.touched && this.state.error && <span>{ this.state.error }</span> }
      </div>
    );
  }
}
