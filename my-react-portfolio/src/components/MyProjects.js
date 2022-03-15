import React, { useState } from 'react';
import MyWork from './MyWork';

function MyProjects() {

    return(
        <section id="my-work" className="my-work">
            <h3>My Work</h3>
            <div className="work-container"> 
                    <MyWork />
            </div>
        </section>
    );
}

export default MyProjects;