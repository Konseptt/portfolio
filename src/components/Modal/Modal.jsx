import React from 'react';
import './modal.css';
import {BsPatchCheckFill} from 'react-icons/bs'


const Modal = ({ closeModal, project }) => {
   
  const {name, image, deployedLink, githubLink, description, toolsUsed} = project;
  const sameLink = deployedLink === githubLink;

  return (
    <>
        <article className="container modal-overlay" onClick={closeModal}>

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>  

          <div className='modal-button__container'>         
            <button type="button" className="modal-close__button" onClick={closeModal} aria-label="Close project details">✖</button>
          </div>        

          <div className="modal-title">
                <div className="modal-image">
                    <img src={image} alt={`${name} project screenshot by Ranjan Sharma`} width="400" height="200" loading="lazy" decoding="async" />
                </div>
          
                <h3>{name}</h3>
          </div>

          <p className="modal-description">
            {description}{" "}
            {sameLink ? (
              <>
                View the {" "}
                <a href={githubLink} target='_blank' rel="noreferrer">project on GitHub</a>.
              </>
            ) : (
              <>
                Checkout the {" "}
                <a href={githubLink} target='_blank' rel="noreferrer">source code</a>
                {" "}and the{" "}
                <a href={deployedLink} target='_blank' rel="noreferrer">live demo</a>.
              </>
            )}
          </p>

          <div className="modal-tools__container">       
              <p className='modal-tools__header'>Tools Used</p>
              <ul className="modal-tools">
                    {toolsUsed.map((tool,i) => (
                      <li key={i} className='modal-tool__item'>
                      <BsPatchCheckFill className="modal__tools-icon" aria-hidden="true" focusable="false" />
                      <small>{tool}</small>
                    </li>
                    ))}
                </ul>
          </div>

          </div>
        </article>
    </>
  );
};

export default Modal;
