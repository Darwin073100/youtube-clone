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

function Home() {
  return (
    <React.Fragment>
        <Header>
            <HeaderLogo/>
            <HeaderSearched />
            <HeaderUserInformation/>
        </Header>
        <Contend>
            <VerticalMenu/>
            <ContendVideos>
                <Videos/>
                <Shorts/>
            </ContendVideos>
        </Contend>
    </React.Fragment>
  )
}

export default Home