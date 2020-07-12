import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: ${props => props.newWidth || "200px"};
    height: ${props => props.newHeight || "50px"};
    background-color: ${props => props.newBgColor || "white"};
    color: ${props => props.newColor || "black"};
    border-radius: ${props => props.newBorderRadius || "5px"};
    font-family: ${props => props.newFontFamily || "Fredericka the Great, cursive;Helvetica"};
    font-size: ${props => props.newFontSize || "20px"};
    border: ${props => props.newBorder || "rgba(4, 128, 4, 0.7)"};
    transition: ${props => props.newTransition || "all 0.3s"};
    :hover {
        background-color: ${props => props.bgColorOnHover || "beige"};
        border: ${props => props.borderOnHover || "1px solid beige"};
        border-radius: ${props => props.borderRadiusOnHover || "15px"};
        color:  ${props => props.colorOnHover || "rgba(4, 128, 4, 0.7)"};
    }
`;

const Button = (props) => {

    const textButton = props.children;

    const {
        newWidth,
        newHeight,
        newBgColor,
        newColor,
        newBorderRadius,
        newFontFamily,
        newFontSize,
        newBorder,
        newTransition,
        bgColorOnHover,
        borderOnHover,
        borderRadiusOnHover,
        colorOnHover
    } = props;

    return (
       <>
           <StyledButton
                newWidth={newWidth}
                newHeight={newHeight}
                newBgColor={newBgColor}
                newColor={newColor}
                newBorderRadius={newBorderRadius}
                newFontFamily={newFontFamily}
                newFontSize={newFontSize}
                newBorder={newBorder}
                newTransition={newTransition}
                bgColorOnHover={bgColorOnHover}
                borderOnHover={borderOnHover}
                borderRadiusOnHover={borderRadiusOnHover}
                colorOnHover={colorOnHover}
           >
               {textButton}
           </StyledButton>
       </>
    )
}

export default Button;