import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Hello, {this.props.username}.
                </header>
                <h2>Forked repos:</h2>
                <p>{!this.props.isReposUpdated ? 'Loading...' : ''}</p>
                {
                    this.props.repos.length !== 0 ? 
                    this.props.repos.map((repo, i) => {
                        return (
                            <div className='forked-item' key={i}>
                                <a href={repo['html_url']}>
                                    {repo['full_name']}
                                </a> |&nbsp;
                                <a href={repo['url']}>Base Repo</a>
                            </div>
                        )
                    }) : 'Nothing here!'
                }
                <h2>Latest pull request: </h2>
                <p>{!this.props.isEventsUpdated ? 'Loading...' : ''}</p>
                {
                    this.props.events.length !== 0 ? 
                    this.props.events.map((event, i) => {
                        return (
                            <div className='pull-item' key={i}>
                                <p>{event.title}</p>
                                <p>
                                    <a href={event.url}>
                                        {event.name}
                                    </a> |&nbsp;
                                    <span>{event.action}</span>
                                </p>
                            </div>
                        )
                    }) : 'Nothing here!'
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        username: state.username,
        repos: state.repos,
        isReposUpdated: state.isReposUpdated,
        events: state.events,
        isEventsUpdated: state.isEventsUpdated
    }
}

export default connect(mapStateToProps)(Profile);
