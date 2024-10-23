import img from "./assets/images/1026-200x300.jpg";
import PropTypes from 'prop-types';


const WelcomeText = ({user}) => (user ? <h3>Online</h3> : <h3>Offline</h3>);

const MyButton = ({text}) => {
    return <button>{text}</button>
};

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
}

const ItemFruits = (props) => {
    return (
        <li>{props.fruit}</li>
    )
}

const App = () => {
    const title = "Titulo de prueba";
    const fruits = ["🍉", "🍊", "🍋", "🍍", "🍒"];
    let user = true;


    return (
        <>
            <h1>{title}</h1>
            <img src={img} />

            <WelcomeText user={user}/>

            <ul>
                {
                    fruits.map((fruit, index) => (
                        <ItemFruits key={index} fruit={fruit} />
                    ))
                }
            </ul>

            <MyButton text='Save'/>
        </>
    )
}

export default App;