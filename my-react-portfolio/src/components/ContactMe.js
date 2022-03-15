import Resume from '../assets/CarolinePastorelli_Resume.pdf';


function ContactMe(){
 return(
     <section id="contact-me" className="contact">
         <h3>Contact Me</h3>
         <div className="links">
            <ul>
                <li>
                    <a href="https://github.com/cpastorelli/">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/carolinedawespastorelli/">LinkedIn</a>
                </li>
                <li>
                    <a href="mailto:caroline.pastorelli@gmail.com">E-mail</a>
                </li>
                <li>
                    <a href="tel:+7604407712">Phone</a>
                </li>
                <li>
                    <a href={Resume} download="CarolinePastorelli_Resume">Resume (PDF)</a>
                </li>
            </ul>
         </div>
     </section>
 );
}

export default ContactMe;