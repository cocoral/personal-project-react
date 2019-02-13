import React from 'react';
import { connect } from 'react-redux';

const Profile = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                Hello, {props.username}.
            </header>
            <h2>Forked repos:</h2>
            <p>{!props.isReposUpdated ? 'Loading...' : ''}</p>
            {
                props.repos === null ?  '' :
                    props.repos === 0 ? 'Nothing here!' : 
                props.repos.map((repo, i) => {
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
            <p>{!props.isEventsUpdated ? 'Loading...' : ''}</p>
            {
                props.events === null ? '' :
                    props.events.length === 0 ? 'Nothing here!' : 
                props.events.map((event, i) => {
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
                }) 
            }
        </div>
    );
};

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
