import { useEffect, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState();
  const [pswd, setPswd] = useState();
  const [isvalid, setIsvalid] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [output, setOutput] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(username, pswd);
    if (username === "user" && pswd === "password") {
      setOutput("Welcome, user!");
      setIsvalid(1);
    } else setOutput("Invalid username or password");
  };

  return (
    <div>
      <h1>Login Page</h1>
      {output ? <div>{output}</div> : <></>}
      {!isvalid ? (
        <form onSubmit={handlesubmit}>
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            required
          />
          <br />
          <label for="pwd">Password:</label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            onChange={(e) => setPswd(e.target.value)}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
}
