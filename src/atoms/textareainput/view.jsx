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
        onBlur              : () => {},
        onFocus             : () => {},
        rows                : null,
        cols                : null,
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
        if( this.props.validation ) {
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
        this.validate()
        this.props.onBlur(e)
    }
    
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
            <div>
                <label htmlFor={ this.props.id } >{ this.props.label }</label>
                <textarea 
                    id              = { this.props.id } 
                    type            = { this.props.type } 
                    onChange        = { (e) => this._onChange(e) } 
                    onFocus         = { (e) => this._onFocus(e) } 
                    onBlur          = { (e) => this._onBlur(e) } 
                    value           = { this.props.value } 
                    placeholder     = { this.props.placeholder } 
                    rows            = { this.props.rows } 
                    cols            = { this.props.cols }
                    autoComplete    = { "off" }
                />
                { this.state.touched && this.state.error && <span>{ this.state.error }</span> }
            </div>
        )
    }

}