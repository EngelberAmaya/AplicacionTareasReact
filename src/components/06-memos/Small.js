import React, { memo } from 'react'

const Small = memo(({value}) => {
    
        console.log('se volvio a llamar')
    
        return (
            <small>
                {value}
            </small>
        )
    }
    
) 

export default Small
