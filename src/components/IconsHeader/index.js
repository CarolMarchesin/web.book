import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from "styled-components";

const Icon = styled.li`
  margin-right: 30px;
  width: 25px;
  cursor: pointer;
`

const ListIcons = styled.ul`
  display: flex;
  align-items: center;
`

const iconsHeaders = [perfil, sacola];

function IconsHeader () {
      return(
        <ListIcons>
          {iconsHeaders.map((icon) => (
            <Icon><img src={icon} alt="icon"/></Icon>
          ))}
        </ListIcons>
      )  
}

export default IconsHeader