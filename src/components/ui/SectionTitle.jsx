import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  h2 {
    font-size: 2rem;
  }
`;

export default function SectionTitle({title, children}) {
    return (
        <Section>
            <h2 className='section__title'>{title}</h2>
            {children}
        </Section>
    );
}
