import "./style.css";

const textOptions = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OptionsHeader () {
    return (
        <ul className="options">
          {textOptions.map((text) => (
            <li className="item-option">
              <p>{text}</p>
            </li>
          ))}
        </ul>
    )
}

export default OptionsHeader