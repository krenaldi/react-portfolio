import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from '../Routes/index';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div>
            <Layout>
                <Header title="Kris Renaldi" scroll style={{ backgroundColor: 'black' }}>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/">Resume</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Kris Renaldi">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/">Resume</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                    <div className="page-content" />
                </Content>
            </Layout>
        </div>
    )
}
