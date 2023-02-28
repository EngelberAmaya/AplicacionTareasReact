import React from 'react'

const Hijo = React.memo(

    ({numero, incrementar}) => {
   
       console.log('se volvio a generar')
   
       return (
           <div>
               <button className='btn btn-primary m-2' onClick={() => incrementar(numero)}>{numero}</button>
           </div>
       )
   }
)

export default Hijo
