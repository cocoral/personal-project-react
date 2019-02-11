import React, { Component } from 'react';

//Those 2 are testing data. 
import { repos } from './data.repos';
import { events } from './data.events';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            repos: []
        }
    }

    componentDidMount() {
        //test data is from https://api.github.com/users/pkanal/repos
        //Do api calls here
        fetch(`https://api.github.com/users/${this.props.username}/repos`)
          .then(data => data.json())
          //TODO: clean the data, only assigned the simplified data
          .then(res=> this.setState({repos: res}))
          .catch(e=>console.log(e))

        //test data is from https://api.github.com/users/pkanal/events
        fetch(`https://api.github.com/users/${this.props.username}/events`)
          .then(data => data.json())
          //TODO: clean the data, only assigned the simplified data
          .then(res => this.setState({ events: res }))
          .catch(e => console.log(e))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Hello, {this.props.username}.
                </header>
                <h2>Forked repos:</h2>
                <p>{this.state.repos.length === 0 ? 'Loading...' : ''}</p>
                {
                    this.state.repos.filter(repo => repo.fork === true).map((repo, i) => {
                        return (
                            <div className='forked-item' key={i}>
                                <a href={repo['html_url']}>
                                    {repo['full_name']}
                                </a> |&nbsp;
                                <a href={repo['url']}>Base Repo</a>
                            </div>
                        )
                    })
                }
                <h2>Latest pull request: </h2>
                <p>{this.state.events.length === 0 ? 'Loading...' : ''}</p>
                {
                    this.state.events.filter(event => event.type === 'PullRequestEvent').map((event, i) => {
                        return (
                            <div className='pull-item' key={i}>
                                <p>{event['payload']['pull_request']['title']}</p>
                                <p>
                                    <a href={event['repo'].url}>
                                        {event['repo'].name}
                                    </a> |&nbsp;
                                    <span>{event['payload'].action}</span>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Profile;
