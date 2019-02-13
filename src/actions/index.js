//Action creator
export const handleUserUpdate = username => {
    return {
        type: "UPDATE_USER",
        username
    }
}

const _getGithubRepoByUser = username => fetch(`https://api.github.com/users/${username}/repos`)
const _getGithubEventsByUser = username => fetch(`https://api.github.com/users/${username}/events`)

const _handleReposAction = niceRepos => {
    return {
        type: "UPDATE_REPOS",
        niceRepos
    }
}

const _handleEventsAction = niceEvents => {
    return {
        type: "UPDATE_EVENTS",
        niceEvents
    }
}

export const handleRepos = username => dispatch => {
    _getGithubRepoByUser(username)
        .then (res=>res.json())
        .then(repos=>repos.filter(repo => repo.fork === true).map(repo => {
            return {
                'id': repo.id,
                'html_url': repo.html,
                'full_name': repo.full_name,
                'url': repo.url
            }
        }))
        .then(niceRepos => dispatch(_handleReposAction(niceRepos)));
}

export const handleEvents = username => dispatch => {
    _getGithubEventsByUser(username)
        .then(res => res.json())
        .then(repos => repos.filter(event => event.type === 'PullRequestEvent').map(event => {
            return {
                'title': event.payload['pull_request'].title,
                'url': event.repo.url,
                'name': event.repo.name,
                'action': event.payload.action
            }
        }))
        .then(niceEvents => dispatch(_handleEventsAction(niceEvents)));
}