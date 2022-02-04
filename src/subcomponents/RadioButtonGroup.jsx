import React, { useState, useEffect } from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { teal } from '@mui/material/colors'

export const RadioButtonGroup = ({ ToggleChecked, ToggleUnchecked }) => {
  const [checkedValue, setCheckedValue] = useState(() => {
    const storedValue = localStorage.getItem('value')
    return storedValue ? JSON.parse(storedValue) : 'Cash On Delivery'
  })

  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(checkedValue))
  }, [checkedValue])
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        name="radio-buttons-group"
        value={checkedValue}
        onChange={(e) => {
          setCheckedValue(e.target.value)
        }}
      >
        <FormControlLabel
          value="Cash On Delivery"
          control={
            <Radio
              onClick={ToggleUnchecked}
              sx={{
                color: teal[800],
                '&.Mui-checked': {
                  color: teal[600],
                },
              }}
            />
          }
          label="Cash On Delivery (COD)"
        />
        <FormControlLabel
          value="Online Payment"
          control={
            <Radio
              onClick={ToggleChecked}
              sx={{
                color: teal[800],
                '&.Mui-checked': {
                  color: teal[500],
                },
              }}
            />
          }
          label="Online Payment"
        />
      </RadioGroup>
    </FormControl>
  )
}
