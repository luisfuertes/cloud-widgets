
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
