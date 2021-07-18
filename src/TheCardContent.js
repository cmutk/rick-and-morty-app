import { CardContent, Typography } from '@material-ui/core'
import React from 'react'

function TheCardContent(props) {
    return (
        <CardContent>
        <Typography gutterBottom variant="h5" component="h1">
          {props.name}
        </Typography>
        {props.children}
      </CardContent>
            
        
    )
}

export default TheCardContent
