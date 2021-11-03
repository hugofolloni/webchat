const AllTexts = (props) => {

    const texts = props.texts;

    return ( 
        <div className="texts-to-show">
            { texts.map((texts) => (
                <div className="singular-text">
                    <h3>{ texts.username }</h3>
                    <p>{ texts.message }</p>
                </div>
            ))}
        </div>
     );
}
 
export default AllTexts;