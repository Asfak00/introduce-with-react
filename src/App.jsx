import React from 'react';
import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";

const App = () => {

    function handleOnClick(value) {
        console.log(value)
    }

    function handleInputChange(event) {
        console.log(event.target.value)
    }

    return (
        <>
            <Button getClicked={handleOnClick} variant='outlined' label='click me' className='px-8'/> <br/>
            <Input onChange={handleInputChange} type='checkbox' placeholder='Enter something' />
        </>
    );
};

export default App;