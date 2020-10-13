import React from 'react';
import { Grid, Cell } from 'react-mdl';


export default function Home() {
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className="home-grid">
                <Cell col={12}>
                    <img src={require("../../images/diving-selfie.jpg")} alt="Kris preparing to dive" className="avatar-img" />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr />
                        <p>
                            HTML | CSS | JavaScript | jQuery | APIs | Git/GitHub | Bootstrap | Node.js | SQL | SASS | Postman | Express | Agile Scrum | MS Office | MongoDB | React | Redux | Angular | TypeScript | AWS | Webpack | Jest | Adobe Photoshop
                    </p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/krenaldi/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true"></i>
                            </a>
                            {/* GitHub */}
                            <a href="https://github.com/krenaldi" rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}
