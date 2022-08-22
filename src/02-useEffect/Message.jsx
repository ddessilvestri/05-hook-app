import { useState,useEffect } from "react"

export const Message = () => {

    const [corrds, setCorrds] = useState({x:0,y:0});
    
    useEffect(() => {

        const onMouseMove = ({x,y})=>{
            setCorrds({x,y});
        };

        window.addEventListener('mousemove',onMouseMove)

      return () => {
        window.removeEventListener('mousemove',onMouseMove);
      }
    }, [])
    


    return (
     <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(corrds)}
     </>   
    )
}
