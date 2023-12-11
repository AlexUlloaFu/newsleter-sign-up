import { useState, useEffect } from "react"
import IlustrationDesktop from "../images/illustration-sign-up-desktop.svg"
import IlustrationMobile from "../images/illustration-sign-up-mobile.svg"
import ListElement from "./ListElement"
import { useNavigate } from "react-router-dom"

import {setEmail} from "../reducers/emailReducer"
import { useDispatch } from "react-redux"

const FormCard = () => {

    const [inputValue,setInputValue] = useState("")
    const [errorMessage,setError] = useState("")
    const [ilustrationVal , setIlustration] = useState(IlustrationDesktop)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const handleResize = () => {
            setIlustration(window.innerWidth >= 768 ? IlustrationDesktop : IlustrationMobile);
        };
        window.addEventListener('resize', handleResize);
        // Clean up function
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const HandleChange = (e) => {
        let val = e.target.value
        if(!isValidEmail(val)){
            setError("Valid email required")
        }
        else setError(null)
        
        setInputValue(val)
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        if(!isValidEmail(inputValue))
            return setError("Valid email required")

        dispatch( setEmail(inputValue) )
        navigate('/success')
    }

    return (
        <div className=" sm:rounded-3xl shadow-2xl sm:w-[55vw] w-full bg-White  flex  sm:flex-row flex-col sm:p-3">
            <div className="sm:p-10  p-5 sm:order-1 order-2">
                <h1 className=" sm:text-[6.2vh] text-[5vh] text-DarkGrey  font-Roboto font-semibold">Stay updated!</h1>
                <p className=" font-Roboto text-[2.2vh] w-full mt-5 text-DarkGrey">Join 60,000+ product managers receiving montlhy updates on:</p>
                <ul className="my-5">
                   <ListElement text={"Product discovery and building what matters"}/> 
                   <ListElement text={"Measuring to ensure updates are a success"}/> 
                   <ListElement text={"And much more!"}/> 
                </ul>
                <form onSubmit={HandleSubmit}>
                    <div className="w-full flex justify-between mb-1 text-DarkGrey">
                        <p className="font-Roboto sm:text-[1.5vh] ">Email address</p>
                        {errorMessage &&
                            <p className="font-Roboto sm:text-[1.5vh] text-Tomato">{errorMessage}</p>
                        }
                    </div>
                    <input
                        className={`border sm:rounded-md rounded-xl sm:h-[5vh] h-[7vh] sm:text-[2vh] w-full p-5 hover:cursor-pointer ${errorMessage && "bg-LightPink border-Orange text-Orange"}`}
                        type="text"
                        value={inputValue}
                        onChange={HandleChange}
                    />
                    <button disabled={errorMessage} className=" font-Roboto text-center text-White bg-DarkGrey sm:rounded-lg rounded-xl w-full h-[7vh] text-[2vh] sm:my-3 mt-5 enabled:hover:bg-gradient-to-r from-Pink to-Orange disabled:bg-Grey disabled:opacity-50 disabled:cursor-not-allowed" type="submit">Subscribe to monthly newsletter</button>
                </form>
            </div>
            <img className=" sm:order-2 order-1 sm:w-[50%] sm:h-full sm:p-1 sm:my-0" src={ilustrationVal} alt="Ilustration"/>
        </div>
    )
}

export default FormCard