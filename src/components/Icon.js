import React from 'react';
import {GoMarkGithub} from 'react-icons/go'


const MiddleHeading = () => {
     return (

        <div className="github">
            <a target="_blank" rel="noopener noreferrer" className='githubLink' href="https://github.com/gulceabaci">
          <GoMarkGithub className="githubicon"></GoMarkGithub>
          </a>
      </div>

     );
 };

 export default MiddleHeading;