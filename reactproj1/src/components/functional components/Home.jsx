function Home(property){
    //internal styling
    var style={
        textAlign:"center",
        backgroundColor:"tomato"
    }
    var a=10;
    return(
        <div><h2 style={style}>Home</h2>
            <h3>below tag is for props</h3>
            <h3>Props: {property.property},{property.sjit}</h3>
        </div>
    );
}
export default Home;