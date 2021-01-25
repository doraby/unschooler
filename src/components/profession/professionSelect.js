import React from 'react';

const ProfessionSelect = (props) => {
  const {professionSelected} = props;
  return (
    <div className='profession_select'>
      {professionSelected}
    </div>
  );
}

export default ProfessionSelect;