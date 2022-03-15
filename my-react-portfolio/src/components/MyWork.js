import './MyWork.css';
import covidTravel from '../assets/images/covidTravel.png';
import dayPlannerSM from '../assets/images/dayPlannerSM.png';
import nodeExample from '../assets/images/nodeExample.png';
import passwordGeneratorSM from '../assets/images/passwordGeneratorSM.png';
import teamProfiles from '../assets/images/teamProfiles.png';
import timedQuizSM from '../assets/images/timedQuizSM.png';
import tripPlannerSM from '../assets/images/tripPlannerSM.png';
import WeatherDashSM from '../assets/images/WeatherDashSM.png';


const myProject = [
    {
        "title": "Password Generator",
        "subtitle": "Create a uniqe password",
        "deployname": "Live Page",
        "link1": "https://cpastorelli.github.io/Password-Generator/", 
        "ghname": "Repository",
        "link2": "https://github.com/cpastorelli/Password-Generator",
        "img": passwordGeneratorSM,
        "alt": "A password being generated based on certain criteria"
    },
    {
        "title": "Day Planner",
        "subtitle": "Plan out your day",
        "deployname": "Live Page",
        "link1": "https://cpastorelli.github.io/day-planner/", 
        "ghname": "Repository",
        "link2": "https://github.com/cpastorelli/Day-Planner",
        "img": dayPlannerSM,
        "alt": "A functional day planner"
    },
    {
        "title": "Timed Quiz",
        "subtitle": "Test your basic technology knowledge",
        "deployname": "Live Page",
        "link1": "https://cpastorelli.github.io/timed-quiz/", 
        "ghname": "Repository",
        "link2": "https://github.com/cpastorelli/timed-quiz",
        "img": timedQuizSM,
        "alt": "A timed quiz setup"
    },
    {
        "title": "Weather Dashboard",
        "subtitle": "Look at the weather in an area of your choice",
        "deployname": "Live Page",
        "link1": "https://cpastorelli.github.io/weather-Dashboard/", 
        "ghname": "Repository",
        "link2": "https://github.com/cpastorelli/weather-Dashboard",
        "img": WeatherDashSM,
        "alt": "Weather dashboard showing the weather forcast for the city of Houston"
    },
    {
        "title": "Trip Planner",
        "subtitle": "Plan your trip by viewing both the weather and events",
        "deployname": "Live Page",
        "link1": "https://amdiebolt.github.io/trip-planner/", 
        "ghname": "Repository",
        "link2": "https://github.com/cpastorelli/trip-planner",
        "img": tripPlannerSM,
        "alt": "Get weather and entertainment shows based on city searched"
    },
    {
        "title": "Covid Travel Search",
        "subtitle": "View the country Covid restrictions",
        "deployname": "Live Page",
        "link1": "https://intense-mesa-45226.herokuapp.com/", 
        "ghname": "Repository",
        "link2": "https://github.com/cpastorelli/Covid-travel-search",
        "img": covidTravel,
       "alt": "Find Covid Travel Restrictions for countries you wish to visit"
    },
    {
        "title": "Team Profile Generator",
        "subtitle": "Create a team site",
        "deployname": "Video Description",
        "link1": "https://cpastorelli.github.io/Team_Profile_Generator/", 
        "ghname": "Repository",
        "link2": "https://github.com/cpastorelli/Team_Profile_Generator",
        "img": teamProfiles,
        "alt": "Employee profiles for a team"
    },
    {
        "title": "README.md Generator",
        "subtitle": "Create a readme file easily",
        "deployname": "Video Description",
        "link1": " https://www.screencast.com/t/FHwNjb5pBO", 
        "ghname": "Repository",
        "link2": "https://github.com/cpastorelli/README-Generator",
        "img": nodeExample,
        "alt": "Sample questions from README.md Generator Program"
    }
] 


function MyWork() {
    const workItems = myProject;
    return(
        <div>
            {workItems.map((item) => {
                return (
                    <div className="card" key={item.title}> 
                    
                        <div className="card-body">
                            <img className="images" src={item.img} alt={item.alt} />
                            <h4 className="card-title">{item.title}</h4>
                            <h6 className="card-subtitle">{item.subtitle}</h6>
                            <a href={item.link1} target="_blank" className="card-link">{item.deployname}</a>
                            <a href={item.link2} target="_blank" className="card-link">{item.ghname}</a>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default MyWork;