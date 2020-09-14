import React from 'react';
import styled from 'styled-components';

const BlocWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${props => props.flexDirectionDefault || 'row'};
    align-items: flex-start;
    margin: 5px 0 5px 0;
`;

const SubBloc = styled.div`
    width: 50%;
    height: 500px;
    background-color: ${props => props.newBgColor || 'ivory'};
    img {
        width: 100%;
        height: 100%;
    }
    h2 {
        font-size: ${props => props.newFontSize || '50px'};
        font-weight: ${props => props.newFontWeight || 'lighter'};
        padding: 0 30px 0 30px;
        font-family: 'Fredericka the Great', cursive;
    }
`;

const Bloc = styled.div`
    width: 100%;
    p {
        font-size: ${props => props.newFontSize || '25px'};
        line-height: ${props => props.newlineHeight || '60px'};
        font-family: 'Parisienne', cursive;
        color: black;
        padding: 0 30px 0 30px;
    }
    a {
        height: 30px;
        display: inline-block;
        text-decoration: none;
        font-family: 'Fredericka the Great', cursive;
        color: green;
        margin: 0 30px 0 30px;
        transition: all 0.3s;
        position: relative;
    }
    a:hover {
        text-decoration: none;
        font-size: 20px;
    }
    a::before {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: -4px;
        background-color: green;
        transform: scaleX(0);
        transform-origin: left;
        transition: all 0.2s;
    }
    a:hover::before {
        transform: scaleX(1);
    }
`;


const SectionBloc = (props) => {

    const { imageSectionBloc, altAttribute, textSectionBloc, titleSectionBloc, linkSectionBloc } = props;

    return (

        <BlocWrapper flexDirectionDefault={props.flexDirectionDefault}>

            {
                imageSectionBloc &&
                <SubBloc>
                    <img src={imageSectionBloc} alt={altAttribute} />
                </SubBloc>
            }

            {
                textSectionBloc &&
                <SubBloc>
                    <h2>{titleSectionBloc}</h2>
                    <Bloc>
                        <p>{textSectionBloc}</p>
                        <a href="">{linkSectionBloc}</a>
                    </Bloc>
                </SubBloc>
            }

        </BlocWrapper>
    )
}

export default SectionBloc;