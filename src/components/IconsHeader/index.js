import "./style.css";
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'

const iconsHeaders = [perfil, sacola];

function IconsHeader () {
      return(
        <ul className="icons">
          {iconsHeaders.map((icon) => (
            <img src={icon} alt="icon" className="icon-headers" />
          ))}
        </ul>
      )  
}

export default IconsHeader