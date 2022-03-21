import { Component } from "solid-js";

interface TextInputProps {
    name: string;
    labelText: string;
    type?: string;
    required?: boolean;
    value: string | number | string[];
    placeholder?: string;
    onInput: (value:any) => void;
}

const TextInput: Component<TextInputProps> = (props) => {

    const type = props.type ?? 'text';

    return (
        <div className='flex flex-col mb-3'>
            <label className='mb-2 font-semibold' for={props.name}>{props.labelText}</label>
            <input 
                className='border py-1 px-2 shadow'
                type={type} 
                name={props.name} 
                id={props.name} 
                required={props.required} 
                value={props.value} 
                placeholder={props.placeholder}
                onInput={props.onInput} />
        </div>
    )
}

export default TextInput