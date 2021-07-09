/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { Button, Container, Icon, Menu, Segment} from "semantic-ui-react";
import { NavLink,Link } from "react-router-dom";

export default function SignedIn({signOut}) {
    return (
        <div>
             <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 0, padding: "0em 0em 0em 0em" }}
        vertical
      >
        <Menu size="large" fixed="top">
          <Container>
            <Menu.Item as={NavLink} to="/anasayfa">
              Ana Sayfa
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as={NavLink} to="/resumeView">Özgeçmişini Görüntüle</Menu.Item>
            <Menu.Item as={NavLink} to="/profil">
              Profilim
            </Menu.Item>
            <Menu.Item position="right">
              <Button inverted color="red" style={{ marginLeft: "0.5em" }}>
                <Icon name="star"></Icon>
                Kariyer Rehberi
              </Button>
              <Button inverted color="olive" style={{ marginLeft: "0.5em" }}>
                <Icon name="briefcase"></Icon>
                İş İlanları
              </Button>
             
              <Button inverted color="blue" style={{ marginLeft: "0.5em" }}>
              <Icon name="bell"></Icon>
                Bildirimler
              </Button>
           
                <div class="dropdown pmd-dropdown pmd-user-info ml-auto hover">
                  <a
                    href
                    class="btn-user dropdown-toggle media align-items-center"
                    data-toggle="dropdown"
                    data-sidebar="true"
                    aria-expanded="false"
                  >
                    <img
                      class="mr-2"
                      src="http://res.cloudinary.com/dmeviw9q7/image/upload/v1623523376/nkorft8y9lgudvrewdlp.jpg"
                      width="40"
                      height="40"
                      alt=""
                      style={{borderRadius:"5em", marginLeft:"0.5em"}}
                    />
                    <div class="media-body">Serhat</div>
                    <i class="material-icons md-light ml-2 pmd-sm"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-right" role="menu">
               
                    <Link to="profil"><a  class="dropdown-item" >
                   Profilim
                    </a></Link> 
                
                    <a  onClick={signOut} class="dropdown-item" href>
                      Çıkış Yap
                    </a>
                  </ul>
                </div>
            
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
        </div>
    )
}
