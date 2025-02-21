const trackingmybuttonComp=(Component)=>{
    return(props)=>{
        const handleClick=()=>{
            alert("The tracking info on clicking the button"+props.trackingInfo);
        }
        return(
            <form onClick={handleClick}>
                Email: <input type="text" /><br />
                Password: <input type="password" /><br />
                <Component {...props} />
            </form>
        );
    };
}
export default trackingmybuttonComp;