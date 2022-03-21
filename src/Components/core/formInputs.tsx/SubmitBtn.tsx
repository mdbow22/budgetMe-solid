import { Component } from "solid-js";

interface SubmitBtnProps {

}

const SubmitBtn: Component = (props) => {
    return (
        <button type='submit'
            className='shadow-md active:shadow-inner py-1 px-3 bg-violet-600 text-white'>
            Submit
        </button>
    )
}

export default SubmitBtn;