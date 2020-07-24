import React, { Component } from 'react';

import { SprkTable } from '@sparkdesignsystem/spark-react';
import './HighScores.scss';

const Score = (props) => (
    {
        name: props.score.name,
        score: props.score.score,
        time: props.score.time
    }
)

export default class HighScores extends Component{
    constructor(props) {
        super(props)

        this.state = {
            scores: [
                {
                    name: "test name 1",
                    score: 4000,
                    time: "idk"
                },
                {
                    name: "test name 2",
                    score: 3000,
                    time: "idk"
                },
                {
                    name: "test name 3",
                    score: 2000,
                    time: "idk"
                },
            ]
        };
    }

    componentDidMount() {
        this.setState({
            scores: this.setScores()
        })
    }

    setScores() {
        // need to return an array of objects with name, score, time
        let scoreList = [];
        this.state.scores.map((currentScore, i) => {
            scoreList.push((currentScore))
        })
        return scoreList;
    }
    
    render() {
        return (
            <div className="hs-body"> 
                <h3>High Scores</h3>
                <div>
                <SprkTable
                    additionalTableClasses="sprk-b-Table--spacing-medium"
                    idString="table-1"
                    columns={[
                        {
                        name: 'name',
                        header: 'Name',
                        },
                        {
                        name: 'score',
                        header: 'Score',
                        },
                        {
                        name: 'time',
                        header: 'Time',
                        },
                    ]}
                    rows={ this.setScores() }
                    />
                </div>
            </div>
        )
    }
}