import * as React from 'react';
import { TextField, Autocomplete } from '@mui/material';


export default function SearchBox({ optionsData, label, displayText, setSelectedValue }) {
    const [value, setValue] = React.useState(displayText);
    const [inputValue, setInputValue] = React.useState('');

    return (

        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                setSelectedValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={optionsData}
            sx={{ width: 250 }}
            renderInput={(params) => <TextField {...params} label={label} />}
        />

    );
}
