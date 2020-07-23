import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <section
            className="jumbotron text-center"
            style={{ height: "100vh", display: "flex", alignItems: "center" }}
        >
            <div className="container">
                <h1 className="jumbotron-heading">Landing page</h1>
                <div>
                    <Link to={"/user/login"}>
                        <span href="#" className="btn btn-primary my-2">
                            user Login
                        </span>
                    </Link>
                    <Link to={"/user/register"}>
                        <span href="#" className="btn btn-secondary my-2">
                            user Register
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;
