import React, { Component } from 'react'
import './App.css'
import { NavigationBar } from './components/NavigationBar'
import { Panel } from 'react-bootstrap'
import { ListContainer } from './container/ListContainer'
import { TextfieldContainer } from './container/TextfieldContainer'


class App extends Component {
    render() {
        return (
            <div className="container">
                <NavigationBar />
                <Panel>
                    <Panel.Heading>
                        <TextfieldContainer />
                    </Panel.Heading>
                    <Panel.Body>
                        <ListContainer/>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default App
