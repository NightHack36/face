
import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'

//Redux
import {connect} from 'react-redux';
import {getRecomPage} from '../redux/dataActions'

// MUI
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

let Camera = (props) => {

    useEffect(()=> {
        let video = document.getElementById('video')
        navigator.getUserMedia(
            { video: {}},
            stream => video.srcObject = stream, 
            error => console.log(error)
        )


    }, [])

    let handleClick = () => {
        props.getRecomPage()
    }

    return (
        <Fragment>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <video id="video" autoPlay muted style={{maxHeight: 450, marginTop: 15, border: 'solid 5px', borderRadius: '20%'}}></video>
            </div>
            <Box textAlign='center' sx={{mt: 3, mb: 5}}>
                <Button 
                    style={{margin: 'auto'}} 
                    color="primary" 
                    variant="contained"
                    type="submit"
                    onClick={handleClick}

                >Get Music Recommendations</Button>
            </Box>

        
        </Fragment>

    )
}

Camera.propTypes = {
    data: PropTypes.object.isRequired,
    getRecomPage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {
    getRecomPage
}


export default connect(mapStateToProps, mapActionsToProps)(Camera);