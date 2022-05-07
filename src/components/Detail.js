import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from '../firebase';
import ReactPlayer from 'react-player';
import theme from 'styled-theming';
import imgPlayIconWhite from '../images/play-icon-white.png'
import imgPlayIconBlack from '../images/play-icon-black.png'
import imgGroupIcon from '../images/group-icon.png'


function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [displayTrailer,setDisplayTrailer] = useState(false);
    const [play,setPlay] = useState(false);

    console.log("fdxc", id);

    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists) {
                setMovie(doc.data());
                console.log("this");
                console.log("doc data",doc.data);
            } else {
                console.log("that");
            }
        })
    }, []);

    console.log("movie",movie);

  
   

  return (
      <>
      { movie &&
    <Container>
        <Background key={id}>
            <img src={movie.backgroundImg} /> 
        </Background>
        <ImgTitle>
        <img src={movie.titleImg}  />
        </ImgTitle>
        <Controls>
            <PlayButton onClick={() => {setPlay(true)}}>
                <img src= {imgPlayIconBlack} />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton onClick={() => {setDisplayTrailer(true)}}>
                <img src= {imgPlayIconWhite} />
                <span>Trailer</span>

            </TrailerButton>

            { play && 
            <ThemeProvider theme={{ mode: 'none' }}>
            <PlayerWrapper >
                <CloseBtn onClick={() => {setPlay(false)}}>
                    <p>X</p>
                </CloseBtn>
            <ReactPlayer
            url={movie.playMovie}
            playing={true} 
            width='70vw'
            height='60vh'
            controls={true}
            />
            </PlayerWrapper>

            </ThemeProvider>
            
            }

            { displayTrailer && 
            <ThemeProvider theme={{ mode: 'none' }}>
            <PlayerWrapper >
                <CloseBtn onClick={() => {setDisplayTrailer(false)}}>
                    <p>X</p>
                </CloseBtn>
            <ReactPlayer
            url={movie.trailer}
            playing={true} 
            width='70vw'
            height='60vh'
            controls={true}
            />
            </PlayerWrapper>

            </ThemeProvider>
            
            }
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src= {imgGroupIcon} />
            </GroupWatchButton>

        </Controls>

        <SubTitle>
            {movie.subTitle}
        </SubTitle>
        <Desc>
            {movie.Desc}
        </Desc>
        </Container>}
        </>
  )
}

export default Detail;


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
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
    margin-top: 50px;

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
    max-width: 600px;
`;

const CloseBtn = styled.button`
    color: white;
    background: transparent;
    border: none;
    font-weight: 800;
    font-size: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
`;


const PlayerWrapper = styled.div`
    display: ${(d) => (d.displayPlayer ? 'none' : 'block')};
        
        position: fixed;
        justify-content: space-between;
        overflow: hidden;
        left: 15%;

`;

