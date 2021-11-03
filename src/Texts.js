import { useState, useEffect } from 'react'
import AllTexts from './AllTexts'

const Texts = () => {
 
    const [texts, setTexts] = useState(null)
    const url = 'http://localhost:8000/messages'

    useEffect(() => {
        setInterval(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("Could not fetch!");
                }
                return res.json();
            })
            .then(data => {
                console.log(data)
                setTexts(data)
            })
        }, 1000)
    }, [url])

    return ( 
        <div className="texts-div">
            <div className="last-texts">
                { texts && <AllTexts texts = { texts }/> }
            </div>
        </div> 
    );
}
 
export default Texts;