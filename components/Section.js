import React from 'react';
import style from 'styled-components';

const SectionStyle = style.section`
    padding: 6rem 0;
`

const SectionHeaderStyle = style.h2`
    margin-bottom: 3rem;
`

const SectionHeader = ({ children }) => {
    return (<SectionHeaderStyle>{children}</SectionHeaderStyle>)
}

const Section = ({ children }) => {
    return (<SectionStyle>{children}</SectionStyle>);
};

Section.Header = SectionHeader;

export default Section;