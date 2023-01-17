import React from "react";
import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="tasks">
        <div className="tasks__listItem">
            <h2 className="tasks__header" > {title} </h2>
            {extraHeaderContent}
        </div>
        <div>
            {body}
        </div>
    </section>


)


export default Section