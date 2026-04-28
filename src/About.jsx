import "./App.css";
import profile from "./assets/profile.jpg";

export default function About() {
  return (
    <div>
    <section>
    <img className="profile-img" src={profile} alt="Profile" /> 
    </section>
    <div className="about-page">
      <h1>Hi, my name is Afriyie Assamny</h1>

      <p className="about-text">
        Hi, my name is <strong>Afriyie Assamany</strong>. I'm currently a third-year Digital Media student at the
        University of Central Florida.
        <br /><br />

        I enjoy designing websites that highlight <strong>local businesses</strong>, <strong>small companies </strong>, and <strong>e-commerce brands</strong>.
        I'm a passionate creative focused on building engaging, story-driven websites that help users connect
        with a brand and learn more about what it offers. I have skills in HTML, CSS, JavaScript, and React. 
      </p>
    </div>
    </div>
  );
}