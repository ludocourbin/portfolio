import React, { useState } from "react";
import axios from "axios";
import "./styles.scss";

import emailjs from "emailjs-com";

const Contact = ({ id }) => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [emailSent, setEmailSent] = useState(false);

  const [megaState, setMegaState] = useState({
    name: "",
    email: "",
    message: "",
    emailSent: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(megaState);

    const initialState = {
      name: "",
      email: "",
      message: "",
      emailSent: false,
    };

    const { name, email, message } = megaState;

    if (!name || !email || !message) {
      console.log("not sure what you are trying to do");
      alert("vous devez renseigner tout les champs :)");
      setMegaState({ ...initialState });
      return;
    }

    // console.log(event.target.from_email);

    // axios
    //   .post("http://localhost:3030/api/email", megaState)
    //   .then((res) => {
    //     console.log(res);
    //     if (res.data.success) {
    //       console.log(res);
    //       console.log("email sent");
    //       setMegaState({ ...initialState, emailSent: true });
    //       const interval = setInterval(doStuff, 4000);

    //       function doStuff() {
    //         setMegaState({ ...initialState, emailSent: false });
    //         clearInterval(interval);
    //       }
    //     } else {
    //       console.log("could not sent the email");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    emailjs
      .sendForm(
        "gmail",
        "template_gpbfGRjS",
        event.target,
        "user_kSuLjAnY4mY1pMsAvuLR9"
      )
      .then(
        (result) => {
          console.log("email sent");
          // console.log(event.target.from_email);
          // console.log(event.target.from_name);
          setMegaState({ ...initialState, emailSent: true });
          const interval = setInterval(doStuff, 4000);

          function doStuff() {
            setMegaState({ ...initialState, emailSent: false });
            clearInterval(interval);
          }
          // window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id={id} className="contact">
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACTEZ</span>
                  <span>MOI</span>
                </div>
                <div className="app-contact">TÉLÉPHONE : +33 7 88 20 90 08</div>
              </div>
              <div className="screen-body-item">
                <form onSubmit={handleSubmit} className="app-form">
                  <div className="app-form-group">
                    <input
                      name="from_name"
                      className="app-form-control"
                      value={megaState.name}
                      placeholder="PRÉNOM"
                      onChange={(event) =>
                        setMegaState({ ...megaState, name: event.target.value })
                      }
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      name="from_email"
                      value={megaState.email}
                      className="app-form-control"
                      placeholder="EMAIL"
                      onChange={(event) =>
                        setMegaState({
                          ...megaState,
                          email: event.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      placeholder="MESSAGE"
                      name="message_html"
                      cols="10"
                      rows="4"
                      value={megaState.message}
                      onChange={(event) =>
                        setMegaState({
                          ...megaState,
                          message: event.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <div className="app-form-group buttons">
                    <button type="submit" className="app-form-button">
                      SEND
                    </button>
                    <p className="app-form-button">
                      {megaState.emailSent ? "Email sent" : ""}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
