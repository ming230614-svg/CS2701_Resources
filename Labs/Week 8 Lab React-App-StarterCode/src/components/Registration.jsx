//import {useRef} from "react";

import { useState } from "react";

export default function Registration(){
    //const name=useRef();
    //const email=useRef();
    //const password=useRef();
    //const repPassword=useRef();
    //const buyer=useRef();
    //const seller=useRef();
    //const tos=useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repPassword, setRepPassword] = useState("");
    const [buyer, setBuyer] = useState(false);
    const [seller, setSeller] = useState(false);
    const [tos, setTos] = useState(false);





    const validateForm = () => {
        let formValid = false;

        if (!name || !email || !password || !repPassword){
                alert("Please fill in all text fields.");
        }
        else if (!email.includes("@")){
            alert("Invalid e-mail address. Please enter your e-mail again.");
        }else if (password.length < 8){
            alert("Password is too short. Please select another password");
        } else if(password !== repPassword) {
            alert("Passwords do not match. Please retry");
        } else if (!buyer && !seller){
            alert("Please check at least one checkbox to select being a seller or a buyer in the system.")
        } else if (!tos){
            alert("Please agree to the Terms and Conditions, and Privacy Policy.")
        }else{
            formValid = true;
        }
        return formValid;
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (validateForm()) {
            if (!validateForm()) return;
        alert("Form sumitted");
        }
    };
    

    return (
        <form className="registration" noValidate onSubmit={handleSubmit}>
            <label className="labelText">Name: </label>
            {/*<input type="text" className="inputText" ref={name} name="name" required autoComplete="off"/><br/><br/>*/}
 <input
                type="text"
                className="inputText"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="off"
            />
            <br /><br />


            <label className="labelText">Email:</label>
              <input
                type="email"
                className="inputText"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
            />
            <br /><br />
            <label className="labelText">Password:</label>
           <input
                type="password"
                className="inputText"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="8"
            />
            <br /><br />
            <label className="labelText">Re-type password:</label>
            <input
                type="password"
                className="inputText"
                name="repPassword"
                value={repPassword}
                onChange={(e) => setRepPassword(e.target.value)}
                required
            />
            <br /><br />

         <input
                type="checkbox"
                name="buyer"
                checked={buyer}
                onChange={(e) => setBuyer(e.target.checked)}
            />
            <label>I want to buy produce directly from allotment owners.</label>
            <br />

            <input
                type="checkbox"
                name="seller"
                checked={seller}
                onChange={(e) => setSeller(e.target.checked)}
            />
            <label>I want to sell produce from my allotment.</label>
            <br /><br />

            <input
                type="checkbox"
                name="tos"
                checked={tos}
                onChange={(e) => setTos(e.target.checked)}
                required
            />
            <label>I agree to the Terms of Use and Privacy Policy.</label>
            <br /><br />

         {/*   <button onClick={handleSubmit}>Submit</button>
        </form>*/}

        <button type="submit">Submit</button>
        </form>
    )
}
