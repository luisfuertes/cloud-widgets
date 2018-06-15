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
import TextInput from 'cloud-widgets/lib/TextInput'
import styled from 'styled-components'

const TextInputStyled = styled(TextInput)`
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
import Button from 'cloud-widgets/lib/Button'
import styled from 'styled-components'

const ButtonStyled = styled(Button)`
  button {} 
  button span {} //label
  button span div {} //spinner
` 
```