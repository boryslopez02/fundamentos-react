import img from "./assets/images/1026-200x300.jpg";
import PropTypes from 'prop-types';

import WelcomeText from "./components/WelcomeText";
import MyButton from "./components/MyButton";
import ListFruits from "./components/fruits/ListFruits";

import ButtonState from "./components/ButtonState";

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
}

const App = () => {
    const title = "Titulo de prueba";
    let user = true;

    const fruits = ["🍉", "🍊", "🍋", "🍍", "🍒"];
    const fruits2 = ["🍇", "🍏", "🍎", "🍒"];

    return (
        <>
            <ButtonState/>
            
            <h1>{title}</h1>
            <img src={img} />

            <WelcomeText user={user}/>

            <ListFruits fruits={fruits} />
            <ListFruits fruits={fruits2} />

            <MyButton text='Save'/>
        </>
    )
}

export default App;