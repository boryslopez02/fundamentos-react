import ItemFruits from "./ItemFruits";

const ListFruits = ({ fruits }) => {
    // const fruits = ["🍉", "🍊", "🍋", "🍍", "🍒"];

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <ItemFruits key={index} fruit={fruit} />
            ))}
        </ul>
    )
}

export default ListFruits;