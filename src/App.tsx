import React from 'react';
import './App.css';
import styled from "styled-components";
import {Menu} from "./components/Menu";
import {Link} from "./components/Link";
import {StyledBtn} from './components/Buttonstyles';
import {myTheme} from "./components/styles/Theme.styles";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <StyledBtn btnType={"menu-button"}>
                        <li>Item 1</li>
                    </StyledBtn>
                    <StyledBtn btnType={"menu-button"}>
                        <li>Item 2</li>
                    </StyledBtn>
                    <StyledBtn btnType={"menu-button"}>
                        <li>Item 3</li>
                    </StyledBtn>
                </ul>
            </Menu>
            <Box>
                {/*<StyledBtn color="green" fontSize={"20px"}>Hello1</StyledBtn>
              <StyledBtn color={"red"}>Hello2</StyledBtn>
              <StyledBtn fontSize={"30px"}>Hello3</StyledBtn>*/}
                <StyledBtn color={myTheme.colors.primary} btnType={"primary"} active>Hello1</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} btnType={"outlined"} fontSize="3rem">Hello2</StyledBtn>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
    button {
        cursor: pointer;
    }
    
    ${Link} {
        cursor: zoom-in;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`


