import React from 'react';

const ProfessionSelect = (props) => {
  const {professionSelected} = props;
  return (
    <div>
      {professionSelected}
    </div>
  );
}

export default ProfessionSelect;