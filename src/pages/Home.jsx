import React from 'react'
import { Header } from '../containers/Header';
import { HeaderLogo } from '../containers/HeaderLogo';
import { HeaderSearched } from '../containers/HeaderSearched';
import { HeaderUserInformation } from '../containers/HeaderUserInformation';
import { Contend } from '../containers/Contend';
import { VerticalMenu } from '../containers/VerticalMenu';
import { ContendVideos } from '../containers/ContendVideos';
import { Videos } from '../containers/Videos';
import { Shorts } from '../containers/Shorts';
import { FavoriteOptions } from '../containers/FavoriteOptions';
import '../styles/Home.css';
import { Separator } from '../components/Separator';

function Home() {
  return (
    <div className='home'>
        <Header>
            <HeaderLogo/>
            <HeaderSearched />
            <HeaderUserInformation/>
        </Header>
        <Contend>
            <VerticalMenu/>
            <ContendVideos>
                <FavoriteOptions/>
                <Separator/>
                <Videos/>
                <Shorts/>
                <Videos/>
            </ContendVideos>
        </Contend>
    </div>
  )
}

export {Home};