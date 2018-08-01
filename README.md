
## Storybook
[Storybook documentation](https://luisfuertes.github.io/cloud-widgets/index.html)    


## Inputs

### TextInput

| Prop name     | Type     | Description                            | Default    |
|---------------|----------|----------------------------------------|------------|
| id            | String   | Input id                               | null       |
| label         | String   | Input label                            | ""         |
| value         | String   | Input value                            | ""         |
| type          | String   | Input type                             | "text"     |
| placeholder   | String   | Input placeholder                      | ""         |
| validation    | Function | Function to validate input             | () => {}   |
| onChange      | Function | onChange callback                      | () => {}   |
| onBlur        | Function | onBlur callback                        | () => {}   |
| onFocus       | Function | onFocus callback                       | () => {}   |
| autoFocus     | Bool     | Input autofocus                        | false      |
| className     | String   | Input classname                        | ""         |

### TextAreaInput
### SelectInput
### MultiSelectInput
### Checkbox
### Button
### TagInput
### RadioInput
### RadioGroup
### GeosuggestInput


## Installation
For install:
`npm install cloud-widgets --save`

## Usage
```
import _ from 'lodash'
import { FormUtils, TextInput, TextAreaInput, SelectInput, MultiSelectInput, TagInput, Button } from 'cloud-widgets'

...

  constructor(props) {
    super(props)
    this.formInputs = {}
  }

  _onSubmit(e) {

    // Function in FormUtils to validate inputs
    if (FormUtils.validateForm(this.formInputs)) {
      const data = {
        firstName: _.get(this.state, 'firstName', ''),
        lastName: _.get(this.state, 'lastName', ''),
      }
      this.props.onSubmit(data)
    }
  }

  _mandatoryValidate(value) {

    // Validation function example
    if (value != null && value != '') {
      return { isValid: true, error: '' }
    } else {
      return { isValid: false, error: 'Mandatory field' }
    }
  }
    
...

  render() {
    return (
      <TextInput
        ref={i => {
          this.formInputs.firstName = i
        }}
        id={'firstName'}
        label={'FirstName:'}
        value={this.state.firstName}
        placeholder={' '}
        onChange={firstName => this.setState({ firstName })}
        validation={v => this._mandatoryValidate(v)}
      />
    )
  }

```

