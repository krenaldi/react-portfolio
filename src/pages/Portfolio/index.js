import React, { useState } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState(0);

    const toggleCategories = () => {
        if (activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', fontWeight: 'bolder', height: '175px', background: 'url(./images/cli-background.jpg) center / cover' }}>
                            CLI App #1
                    </CardTitle>
                        <CardText>
                            This is first CLI App
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', fontWeight: 'bolder', height: '175px', background: 'url(./images/cli-background.jpg) center / cover' }}>
                            CLI App #2
                    </CardTitle>
                        <CardText>
                            This is first CLI App
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', fontWeight: 'bolder', height: '175px', background: 'url(./images/cli-background.jpg) center / cover' }}>
                            CLI App #3
                    </CardTitle>
                        <CardText>
                            This is first CLI App
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (activeTab === 1) {
            return (
                <div><h1>This is JavaScript</h1></div>
            )
        } else if (activeTab === 2) {
            return (
                <div><h1>This is jQuery</h1></div>
            )
        } else if (activeTab === 3) {
            return (
                <div><h1>This is React</h1></div>
            )
        }
    }

    return (
        <div className="category-tabs">
            <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
                <Tab>CLI</Tab>
                <Tab>JavaScript</Tab>
                <Tab>jQuery</Tab>
                <Tab>React</Tab>
            </Tabs>

            <Grid >
                <Cell col={12}>
                    <div className="content">{toggleCategories()}</div>
                </Cell>
            </Grid>
        </div>
    )
}
