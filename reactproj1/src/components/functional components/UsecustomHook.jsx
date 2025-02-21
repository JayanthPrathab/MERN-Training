import useCustomHook from "./CustomHook";
const UsecustomHook = () => {
  var [custId, setCustId] = useCustomHook("CustomerID", "");
  var [pass, setPass] = useCustomHook("Password", "");
  const handleEvent=()=>{
    console.log(custId,pass)
    localStorage.removeItem("CustomerID")
    localStorage.removeItem("Password")
  }
  return (
    <div>
      <h1>Page designed using CustomHook</h1>
      Customer ID:{" "}
      <input
        type="text"
        value={custId}
        onChange={(e) => {
          setCustId(e.target.value);
        }}
      />
      <br />
      Password :{" "}
      <input
        type="password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <br />
      <button onClick={handleEvent} >Login</button>
    </div>
  );
};
export default UsecustomHook;
