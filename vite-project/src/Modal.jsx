import React from 'react';

const Modal = ({ modalDisplay, setModalDisplay }) => { 

  const closeModal = () => {
    setModalDisplay(false); 
  };
    
  if (!modalDisplay) return null;
  
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
              <h2>Rules</h2>
              <p id="rulesText">
                {`Each player chooses a play: rock, paper, or scissors. If both players choose the same play, the round is a tie. 
                Otherwise, rock beats scissors, paper beats rock, and scissors beat paper. A player cannot play rock twice in a row.`}
              </p>
          </div>
      </div>
  );
};

export default Modal;