import React, { Component } from 'react'
import './App.css'
import { NavigationBar } from './components/NavigationBar'
import { Panel } from 'react-bootstrap'
import { ListContainer } from './container/ListContainer'
import { TextfieldContainer } from './container/TextfieldContainer'
import { ListAll } from './components/ListAll'
import { ListCompleted } from './components/ListCompleted'
import { ListUncompleted } from './components/ListUncompleted'

const ListAllComponent = ListContainer(ListAll)
const ListUncompletedComponent = ListContainer(ListUncompleted)
const ListCompletedComponent = ListContainer(ListCompleted)

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
                        <ListAllComponent />
                        <ListUncompletedComponent />
                        <ListCompletedComponent />
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default App
