import IconList from "../images/icon-list.svg"

const ListElement = ({text}) => {
    return(
        <div className=" flex items-start sm:my-2 my-3">
            <img className=" sm:w-[2.2vh] w-[3vh] mt-[2px] sm:mt-0" src={IconList} alt="icon list"></img>
            <p className=" font-Roboto  text-[2.2vh] w-full ml-3 text-DarkGrey">{text}</p>
        </div>
    )
}

export default ListElement