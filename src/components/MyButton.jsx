const MyButton = ({text}) => {

    const handleClickButton = (title) => {
        console.log("Handle click - " + title)
    }

    return <button onClick={() => handleClickButton(text)}>{text}</button>
};

export default MyButton;