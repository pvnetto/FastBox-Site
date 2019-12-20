import React from 'react';
import style from 'styled-components';

const SectionStyle = style.section`
    padding: 6rem 0;
    position: relative;
`

const SectionHeaderStyle = style.h2`
    margin-bottom: 3rem;
`

const Section = ({ children }) => {
    return (<SectionStyle>{children}</SectionStyle>);
};

const SectionHeader = ({ children }) => {
    return (<SectionHeaderStyle>{children}</SectionHeaderStyle>)
}

Section.Header = SectionHeader;

export default Section;