import React from 'react';
import { connect } from 'react-redux';

const Profile = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                Hello, {props.username}.
            </header>
            <h2>Forked repos:</h2>
            {
                props.repos === null ? <p>Loading...</p> :
                    props.repos.length === 0 ? <p>Nothing here!</p> : 
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
            {
                props.events === null ? <p>Loading...</p> :
                    props.events.length === 0 ? <p>Nothing here!</p> : 
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
        events: state.events,
    }
}

export default connect(mapStateToProps)(Profile);
