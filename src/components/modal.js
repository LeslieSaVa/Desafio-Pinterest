import React from 'react';
import './modal.css'

function Modal (props) {
    
        return (
            <div className="container-modal" onClick={(e)=>{
                if(e.target.getAttribute("class") === "container-modal"){
                    props.pushClick()
                }
                }}>
            <div className="modal">
                <div className="img-container">
                    <img src={props.imgUrl} alt=""/>
                </div>
                <div className="text-container">
                    <button>Holi</button>
                    <p>jdshfsdfhsdkfhsdfkjsdfhks</p>
                </div>
            </div>
            </div>
        )
}

export default Modal;