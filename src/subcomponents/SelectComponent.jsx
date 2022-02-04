import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Field } from 'formik';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const colors = [
    'Black',
    'Blue',
    'Green',
    'Pink'
];

const getStyles = (color, productColor, theme) => {
    return {
        fontWeight: 
            productColor.indexOf(color) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

export const ColorSelect = () => {
    const theme = useTheme();
    const [productColor, setProductColor] = useState([]);

    const handleChange = (e) => {
        const {
            target: { value },
        } = e;
        setProductColor(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <div>
            <FormControl  sx={{ width: 275 }}>
                <InputLabel id="multiple-select">Colors</InputLabel>
                <Field as={Select} labelId='multiple-select'
                id='multiple-color'
                multiple
                value={productColor}
                onChange={handleChange}
                input={<OutlinedInput label="Color" />}
                MenuProps={MenuProps}
                name="color"
                >
                {
                    colors.map((color) => (
                        <MenuItem
                        key={color}
                        value={color}
                        style={getStyles(color, productColor, theme)}
                        >
                            {color}
                        </MenuItem>
                    ))
                }
                </Field>
            </FormControl>
        </div>
    )
}