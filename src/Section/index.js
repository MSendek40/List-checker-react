import React from "react";
import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__listItem">
            <h2 className="section__header" > {title} </h2>
            {extraHeaderContent}
        </div>
        <div>
            {body}
        </div>
    </section>


)


export default Section