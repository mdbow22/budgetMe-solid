import { Component } from "solid-js";

interface SubmitBtnProps {
    text?: string;
}

const SubmitBtn: Component<SubmitBtnProps> = (props) => {
    return (
        <button type='submit'
            className='shadow-md active:shadow-inner py-1 px-3 bg-violet-600 text-white'>
            {props.text ?? 'Submit'}
        </button>
    )
}

export default SubmitBtn;