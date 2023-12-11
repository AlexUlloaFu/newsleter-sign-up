import IconList from "../images/icon-success.svg"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setEmail } from "../reducers/emailReducer"


const SuccessCard = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    let email = useSelector ( ({email}) => email)

    const onDismissMessage = () => {
        dispatch(setEmail(null))
        navigate('/')
    }

    return (
        <div className=" rounded-3xl shadow-2xl bg-White h-full w-full sm:h-[50%] sm:w-[50vh] p-10">
            <img className=" w-[17%] sm:-mt-2 mt-[15vh]" src={IconList} alt="succes icon"/>
            <h1 className=" text-[6.2vh] font-Roboto font-semibold tracking-tight leading-none mb-4 mt-6 text-DarkGrey">Thanks for subscribing!</h1>
            <p className=" font-Roboto text-[2.2vh] sm:text-[1.6vh] mb-1 w-full text-DarkGrey">A confirmation email has been sent to <span className=" font-semibold">{email}</span>. Please open it and click the button inside to confirm your subscription</p>
            <button onClick={onDismissMessage} className=" font-Roboto text-center text-White bg-DarkGrey rounded-md w-full h-[7vh] sm:h-[15%] text-[1.7vh] mt-[27vh] sm:my-5 hover:bg-gradient-to-r from-Pink to-Orange">Dismiss message</button>
        </div>
    )
}

export default SuccessCard