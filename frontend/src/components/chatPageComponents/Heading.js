function Heading(props){
    const headingStyle ={
        color: props.color,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        position: props.position,
        bottom: props.bottom,
        left: props.left,
    }
    return(
    <div>
        <h1 style={headingStyle}>{props.content}</h1>
    </div>
    );
}

export default Heading;