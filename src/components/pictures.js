import React from 'react';
import './pictures.css'

function Pictures (props) {
    
    return (

        <div className="row">
            <div className="column">
                <img className="img" src={props.url} alt="auto" onClick={()=>props.pushClick(props)}/>
                {/* <h2>Title Goes Here</h2>
                <p>Loremdlkfjsdlfkdsjflkdsjflkd
                    sjfldskjflsdfjsdlkfjdslfkjdsflsdjfdskf
                    dfjksdlfjdslfkjsdflsjdfl
                    ksdjflkdsjfklsdjfldksjfdsklfjlsd
                </p> */}
            </div>
        </div>

    )
}

export default Pictures;


    {/* <div class="flex-container">
        <section id="proyects" class="container22">
        <div class="container2">
            <div class="card">
                <div class="img-box">
                    <img class="poke-img" src={props.url} alt=""/>
                </div>
                <div class="content">
                    <h2>Happy With Allergies</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
        </section>
    </div>    */}
