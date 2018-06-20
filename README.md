
# Storybook
[Storybook documentation](https://luisfuertes.github.io/cloud-widgets/index.html)    
    
<br>

## TextInput
```
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
```

```
import { Widgets, FormUtils } from 'cloud-widgets'
import styled from 'styled-components'

const TextInputStyled = styled(Widgets.TextInput)`
  label {} 
  input {} 
  span {} //error
` 
```

## Button
```
static defaultProps = {
    label: '',
    onClick: null,
    isFetching: false,
    enabled: true
}
```

```
import { Widgets, FormUtils } from 'cloud-widgets'
import styled from 'styled-components'

const ButtonStyled = styled(Widgets.Button)`
  button {} 
  button span {} //label
  button span div {} //spinner
` 
```


## Usage
```
import _ from 'lodash'
import { FormUtils } from 'cloud-widgets'
import { TextInput, SelectInput, Button } from '../../atoms' // Import from our styled components wrapper

...

  constructor(props) {
    super(props)
    this.formInputs = {}
  }

  _onSubmit(e) {
    e.preventDefault()
    if (FormUtils.validateForm(this.formInputs)) {
      const data = {
        firstName: _.get(this.state, 'firstName', ''),
        lastName: _.get(this.state, 'lastName', ''),
      }
      this.props.addClubContact(data)
    }
  }
    
...

  render() {
    return (
      <TextInput
        innerRef={i => {
          this.formInputs.firstName = i
        }}
        id={'firstName'}
        label={i18n.firstName + '*'}
        value={this.state.firstName}
        placeholder={' '}
        onChange={firstName => this.setState({ firstName })}
        validation={v => FormUtils.mandatoryValidate(v)}
      />
    )
  }

```

