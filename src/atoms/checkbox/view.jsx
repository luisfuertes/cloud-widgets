// React
import React from 'react';

export default class View extends React.Component {

    static defaultProps = {
        id                  : null,
        label               : '',
        value               : '',
        type                : 'checkbox',
        placeholder         : '',
        validation          : null,
        onChange            : () => {},
        onBlur              : () => {},
        onFocus             : () => {},
        checkstatus         : false,
        className           : '',
    }

    constructor( props ) {
        super( props )
        this.state = {
            touched : false,
            valid   : true,
            error   : '',
        }
    }
    
    validate( v ) {
        if( this.props.validation ) {
            const checkstatus = ( v != null ) ? v : this.props.checkstatus
            const validation = this.props.validation( checkstatus )
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
        this.props.onBlur(e)
    }

    _onFocus(e) {
        this.setState({ touched: true })
        this.props.onFocus(e)
    }

    _onChange(e) {
        const checkstatus = e.target.checked
        this.validate( checkstatus )
        this.props.onChange( checkstatus )
    }

    render() {
    
        return (
            <div className={ this.props.className }>
                <label htmlFor={ this.props.id } >{ this.props.label } </label>
                <input 
                    id          = { this.props.id }
                    type        = { this.props.type } 
                    onChange    = { (e) => this._onChange(e) } 
                    onFocus     = { (e) => this._onFocus(e) } 
                    onBlur      = { (e) => this._onBlur(e) } 
                    value       = { this.props.value } 
                    checked     = { this.props.checkstatus }
                />
                { this.state.touched && this.state.error && <span>{ this.state.error }</span> }
            </div>
        )
    }

}