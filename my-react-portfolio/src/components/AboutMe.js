import MyPhoto from '../assets/images/myphoto.jpg';
import './AboutMe.css'

function AboutMe() {
return (
    <section className="about-me" id="about-me">
        <h3>About Me</h3>
        <img  src={MyPhoto} />
        <p>
        Presently, I manually test new features to ensure our product quality. I do this by reviewing project management methodologies like agile (scrum), going through Microsoft training, or playing with our API calls through Postman.
        <br />
        Skills: VMWare, VirtualBox, Cisco Meraki, OpenDNS, Wireshark, Nmap, Burp Suite, Metasploit, HTML, CSS, Bootstrap, Javascript, Node.js, Express.js, MySQL, ORM- Object Relational Mapping, MVC - Model Views Controllers, Agile Methodology, Azure DevOps, Jira, SharePoint, Project Online, PWA - Project for the Web.
        <br />
        I enjoy meeting new people and hearing new perspectives. Feel free to reach out to me if you wish to talk!
        </p>
    </section>
);
}

export default AboutMe;