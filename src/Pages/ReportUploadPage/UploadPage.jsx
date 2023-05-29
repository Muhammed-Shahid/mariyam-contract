import { React, useState, useEffect } from "react";
import "./UploadPage.css";
import { Button, Form, Image, Row } from "react-bootstrap";
import { Dna } from "react-loader-spinner";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

function UploadPage() {
  const [doc, setDoc] = useState([]);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [docUploadStatus, setDocUploadStatus] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState([""]);

  //login

  const [cred, setCred] = useState([]);
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider).then((data) => {
      setCred(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setCred(localStorage.getItem("email"));
  });

  const titles = [
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      id: 1,
    },
    {
      title:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      id: 2,
    },

    {
      title:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      id: 3,
    },
  ];
  const handleCHange = (e) => {
    e.preventDefault();

    setDoc(e.target.files[0]);
    setIsFilePicked(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFilePicked === false) {
      alert("please select a document");
    } else {
      setLoading(true);

      setTimeout(() => {
        //delete this timeout function in real world application.
        //Instead, call the API (better using axios) here.Store the json in a state Then setLoading =false and docUploadStatus=true
        setLoading(false);
        setDocUploadStatus(true);
      }, 5000);
    }
  };
  console.log(selectedTitle);
  return (
    <div className="container">
      {cred ? (
        <div className="centreDiv pt-5 mt-5">
          <h2>Upload Document</h2>
          <div className="uploadDocDiv mt-5">
            {(() => {
              switch (true) {
                case loading === true: {
                  return (
                    <div>
                      <Dna
                        visible={true}
                        height="100"
                        width="100"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                      />
                    </div>
                  );
                  break;
                }

                case docUploadStatus === true: {
                  return (
                    <label className="upload-success-label">
                      <Image
                        style={{ maxWidth: "40%" }}
                        src={process.env.PUBLIC_URL + "./success-icon.png"}
                        fluid
                        alt="upload file"
                      />
                      <p>Document Uploaded Successfully</p>
                    </label>
                  );
                  break;
                }

                default: {
                  return (
                    <form onSubmit={handleSubmit}>
                      <input
                        className="fileInput"
                        type="file"
                        name="myfile"
                        id="myfile"
                        onChange={handleCHange}
                      />
                      <label className="fileInputLabel" htmlFor="myfile">
                        <Image
                          style={{ maxWidth: "70%" }}
                          src={process.env.PUBLIC_URL + "./upload-icon.png"}
                          fluid
                          alt="upload file"
                        />
                        <p>
                          Click to <br /> Upload
                        </p>
                      </label>
                      <br />
                      {doc && <p> {doc.name}</p>}
                      <br />
                      <Button
                        className="mt-5"
                        variant="outline-primary"
                        type="submit"
                        size="lg"
                      >
                        Upload
                      </Button>{" "}
                    </form>
                  );
                  break;
                }
              }
            })()}
          </div>
          <br />
          <br />
          <br />
          <div style={{ height: "90vh" }} className="choiceContainer">
            <div>
              <h2>Please select an appropriate title.</h2>

              <div className="titleDisplayer">
                {titles &&
                  titles.map((obj) => (
                    <div key={obj.id} className="titleDiv">
                      <h6
                        onClick={(e) => setSelectedTitle(e.target.value)}
                        className="titles"
                      >
                        {" "}
                        {obj.title}
                      </h6>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container pt-5 ">
          <section>
            <div className="heading">
              <h1>AI PPT Generator </h1>
            </div>
          </section>

          <section className="signin-sec">
            <div className="sign-in">
              <div onClick={handleLogin} className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    width="20px"
                    style={{ marginTop: 7, marginRight: 8 }}
                    alt="Google sign-in"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  />
                </div>
                <p className="btn-text">
                  <b>Sign in with google</b>
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default UploadPage;
