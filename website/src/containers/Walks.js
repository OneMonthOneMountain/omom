import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './Walks.css'

const walks = [
    {
        title: "The Calf From Sedberg",
        summary: "Walk 15, Great Mountain Walks In The Pennines.",
        description: "A fairly long walk at 19km, but with only 650m of ascent it is less of a pain than some of the other walks we have done",
        date: "Saturday, 13th April, 2019",
        status: 'upcoming'
    },
    {
        title: "Aonach Eagach Ridge Walk",
        summary: "A strenuous hike with camping before and after.",
        date: "Saturday, 11th May, 2019",
        status: 'upcoming'
    },
    {
        title: "Yorkshire Three Peaks",
        summary: "Oh my god this one hurt",
        date: "Saturday, 11th August, 2018",
        status: 'completed'
    },
    {
        title: "Ben Nevis Via Tourist Route",
        summary: "rainy but fun",
        date: "Saturday, 15th September, 2018",
        status: 'completed'
    },
    {
        title: "Snowdon Via Rhyd Ddu",
        summary: "wow so sunny",
        date: "Saturday, 17th November, 2018",
        status: 'completed'
    },
    {
        title: "Helvellyn",
        summary: "jesus christ the wind",
        date: "Saturday, 15th December, 2018",
        status: 'completed'
    },
    {
        title: "Cross Fell",
        summary: "lots of snow",
        date: "Saturday, 9th January, 2019",
        status: 'completed'
    },
    {
        title: "Mam Tor",
        summary: "just a light one",
        date: "Sunday, 10th February, 2019",
        status: 'completed'
    },
    {
        title: "Route 49",
        summary: "or this one tbh",
        date: "Saturday, 23rd February, 2019",
        status: 'completed'
    },
    {
        title: "Ecton Hill, Wetton and Thor's Cave",
        summary: "five lines of rain",
        date: "Saturday, 16th March, 2019",
        status: 'completed'
    },
    {
        title: "Cadair Idris (Walk 38, Snowdonia)",
        summary: "for those who like steps",
        date: "Saturday, 30th March, 2019",
        status: 'completed'
    },
    {
        title: "Slieve Donard",
        status: 'suggested'
    },
    {
        title: "Ben Hope",
        status: 'suggested'
    },
    {
        title: "Carrauntoohil (Devil's Ladder)",
        status: 'suggested'
    },
    {
        title: "Snowdon Via Crib Goch",
        status: 'suggested'
    },
    {
        title: "Helvellyn Via Striding Edge",
        status: 'suggested'
    },
    {
        title: "Cairngorm 4000s",
        status: 'suggested'
    },
    {
        title: "Welsh 3000s",
        status: 'suggested'
    },
    {
        title: "Ben Macdui From Braemar To Aviemore",
        status: 'suggested'
    },
    {
        title: "Route 32",
        status: 'suggested'
    },
    {
        title: "The Roaches & Hen Cloud from Tittesworth Reservoir",
        status: 'suggested'
    },
    {
        title: "Grindleford-Padley Gorge-Higger Tor-Stanage Edge",
        status: 'suggested'
    },
]

export default class Home extends Component {
    render() {
        return (
            <div className="Walks">
                { walks.filter(walk => walk.status === this.props.status).map(({ title = 'Walk', summary, description, date }) =>
                    <Card className="Walk text-center">
                        <Card.Header>{title}</Card.Header>
                        { summary || description ? <Card.Body>
                            { summary ? <Card.Text>{summary}</Card.Text> : null }
                            { description ? <Card.Text>{description}</Card.Text> : null }
                        </Card.Body> : null }
                        { date ? <Card.Footer className="text-muted">{date}</Card.Footer> : null }
                    </Card>
                )}
            </div>
        )
    }
}