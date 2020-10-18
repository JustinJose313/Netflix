import React from 'react'
import {Spinner, LockBody, Picture, ReleaseBody} from './styles/loading'


const Loading = ({src, ...restProps}) => {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

export default Loading


Loading.ReleaseBody = function LoadingReleaseBody () {
    return <ReleaseBody></ReleaseBody>
}