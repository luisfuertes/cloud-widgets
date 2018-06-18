export function validateForm(formInputs) {
  let valid = true
  _.map(formInputs, input => {
    if (input.validate != null) {
      if (!input.validate()) {
        valid = false
      }
    }
  })
  return valid
}

export function emailValidate(value) {
  if (!value) {
    return { isValid: false, error: 'Campo obligatorio' }
  }
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (regex.test(value)) {
    return { isValid: true, error: '' }
  } else {
    return { isValid: false, error: 'Introduce un email válido' }
  }
}

export function passwordValidate(value1, value2, minCharacters = 7) {
  if (value1 && value2 && value1 != value2) {
    return { isValid: false, error: 'Las contraseñas no coinciden' }
  } else if (value1.length > minCharacters) {
    return { isValid: true, error: '' }
  } else {
    return { isValid: false, error: 'La contraseña debe tener al menos ' + minCharacters + ' caracteres' }
  }
}

export function phoneValidation(phone) {
  //let regex = /^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/
  let regex = /^[967]{1}[0-9]{8}$/
  if (!phone) {
    return { isValid: false, error: 'Campo obligatorio' }
  } else if (phone.length < 9 || !regex.test(phone)) {
    return { isValid: false, error: 'Introduce un teléfono válido' }
  } else {
    return { isValid: true, error: '' }
  }
}
