import React from 'react';
import styled from "styled-components";
import ReactPlayer from 'react-player';

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src='/images/viewers-disney.png' />
            <PlayerWrapper className='playerWrapper'>
                <ReactPlayer
                url='/videos/disney.mp4'
                width='100%'
                height='100%'
                playing={true}
                loop={true}
                />
            </PlayerWrapper>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-pixar.png' />
            <PlayerWrapper className='playerWrapper'>
                <ReactPlayer
                url='/videos/pixar.mp4'
                width='100%'
                height='100%'
                playing={true}
                loop={true}
                />
            </PlayerWrapper>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-marvel.png' />
            <PlayerWrapper className='playerWrapper'>
                <ReactPlayer
                url='/videos/marvel.mp4'
                width='100%'
                height='100%'
                playing={true}
                loop={true}
                />
            </PlayerWrapper>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-starwars.png' />
            <PlayerWrapper className='playerWrapper'>
                <ReactPlayer
                url='/videos/star-wars.mp4'
                width='100%'
                height='100%'
                playing={true}
                loop={true}
                />
            </PlayerWrapper>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-national.png' />
            <PlayerWrapper className='playerWrapper'>
                <ReactPlayer
                url='/videos/national-geographic.mp4'
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
