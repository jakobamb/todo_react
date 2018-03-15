import React, { Component } from 'react'
import './App.css'
import { Textfield } from './components/Textfield'
import { List } from './components/List'
import { NavigationBar } from './components/NavigationBar'
import { Panel } from 'react-bootstrap'
import { store } from './redux/store'

class App extends Component {
    constructor() {
        super()
        this.setState({
            todos: []
        })
    }
    render() {
        return (
            <div className="container">
                <NavigationBar />
                <Panel>
                    <Panel.Heading>
                        <Textfield />
                    </Panel.Heading>
                    <Panel.Body>
                        <List todos={this.state.todos}/>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }

    componentWillMount() {
        store.subscribe(() => {
            this.setState({
                todos: store.getState().todos
            })
        })
    }
}

export default App
