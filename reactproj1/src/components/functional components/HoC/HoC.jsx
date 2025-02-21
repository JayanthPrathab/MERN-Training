import Button from "./Button";
import trackingmybuttonComp from "./trackingmybuttonComp";
const HoC=()=>{
    const ButtonTrack=trackingmybuttonComp(Button);
    return(
        <div>
            <h1>This is HoC page</h1>
            <ButtonTrack value={"Login"} trackingInfo={{"CustId":"","Password":"password"}}></ButtonTrack>
        </div>
    );
}
export default HoC;