import React, { Component } from 'react';

class WebSocket extends Component {

    ws = new WebSocket('ws://localhost:11000/ws')


    componentDidMount() {
        this.ws.onopen = () => {
        // on connecting, do nothing but log it to the console
        console.log('connected')
        }

        this.ws.onmessage = evt => {
        // listen to data sent from the websocket server
        const message = JSON.parse(evt.data)
        this.setState({dataFromServer: message})
        console.log(message)
        }

        this.ws.onclose = () => {
        console.log('disconnected')
        // automatically try to reconnect on connection loss

        }

    }


  render() {
    return (
        <div>Hello from WebSocket!</div>
    );
  }
}

export default WebSocket;
