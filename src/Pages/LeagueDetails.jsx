import React from 'react'

const LeagueDetails = (props) => {
    const { league_id } = props.match.params
    // const { handle } = this.props.match.params
    return (
        <div>
            LeagueDetails {league_id}
        </div>
    )
}

export default LeagueDetails
