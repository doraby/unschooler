import React from 'react';
import { NavLink } from "react-router-dom";
import ProfessionLogo from '../main/profession/profession-logo';
import ProfessionVideo from './professionalVideo';
import ProfessionList from './professionList';

const Profession = (props) => {
  const {...other} = props;
  return (
    <div className="profession">
      <ProfessionLogo />
      <ProfessionVideo professionSelected={props.professionSelected}/>
      <ProfessionList  {...other} />
      <NavLink className="button button_large" to="/courses">Перейти к курсам</NavLink>
    </div>
  );
}

export default Profession;