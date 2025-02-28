import '../templates/template3.css';
const Template3=()=>{
    return(
        <div className="portfolio-template3">
        <div className="sidebar">
          <h2>Michael Johnson</h2>
          <p>Software Engineer</p>
        </div>
        <div className="main-content">
          <section>
            <h3>Summary</h3>
            <p>Experienced software engineer specializing in backend development with Node.js and Python.</p>
          </section>
          <section>
            <h3>Projects</h3>
            <ul>
              <li>E-commerce Platform</li>
              <li>Chat Application</li>
            </ul>
          </section>
          <section>
            <h3>Contact</h3>
            <p>Email: michael.j@example.com</p>
          </section>
        </div>
      </div>
    );
}
export default Template3;