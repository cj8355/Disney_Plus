import React from 'react';
import styled from "styled-components";

function Detail() {
  return (
    <Container>
        <Background>
            <img src='/images/simpsons-background2.jfif' />
        </Background>
        <ImgTitle>
        <img src='/images/simpsons-title.jfif' />
        </ImgTitle>
        <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png' />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src='/images/play-icon-white.png' />
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src='/images/group-icon.png' />
            </GroupWatchButton>

        </Controls>

        <SubTitle>
            subtitle 2222
        </SubTitle>
        <Desc>
            This is decriptions fgrronifl description description description description
        </Desc>
        </Container>
  )
}

export default Detail;


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;


const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ImgTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    
`;

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`;

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`;

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;

    span {
        font-size: 30px;
        color: white;
    }
`;

const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`;

const Desc = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`;