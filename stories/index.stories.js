import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from '../src/atoms/button'
import TextInput from '../src/atoms/textinput'

storiesOf('Atoms/Button', module)
  .add('default', () => <Button label="ok" />)
  .add('isFetching', () => <Button label="ok" isFetching={true} />)
  .add('disabled', () => <Button label="ok" enabled={false} />)
  .add('click', () => <Button label="ok" onClick={action('clicked')} />)

storiesOf('Atoms/TextInput', module)
  .add('all', () => <TextInput label="name" value="daniel" placeholder="name" error="a" />)
  .add('label', () => <TextInput label="name" />)
  .add('placeholder', () => <TextInput placeholder="name" />)
  .add('value', () => <TextInput value="daniel" />)
  .add('password', () => <TextInput label="password" value="12345" type="password" />)
