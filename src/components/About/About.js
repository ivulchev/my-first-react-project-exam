import "./About.css";

function About() {
    return <div className="about--contacts">
    <section className="about--site">
    <h3>About Website</h3>
    <p>
    It is my first time to make a project. It is about one of my favourite sports Formula 1. So let me explain you shortly how the app works.... <br/> The app has some dynamic pages with drivers, teams and posts. They are reachable by every user, but guests cannot make interaction with them. The page has likes for every team, driver or post, for just one time. Can't be voted twice per object. In section Top Voted you can see the drivers and teams with most highest rating of voting. Owners of posts can't vote for them but can do edit and delete operation. The posts also have comments and liked by option. In liked by you can see other users who are voted for the post. The App also has details page for every driver and team. For some interactions with objects and some authentication services the app has alerts and modal dialog boxes. The page has login, register and logout services. For them I used Firebase authentication services. Pages Calendar and Standings makes request to external API with live time information about points and races. This API has limit of 250 request per month and if this limit is reached you can't load the live tables for drivers and constructors and calendar for 2022 season. I used React.js for this App. For database I used realtime database from Firebase. HTML and CSS are written by me. Only toast and modalboxes are from React.Bootstrap and I stylized them. You can see the code at my GitHub Profile. You can find my Profile at the Footer.<br/>P.S. The website is not responsive for different resolutions for now, but I will fix it after few days.
    </p>
    </section>
    
    <section className="contacts">
    <h3>Contacts and About me</h3>
    <p>
        My name is Ivan Valchev. <br/>I am a student at <a href="https://softuni.bg/">SoftUni</a>. I live in Plovdiv, Bulgaria. I'm 29 years old and I love coding. I am studying JavaScript, HTML and CSS. I also work with React JS. I search a new fresh start for my career.
        <br/>
        At the Footer you can find my contacts(Email, GitHub profile, LinkedIn profile and phone number).
    </p>
    <h3>Credits</h3>
    <p>
    I used images from  <a href="https://www.formula1.com/">official Formula 1 site</a>, <a href="https://racingnews365.com"> Racingnews365</a> for drivers, team logos and cars. <br/> External API for my live time standings is <a href="https://rapidapi.com/sportcontentapi/api/f1-live-motorsport-data/">RapidApi</a>. <br/>For my authentication and database I used <a href="https://firebase.google.com">Firebase</a>.<br/> For icons - <a href="https://fontawesome.com/">Font Awesome</a>.<br/> For font styles <a href="https://fonts.google.com/">Google Fonts</a>.<br/> For Modal Dialog Boxes and Toast Alerts <a href="https://react-bootstrap.github.io/getting-started/introduction"> React Bootstrap</a>.
    </p>
    </section>
    </div>
}

export default About