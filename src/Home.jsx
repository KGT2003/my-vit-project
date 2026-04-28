import profile from "./assets/profile.jpg";

export default function Home() {
  return (
    <div>
      <section className="about-section">
        <img className="profile-img" src={profile} alt="Profile" />
      </section>

      <section className="hero">
        <h1>Hi, My Name is Afriyie Assamany</h1>

        <p className="About-me">About Me</p>

        <p>
          I'm a 3rd year student at UCF with a strong interest in designing and optimizing websites
          for businesses. I enjoy creating clean, user-friendly digital experiences.
        </p>

        <p className="web">I'm a Web Designer</p>
        
      </section>
    </div>
  );
}