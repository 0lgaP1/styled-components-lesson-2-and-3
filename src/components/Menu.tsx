import styled from "styled-components";

export const Menu = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
    }
    
    li > a {
        color: blueviolet;
     
    }
    
    li + li {
        margin-left: 20px;
    }

   /* li:hover {
        background-color: #a1b433;
    }  */
`
/*
export const MenuItem = styled.li`
    list-style: none;
    gap: normal;
`;*/
