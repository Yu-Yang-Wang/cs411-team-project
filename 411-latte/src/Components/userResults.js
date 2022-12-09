import React, {Component, useState} from 'react'

function userResults(props) {
    const bird = props.bird
// {commonName, sciName}, 
    return (
        <div>
            user results:
            {JSON.stringify(bird, null, 2)}
        </div>
    )
}

export default userResults