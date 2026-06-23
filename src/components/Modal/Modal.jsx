import React from 'react';
import './modal.css';
import {BsPatchCheckFill} from 'react-icons/bs'


const Modal = ({ closeModal, project }) => {
   
  const {name, image, deployedLink, githubLink, description, toolsUsed} = project;

  return (
    <>
        <article className="container modal-overlay" onClick={closeModal}>

          <div className="modal-content">  

          <div className='modal-button__container'>         
            <button className="modal-close__button" onClick={closeModal}>✖</button>
          </div>        

          <div className="modal-title">
                <div className="modal-image">
                    <img src={image} alt={`${name} project screenshot by Ranjan Sharma`} />
                </div>
          
                <h4>{name}</h4>
          </div>

          <p className="modal-description">
            {description}{" "}         
            Checkout the {" "}
            <a href={githubLink} target='_blank' rel="noreferrer">source code </a>
            and the  <a  
                  href={deployedLink}
                  target='_blank'
                  rel="noreferrer"
              >Live Demo</a>
 
          </p>
         


          <div className="modal-tools__container">       
              <h4 className='modal-tools__header'>Tools Used</h4>
              <ul className="modal-tools">
                    {toolsUsed.map((tool,i) => (
                      <li key={i} className='modal-tool__item'>
                      <BsPatchCheckFill className="modal__tools-icon"/>
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
