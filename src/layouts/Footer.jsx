import React from "react";

import {
  Container,
  Divider,

  Grid,
  Header,
  Image,
  List,

  Segment,
  Button,
  Icon,
} from "semantic-ui-react";
import "../pages/Resume/Css/Resume.css"
export default function Footer() {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "2em 0em" }}
      >
        <Container textAlign="center" className="dene1 page-footer ">
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Genel" />
              <List link inverted>
                <List.Item as="a">Kayıt Olun</List.Item>
                <List.Item as="a">Yardım Merkezi</List.Item>
                <List.Item as="a">Hakkımızda</List.Item>
                <List.Item as="a">Kariyer</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Dizinler" />
              <List link inverted>
                <List.Item as="a">İş İlanları</List.Item>
                <List.Item as="a">Şirketler</List.Item>
                <List.Item as="a">Maaşlar</List.Item>
                <List.Item as="a">Okullar</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="İşletme Çözümleri" />
              <List link inverted>
                <List.Item as="a">İlan Satın Al</List.Item>
                <List.Item as="a">Reklam Verin</List.Item>
                <List.Item as="a">İletişim</List.Item>
                <List.Item as="a">Site Kullanımı</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as="h4" content="Sosyal Medya" />

              <Button color="twitter">
                <Icon name="twitter" /> Twitter
              </Button>
              <Button color="youtube">
                <Icon name="youtube" /> YouTube
              </Button>
              <Button color="instagram">
                <Icon name="instagram" /> Instagram
              </Button>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <Image centered size="mini" src="/logo.png" />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Gizlilik Politikası
            </List.Item>
            <List.Item as="a" href="#">
              Telif Hakkı Politikası
            </List.Item>
            <List.Item as="a" href="#">
              Kullanıcı Anlaşması
            </List.Item>
            <List.Item as="a" href="#">
              Erişilebilirlik
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}
