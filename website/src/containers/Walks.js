import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './Walks.css'

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Card className="text-center">
                    <Card.Header>Snowdon</Card.Header>
                    <Card.Body>
                        <Card.Title>Medium Walk up Snowdon</Card.Title>
                        <Card.Text>
                            This walk involves going up Snowdon on a nice sunny day. TBH it is always sunny at Snowdon,
                            as far as I can tell from personal experience anyway. So we might as well do it again just for the LOLs.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">Saturday, 4th March, 2018</Card.Footer>
                </Card>
            </div>
        )
    }
}