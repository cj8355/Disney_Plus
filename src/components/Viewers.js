import React from 'react';
import styled from "styled-components";
import ReactPlayer from 'react-player';
import viewersDisney from '../images/viewers-disney.png'
import viewersPixar from '../images/viewers-pixar.png'
import viewersMarvel from '../images/viewers-marvel.png'
import viewersStarwars from '../images/viewers-starwars.png'
import viewersNational from '../images/viewers-national.png'
import videoDisney from '../videos/disney.mp4'
import videoPixar from '../videos/pixar.mp4'
import videoMarvel from '../videos/marvel.mp4'
import videoStarwars from '../videos/star-wars.mp4'
import videoNational from '../videos/national-geographic.mp4'


function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src= {viewersDisney} />
            <PlayerWrapper className='playerWrapper'>
                <ReactPlayer
                url= {videoDisney}
                width='100%'
                height='100%'
                playing={true}
                loop={true}
                />
            </PlayerWrapper>
        </Wrap>
        <Wrap>
            <img src= {viewersPixar} />
            <PlayerWrapper className='playerWrapper'>
                <ReactPlayer
                url= {videoPixar}
                width='100%'
                height='100%'
                playing={true}
                loop={true}
                />
            </PlayerWrapper>
        </Wrap>
        <Wrap>
            <img src= {viewersMarvel} />
            <PlayerWrapper className='playerWrapper'>
                <ReactPlayer
                url= {videoMarvel}
                width='100%'
                height='100%'
                playing={true}
                loop={true}
                />
            </PlayerWrapper>
        </Wrap>
        <Wrap>
            <img src= {viewersStarwars} />
            <PlayerWrapper className='playerWrapper'>
                <ReactPlayer
                url= {videoStarwars}
                width='100%'
                height='100%'
                playing={true}
                loop={true}
                />
            </PlayerWrapper>
        </Wrap>
        <Wrap>
            <img src= {viewersNational} />
            <PlayerWrapper className='playerWrapper'>
                <ReactPlayer
                url= {videoNational}
                width='100%'
                height='100%'
                playing={true}
                loop={true}
                />
            </PlayerWrapper>
        </Wrap>
        </Container>
  )
}

export default Viewers;

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    padding: 30px 0 26px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        

        .playerWrapper {
            display: block;
        }
    }
`;

const PlayerWrapper = styled.div`
    display: none;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

`;
