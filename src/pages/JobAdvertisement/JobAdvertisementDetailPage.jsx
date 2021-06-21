import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Css/JobAdvertisementDetailPage.css";
import { Button, Icon, Feed } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
export default function JobAdvertisementDetailPage() {
  let { id } = useParams();

  const [jobAdvertisement, setjobAdvertisement] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllByjobPostingsId(id)
      .then((result) => setjobAdvertisement(result.data.data));
  }, []);

  console.log(jobAdvertisement);
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/bootstrap-extended.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/fonts/simple-line-icons/style.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/colors.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      ></link>
      <div
        class="container bootstrap snippets bootdey"
        style={{ marginTop: "4em" }}
      >
        <div class="row">
          <div class="profile-nav col-md-3">
            <div class="panel">
              <div
                class="user-heading round"
                style={{ marginTop: "2em", background: "#0a1931" }}
              >
                <a href>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </a>
                <h1>{jobAdvertisement.employer?.companyName}</h1>
                <p>{jobAdvertisement.employer?.email}</p>
                <div>
                  <Button circular color="facebook" icon="facebook" />
                  <Button circular color="twitter" icon="twitter" />
                  <Button circular color="linkedin" icon="linkedin" />
                  <Button circular color="google plus" icon="google plus" />
                </div>
                <button
                  type="button"
                  class="btn btn-outline-success btn-lg"
                  style={{ marginTop: "1em" }}
                >
                  Hemen Başvur
                </button>
              </div>
            </div>
          </div>
          <div class="profile-info col-md-9">
            <div class="panel" style={{ marginTop: "2em" }}>
              <div class="bio-graph-heading" style={{ background: "#0a1931" }}>
                {jobAdvertisement.jobDescription}
              </div>
              <div className="" style={{ marginLeft: "0em" }}>
                <div
                  class="card "
                  style={{
                    float: "left",
                    height: "12em",
                    background: "#0a1931",
                    width: "27em",
                  }}
                >
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="media-body text-left">
                          <h3 class="success">
                            {jobAdvertisement.numberOfOpenPositions}
                          </h3>
                          <span>Açık Pozisyon Adedi</span>
                        </div>
                        <div class="align-self-center">
                          <i class="icon-user success font-large-2 float-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card "
                  style={{
                    width: "27em",
                    height: "12em",
                    float: "left",
                    marginLeft: "4em",
                    background: "#0a1931",
                  }}
                >
                  <div class="card-content">
                    <div class="card-body cleartfix">
                      <div class="media align-items-stretch">
                        <div class="">
                          <h5 class="mr-2 success">
                            ${jobAdvertisement.minSalary} -
                            {jobAdvertisement.maxSalary}
                          </h5>
                        </div>
                        <div class="media-body">
                          <h4>Maaş Skalası </h4>
                          <span></span>
                        </div>
                        <div class="align-self-center">
                          <i class="icon-wallet success font-large-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card"
                  style={{
                    width: "27em",
                    height: "12em",
                    float: "left",
                    marginLeft: "0em",
                    background: "#0a1931",
                  }}
                >
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex" style={{marginBottom:"4em"}}>
                        <div class="media-body " style={{marginRight:"1em"}}>
                          <h5 class="danger">
                            {jobAdvertisement.city?.cityName}
                          </h5>
                          <span>Konum</span>
                        </div>
                        <div class="media-body ">
                          <h5 class="danger">
                            {jobAdvertisement.applicationDeadline}
                          </h5>
                          <span>Son Başvuru Tarihi</span>
                        </div>
                      
                      </div>
                    
                    </div>
                  </div>
                </div>
                <div
                  class="card"
                  style={{
                    width: "27em",
                    height: "12em",
                    float: "left",
                    marginLeft: "4em",
                    background: "#0a1931",
                  }}
                >
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                      
                        <div class="media-body text-right">
                          <h5 className="primary">
                            {jobAdvertisement.jobPosition?.positionName}
                          </h5>
                          <span>Çalışma Pozisyonu</span>
                        </div>
                        <div class="media-body " >
                          <h6 className="primary" style={{margin:"0em 0em 0em 2em" }}>
                            {jobAdvertisement.typesOfWork}
                          </h6>
                          <span style={{margin:"0em 0em 0em 2em" }} >Çalışma Türü</span>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        class="content-item"
        id="comments"
        style={{ margin: "0em 7em 0em 30em" }}
      >
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-sm-8">
              <form>
                <h3 class="pull-left">Yeni Yorum</h3>

                <fieldset>
                  <div class="row">
                    <div class="col-sm-3 col-lg-2 hidden-xs">
                      <img
                        class="img-responsive"
                        src="http://res.cloudinary.com/dmeviw9q7/image/upload/v1623523376/nkorft8y9lgudvrewdlp.jpg"
                        alt=""
                      />
                    </div>
                    <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                      <textarea
                        class="form-control"
                        id="message"
                        placeholder="Your message"
                        required=""
                      ></textarea>
                      <button type="button" class="btn btn-outline-success ">
                        Gönder
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>

              <h3>2 Yorum</h3>

              <div class="media">
                <a class="pull-left" href>
                  <img
                    class="media-object"
                    src="http://res.cloudinary.com/dmeviw9q7/image/upload/v1623523376/nkorft8y9lgudvrewdlp.jpg"
                    alt=""
                  />
                </a>
                <div class="media-body">
                  <h4 class="media-heading">Serhat Biricik</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul class="list-unstyled list-inline media-detail pull-left">
                    <li>
                      <i class="fa fa-calendar"></i>27/02/2014
                    </li>
                    <li>
                      <i class="fa fa-thumbs-up"></i>13
                    </li>
                  </ul>
                  <ul class="list-unstyled list-inline media-detail pull-right">
                    <li class="">
                      <a href="">Beğenme</a>
                    </li>
                    <li class="">
                      <a href="">Yanıt</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="media">
                <a class="pull-left" href="#">
                  <img
                    class="media-object"
                    src="https://bootdey.com/img/Content/avatar/avatar4.png"
                    alt=""
                  />
                </a>
                <div class="media-body">
                  <h4 class="media-heading">Abdullah</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul class="list-unstyled list-inline media-detail pull-left">
                    <li>
                      <i class="fa fa-calendar"></i>27/02/2014
                    </li>
                    <li>
                      <i class="fa fa-thumbs-up"></i>13
                    </li>
                  </ul>
                  <ul class="list-unstyled list-inline media-detail pull-right">
                    <li class="">
                      <a href="">Beğenme</a>
                    </li>
                    <li class="">
                      <a href="">Yanıt</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
