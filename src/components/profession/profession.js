import React from 'react';
import { NavLink } from "react-router-dom";
import ProfessionLogo from '../main/profession/profession-logo';
import ProfessionVideo from './professionalVideo';
import ProfessionList from './professionList';
import StrelkaRight from './../../img/strelka-right.svg'

const Profession = (props) => {
  const {...other} = props;
  return (
    <div className="profession">
      <ProfessionLogo />
      <NavLink className='profession_strelka' to="/courses"><img  src={StrelkaRight} alt=""/></NavLink>
      
      <div className="profession_second-block"> 
       <ProfessionVideo professionSelected={props.professionSelected}/>
       <ProfessionList  {...other} />
       <NavLink className="button button_large profession_btn" to="/courses">Перейти к курсам</NavLink>
      </div>
      
      
      
      
    </div>
  );
}

export default Profession;