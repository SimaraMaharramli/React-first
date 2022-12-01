import React, { useState } from 'react'
import { Button } from 'reactstrap';

import '../assets/css/index.css'



function Index() {

    const [count, setCount] = useState(0);

    const [isMarried, setIsMarried] = useState(false);

    const[inputText,setInputText] = useState("");

    let countLimit = 10;

    // function married(){
    //     setIsMarried(true);
    // }

    // function divorced(){
    //     setIsMarried(false);
    // }

    const increment = () =>{
        document.getElementById("count-text").nextElementSibling.nextElementSibling.classList.remove("d-none");
        setCount(count + 1);

        if(document.getElementById("count-text").innerText == (countLimit - 1)){
            document.getElementById("count-text").nextElementSibling.classList.add("d-none")
        }
    }


    function decrement(elem){
        if(document.getElementById("count-text").innerText < (countLimit + 1)){
            elem.previousElementSibling.classList.remove("d-none");
        }

        if(document.getElementById("count-text").innerText == 1){
            elem.classList.add("d-none")
        }

        setCount(count - 1);
      
    }


    function changeText(elem){
        setInputText(elem)
    }

    function validateInput(elem){
        if(elem.value === ""){
            elem.nextElementSibling.classList.remove("d-none")
            return;
        }

        elem.nextElementSibling.classList.add("d-none")
    }



    return (
        <div className='container'>
            <div className='carusel-image'>
                <img src={require('../assets/img/test.jpg')} />
            </div>


            {/* 
            {
                isMarried ?  <h4>Married</h4> : null
            } */}

            {/* <input onChange={(e)=>changeText(e.target)} type="text" className='form-control' />

            <input onChange={(e)=>validateInput(e.target)} type="text" className='form-control' />
            
            <span className='text-danger d-none'>Dont be empty</span>

            <h1 id='real-text'>{inputText}</h1>

            <h3 id='count-text'>{count}</h3>

            <Button id='inc-btn' onClick={increment} color='info'>Increment</Button>
            <Button id='dec-btn' className='d-none' onClick={(e)=>decrement(e.target)} color='primary'>Decrement</Button> */}
        </div>
    )
}

export default Index
