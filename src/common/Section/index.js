import React from "react";
import { SectionTitle } from "./styled";
import { SectionHeader } from "./styled";
import { SectionListItem } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <SectionTitle>
        <SectionListItem className="section__listItem">
            <SectionHeader> {title} </SectionHeader>
            {extraHeaderContent}
        </SectionListItem>
        <div>
            {body}
        </div>
    </SectionTitle>


)


export default Section