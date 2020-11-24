import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 

  .section .container{
    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 50px 40px;
  }
  .about .about-content .skills .skill-item h5{
    
    color: ${({ theme }) => theme.text};

  }
  .about .about-content .timeline .timeline-title{
    
    color: black;

  }
  @media screen and (min-width:640px)
  {
    .section .container{
      padding: 50px 5rem;
    }
  }

  @media screen and (min-width:1000px)
  {
    .section .container{
      padding: 50px 10rem;
    }
  }  
  
  `;