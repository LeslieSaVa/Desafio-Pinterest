import React from 'react';
import './modal.css'

function Modal (props) {
        return (
            <div className="container-modal" onClick={(e)=>{
                if(e.target.getAttribute("class") === "container-modal"){
                    props.pushClick()
                }
                }}>
                <i className="fas fa-angle-left"></i>    
            <div className="modal">
                <div className="header-modal">
                    <i className="fas fa-ellipsis-h"></i>
                    <button className="btn-send"><i className="fas fa-upload"></i> Enviar</button>
                    <button className="btn-save"><i className="fas fa-thumbtack"></i> Guardar</button>
                </div>

                <div className="containerImgyText">
                    <div className="img-container">
                        <img className="img-modal" src={props.imgUrl} alt=""/>
                    </div>
                    <div className="text-container">
                        <h5>{props.titlefoto}</h5>
                        <button className="btn-follow">Seguir</button>
                        <button className="link">goosesglitter.com</button>
                        {/* <p className="parrafo">You have your tree, your house and your<br/> 
                        dinner table decorated already. <br/> 
                        What are you going to do after finishing <br/> 
                        your holiday decoration and <br/> 
                        wrapping all the gifts? Don't forget<br/> 
                        to glam up yourself...Más
                        </p> */}
                        <p className="parrafo">{props.descriptionreal}</p>
                        <hr className="line"/>
                        <p className="text">Fotos y comentarios</p>
                        <button className="btn-numberfotos">3 Fotos</button>
                        <p className="coments">Comentarios</p>
                    </div>
                </div>

            </div>
            </div>
        )
}

export default Modal;