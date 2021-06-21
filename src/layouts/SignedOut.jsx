import React from "react";
import { Button, Container, Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "../App.css";
export default function SignedOut({signIn}) {
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
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as={NavLink} to="/resume">
              Özgeçmiş
            </Menu.Item>
            <Menu.Item position="right">
              <Button as={NavLink} to="/registercandidate" inverted color="blue">
                Kayıt Ol
              </Button>
              <Button inverted color="blue" style={{ marginLeft: "0.5em" }}>
                İş Veren
              </Button>
              <Button onClick={signIn} inverted color="olive" style={{ marginLeft: "0.5em" }}>
                Giriş Yap
              </Button>
              <Button inverted color="olive" style={{ marginLeft: "0.5em" }}>
                İlan Yayınla
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    </div>
  );
}
