/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../App.css";
import "../Home/Css/HomePage.css";
import { Grid, Header, Icon, Image, Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <Segment style={{ padding: "5em 0em 0em 2em" }} vertical>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Menu
                className="homeMenu"
                size="massive"
                vertical
                style={{ margin: "1em 0em 0em 2em" , backgroundColor:"blue" }}
              >
                <Menu.Item as={NavLink} to="/jobadvertisement" >
                  <Icon className="angle right"></Icon>
                  <a href > İş İlanı Arayın</a>
                </Menu.Item>
              </Menu>
              <Menu
                className="homeMenu"
                size="massive"
                vertical
                style={{ margin: "1em 0em 0em 2em" , backgroundColor:"red"}}
              >
                <Menu.Item name="inbox" as={NavLink} to="/jobPostingsAdd">
                  <Icon className="angle right"></Icon>
                  İş İlanı Ekleyin
                </Menu.Item>
              </Menu>
              <Menu
                className="homeMenu"
                size="massive"
                vertical
                style={{ margin: "1em 0em 0em 2em" , backgroundColor:"yellow"}}
              >
                <Menu.Item name="inbox">
                  <Icon className="angle right"></Icon>
                  Inbox
                </Menu.Item>
              </Menu>

              <Menu
                className="homeMenu"
                size="massive"
                vertical
                style={{ margin: "1em 0em 0em 2em",backgroundColor:"orange" }}
              >
                <Menu.Item name="inbox">
                  <Icon className="angle right"></Icon>
                  Inbox
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column floated="right" width={8}>
              <Image
                circular
                style={{ margin: "0em 0em 0em 0em" }}
                rounded
                size="large"
                src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <section className="section">
    <div className="container">
        <div className="row md-m-25px-b m-45px-b justify-content-center text-center">
            <div className="col-lg-8">
               <h2 className="display-5 text-danger">En Son Eklenen İş İlanları</h2>

            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 col-lg-4 m-15px-tb">
                <div className="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px" style={{background:"white"}}>
                    <a className="overlay-link" ></a>
                    <div className="bg-warning icon-50 theme-bg white-color border-radius-50 d-inline-block">
                        <i className="number">LD</i>
                    </div>
                    <div className="p-20px-l media-body">
                        <span className=" bg-info theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Full time</span>
                        <h6 className="m-5px-tb">Laravel Developer</h6>
                        <p className="m-0px font-small">San Francisco, US</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-4 m-15px-tb">
                <div className="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px" style={{background:"white"}}>
                    <a className="overlay-link" ></a>
                    <div className="icon-50 green-bg white-color border-radius-50 d-inline-block">
                        <i className="number">LD</i>
                    </div>
                    <div className="p-20px-l media-body">
                        <span className="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Full time</span>
                        <h6 className="m-5px-tb">Laravel Developer</h6>
                        <p className="m-0px font-small">San Francisco, US</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-4 m-15px-tb">
                <div className="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px"style={{background:"white"}}>
                    <a className="overlay-link" ></a>
                    <div className="icon-50 yellow-bg white-color border-radius-50 d-inline-block">
                        <i className="number">LD</i>
                    </div>
                    <div className="p-20px-l media-body">
                        <span className="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Full time</span>
                        <h6 className="m-5px-tb">Laravel Developer</h6>
                        <p className="m-0px font-small">San Francisco, US</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 m-15px-tb">
                <div class="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px"style={{background:"white"}}>
                    <a class="overlay-link" href="#"></a>
                    <div class="icon-50 pink-bg white-color border-radius-50 d-inline-block">
                        <i class="number">LD</i>
                    </div>
                    <div class="p-20px-l media-body">
                        <span class="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Full time</span>
                        <h6 class="m-5px-tb">Laravel Developer</h6>
                        <p class="m-0px font-small">San Francisco, US</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 m-15px-tb">
                <div class="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px"style={{background:"white"}}>
                    <a class="overlay-link" href="#"></a>
                    <div class="icon-50 theme-bg white-color border-radius-50 d-inline-block">
                        <i class="number">LD</i>
                    </div>
                    <div class="p-20px-l media-body">
                        <span class="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Full time</span>
                        <h6 class="m-5px-tb">Laravel Developer</h6>
                        <p class="m-0px font-small">San Francisco, US</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 m-15px-tb">
                <div class="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px"style={{background:"white"}}>
                    <a class="overlay-link" href="#"></a>
                    <div class="icon-50 dark-bg white-color border-radius-50 d-inline-block">
                        <i class="number">LD</i>
                    </div>
                    <div class="p-20px-l media-body">
                        <span class="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Full time</span>
                        <h6 class="m-5px-tb">Laravel Developer</h6>
                        <p class="m-0px font-small">San Francisco, US</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 m-15px-tb">
                <div class="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px"style={{background:"white"}}>
                    <a class="overlay-link" href="#"></a>
                    <div class="icon-50 yellow-bg white-color border-radius-50 d-inline-block">
                        <i class="number">LD</i>
                    </div>
                    <div class="p-20px-l media-body">
                        <span class="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Full time</span>
                        <h6 class="m-5px-tb">Laravel Developer</h6>
                        <p class="m-0px font-small">San Francisco, US</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 m-15px-tb">
                <div class="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px"style={{background:"white"}}>
                    <a class="overlay-link" href="#"></a>
                    <div class="icon-50 green-bg white-color border-radius-50 d-inline-block">
                        <i class="number">LD</i>
                    </div>
                    <div class="p-20px-l media-body">
                        <span class="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Full time</span>
                        <h6 class="m-5px-tb">Laravel Developer</h6>
                        <p class="m-0px font-small">San Francisco, US</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 m-15px-tb">
                <div class="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px"style={{background:"white"}}>
                    <a class="overlay-link" href="#"></a>
                    <div class="icon-50 blue-bg white-color border-radius-50 d-inline-block">
                        <i class="number">LD</i>
                    </div>
                    <div class="p-20px-l media-body">
                        <span class="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Full time</span>
                        <h6 class="m-5px-tb">Laravel Developer</h6>
                        <p class="m-0px font-small">San Francisco, US</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 m-15px-tb">
                <div class="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px"style={{background:"white"}}>
                    <a class="overlay-link" href="#"></a>
                    <div class="icon-50 blue-bg white-color border-radius-50 d-inline-block">
                        <i class="number">LD</i>
                    </div>
                    <div class="p-20px-l media-body">
                        <span class="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Full time</span>
                        <h6 class="m-5px-tb">Laravel Developer</h6>
                        <p class="m-0px font-small">San Francisco, US</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 m-15px-tb">
                <div class="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px"style={{background:"white"}}>
                    <a class="overlay-link" href="#"></a>
                    <div class="icon-50 pink-bg white-color border-radius-50 d-inline-block">
                        <i class="number">LD</i>
                    </div>
                    <div class="p-20px-l media-body">
                        <span class="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Full time</span>
                        <h6 class="m-5px-tb">Laravel Developer</h6>
                        <p class="m-0px font-small">San Francisco, US</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 m-15px-tb">
                <div class="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px"style={{background:"white"}}>
                    <a class="overlay-link" href="#"></a>
                    <div class="icon-50 yellow-bg white-color border-radius-50 d-inline-block">
                        <i class="number">LD</i>
                    </div>
                    <div class="p-20px-l media-body">
                        <span class="theme2nd-bg white-color p-0px-tb p-10px-lr font-small border-radius-15">Full time</span>
                        <h6 class="m-5px-tb">Laravel Developer</h6>
                        <p class="m-0px font-small">San Francisco, US</p>
                    </div>
                </div>
            </div>

            <div class="col-12 p-25px-t text-center">
                <a class="m-btn m-btn-radius m-btn-theme" href="#">Daha Fazla</a>
            </div>
        </div>
    </div>
</section>
      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Serhat Biricik
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                That is what they all say about us
              </p>
            </Grid.Column>
            <Grid.Column
              style={{
                paddingBottom: "0em",
                paddingTop: "4em",
                paddingLeft: "10em",
              }}
            >
              <Image
                circular
                src="data:image/jpeg;base64,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"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}
