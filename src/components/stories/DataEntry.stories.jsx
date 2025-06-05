import React, { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Checkbox from '../Checkbox/Checkbox';

export default {
    title: 'Data Entry',
};

export const TextInputs = () => {
    const [value, setValue] = useState('');

    return (
        <div className="space-y-6">
            <TextInput
                id="name"
                label="Name"
                value={value}
                placeholder="Enter your name"
                onChange={(e) => setValue(e.target.value)}
            />

            <TextInput
                id="email"
                label="Email"
                placeholder="email@example.com"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                error="Invalid email"
            />

            <TextInput
                id="disabled"
                label="Disabled Field"
                value=""
                onChange={() => { }}
                disabled
                placeholder="Can't type here"
            />
        </div>
    );
};

export const Checkboxes = () => {
    const [checked, setChecked] = useState(true);

    return (
        <div className="space-y-4">
            <Checkbox
                id="check1"
                label="Accept Terms & Conditions"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />

            <Checkbox
                id="check2"
                label="Disabled Checkbox"
                checked={false}
                onChange={() => { }}
                disabled
            />
        </div>
    );
};
