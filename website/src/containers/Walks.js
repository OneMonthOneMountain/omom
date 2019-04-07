import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import './Walks.css'

const walks = [
    {
        title: "The Calf From Sedberg",
        summary: "Walk 15, Great Mountain Walks In The Pennines.",
        description: "A fairly long walk at 19km, but with only 650m of ascent it is less of a pain than some of the other walks we have done",
        date: "13/04/19",
        image: 'the-calf.jpg',
        status: 'upcoming',
        ascent: 675,
        time: 6,
        distance: 17.5
    },
    {
        title: "Aonach Eagach Ridge Walk",
        summary: "A strenuous hike with camping before and after.",
        date: "11/05/19",
        status: 'upcoming',
        image: 'aonach-eagach.jpg',
        ascent: 1100,
        time: 4.5,
        distance: 9.5
    },
    {
        title: "Yorkshire Three Peaks",
        summary: "Oh my god this one hurt",
        date: "11/08/18",
        status: 'completed',
        ascent: 1585,
        time: 11.5,
        distance: 38.6
    },
    {
        title: "Ben Nevis Via Tourist Route",
        summary: "rainy but fun",
        date: "15/09/18",
        status: 'completed',
        ascent: 1352,
        time: 7.5,
        distance: 17
    },
    {
        title: "Snowdon Via Rhyd Ddu",
        summary: "wow so sunny",
        date: "17/11/18",
        status: 'completed',
        ascent: 895,
        time: 4.5,
        distance: 13
    },
    {
        title: "Helvellyn",
        summary: "jesus christ the wind",
        date: "15/12/18",
        status: 'completed',
        ascent: 770,
        time: 5,
        distance: 12.3
    },
    {
        title: "Cross Fell",
        summary: "lots of snow",
        date: "09/01/19",
        status: 'completed',
        ascent: 895,
        time: 7.5,
        distance: 14
    },
    {
        title: "Mam Tor",
        summary: "just a light one",
        date: "10/02/19",
        status: 'completed',
        ascent: 505,
        time: 4,
        distance: 13.6
    },
    {
        title: "Route 49",
        summary: "or this one tbh",
        date: "23/02/19",
        status: 'completed',
        ascent: 995,
        time: 7,
        distance: 19
    },
    {
        title: "Ecton Hill, Wetton and Thor's Cave",
        summary: "five lines of rain",
        date: "16/03/19",
        status: 'completed',
        ascent: 489,
        time: 3,
        distance: 9.6
    },
    {
        title: "Cadair Idris (Walk 38, Snowdonia)",
        summary: "for those who like steps",
        date: "30/03/19",
        status: 'completed',
        ascent: 945,
        time: 5,
        distance: 9.25
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
                { walks.filter(walk => walk.status === this.props.status).map(({ title = 'Walk', summary, description, date, image, ascent, distance, time }) =>
                    <Card className="Walk text-center">
                        <Card.Header>{title}</Card.Header>
                        { 
                            image ? <Image className={"WalkImage"} src={image} fluid /> :
                                summary || description ? <Card.Body>
                                { summary ? <Card.Text>{summary}</Card.Text> : null }
                                { description ? <Card.Text>{description}</Card.Text> : null }
                                </Card.Body> : null
                        }
                        <Card.Footer className={"WalkFooter"}>
                            <span className={"InfoLeft"}>
                                <Image className={"InfoImage"} src={"date.svg"} />
                                <small> {date}</small>
                            </span>
                            <span className={"Info"}>
                                <Image className={"InfoImage"} src={"ascent.svg"} />
                                <small> {ascent}m</small>
                            </span>
                            <span className={"Info"}>
                                <Image className={"InfoImage"} src={"distance.svg"} /> 
                                <small> {distance}km</small>
                            </span>
                            <span className={"InfoRight"}>
                                <Image className={"InfoImage"} src={"time.svg"} /> 
                                <small> {time}hr</small>
                            </span>
                        </Card.Footer>
                    </Card>
                )}
            </div>
        )
    }
}