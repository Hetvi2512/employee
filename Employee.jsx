import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from "react-share";
import Profile from "../images/hetvi.jpeg";
import company from "../images/download.jpg";
import { ShareFill, PhoneFill } from "react-bootstrap-icons";

export default function Employee() {
  return (
    <>
      <div className="empcontainer  hover-shadow mx-auto mt-5 border p-3 justify-item-center">
        <Row>
          <Col
            xs={{ order: "first", span: 4 }}
            sm={{ order: "first", span: 3 }}
            md={2}
          >
            <img
              style={{ borderRadius: "50%", height: "80px", width: "100px" }}
              src={Profile}
              alt="pic"
            />
          </Col>
          <Col
            xs={{ order: "last", span: 12 }}
            sm={{ order: "second", span: 5 }}
            md={7}
          >
            <h3 className="name"> Hetvi Shah </h3>
            <h6 className="muted"> Software Developer </h6>
          </Col>
          <Col
            xs={{ order: "second", span: 3, offset: 3 }}
            sm={{ order: "last", span: 4, offset: 0 }}
            md={3}
            className="justify-content-end"
          >
            <img
              style={{ borderRadius: "50%", height: "80px", width: "100px" }}
              src={company}
              alt="pic2"
            />
            <h6> Gateway Group </h6>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }}>Skills</p>
          </Col>
          <Col xs={8} sm={9} md={10} lg={10}>
            <p>
              ReactJS, NodeJS, ReactJS, NodeJS, ReactJS, NodeJS, ReactJS, NodeJS
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }} className="title">
              Location
            </p>
          </Col>
          <Col xs={8} sm={3} md={4} lg={4}>
            PNI
          </Col>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }} className="title">
              Experience
            </p>
          </Col>
          <Col xs={8} sm={3} md={4} lg={4}>
            4 years
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }} className="title">
              Duration
            </p>
          </Col>
          <Col xs={8} sm={3} md={4} lg={4}>
            2 Years
          </Col>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }} className="title">
              Status
            </p>
          </Col>
          <Col xs={8} sm={3} md={4} lg={4}>
            Employee
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={4}>
            <p style={{ fontWeight: "bold" }}>ShortList</p>
          </Col>

          <Col xs={6}>
            <PhoneFill /> +9190335566
          </Col>

          <Col xs={2}>
            <ShareFill />
          </Col>
        </Row>
      </div>
      <div className="empcontainer  hover-shadow mx-auto mt-5 border p-3 justify-item-center">
        <Row>
          <Col
            xs={{ order: "first", span: 4 }}
            sm={{ order: "first", span: 3 }}
            md={2}
          >
            <img
              style={{ borderRadius: "50%", height: "80px", width: "100px" }}
              src={Profile}
              alt="pic"
            />
          </Col>
          <Col
            xs={{ order: "last", span: 12 }}
            sm={{ order: "second", span: 5 }}
            md={7}
          >
            <h3 className="name"> Hetvi Shah </h3>
            <h6 className="muted"> Software Developer </h6>
          </Col>
          <Col
            xs={{ order: "second", span: 3, offset: 3 }}
            sm={{ order: "last", span: 4, offset: 0 }}
            md={3}
            className="justify-content-end"
          >
            <img
              style={{ borderRadius: "50%", height: "80px", width: "100px" }}
              src={company}
              alt="pic2"
            />
            <h6> Gateway Group </h6>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }}>Skills</p>
          </Col>
          <Col xs={8} sm={9} md={10} lg={10}>
            <p>
              ReactJS, NodeJS, ReactJS, NodeJS, ReactJS, NodeJS, ReactJS, NodeJS
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }} className="title">
              Location
            </p>
          </Col>
          <Col xs={8} sm={3} md={4} lg={4}>
            PNI
          </Col>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }} className="title">
              Experience
            </p>
          </Col>
          <Col xs={8} sm={3} md={4} lg={4}>
            4 years
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }} className="title">
              Duration
            </p>
          </Col>
          <Col xs={8} sm={3} md={4} lg={4}>
            2 Years
          </Col>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }} className="title">
              Status
            </p>
          </Col>
          <Col xs={8} sm={3} md={4} lg={4}>
            Employee
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={3} sm={4}>
            <p style={{ fontWeight: "bold" }}>ShortList</p>
          </Col>

          <Col xs={5} sm={6}>
            <PhoneFill /> +9190335566
          </Col>

          <Col xs={4} sm={2}>
            <div className="show">
              <div className="shareicon">
                {" "}
                <h6>Share Via </h6>
                <div style={{ marginLeft: "5%" }} className="showicon">
                  <ShareFill />
                </div>
              </div>

              <div className="showmedia">
                <FacebookShareButton url={"https://peing.net/ja/"}>
                  <FacebookIcon size={"2rem"} round />
                </FacebookShareButton>

                <TwitterShareButton
                  title={"test"}
                  url={"https://peing.net/ja/"}
                  hashtags={["hashtag1", "hashtag2"]}
                >
                  <TwitterIcon size={"2rem"} round />
                </TwitterShareButton>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="empcontainer  hover-shadow mx-auto mt-5 border p-3 justify-item-center">
        <Row>
          <Col
            xs={{ order: "first", span: 4 }}
            sm={{ order: "first", span: 3 }}
            md={2}
          >
            <img
              style={{ borderRadius: "50%", height: "80px", width: "100px" }}
              src={Profile}
              alt="pic"
            />
          </Col>
          <Col
            xs={{ order: "last", span: 12 }}
            sm={{ order: "second", span: 5 }}
            md={7}
          >
            <h3 className="name"> Hetvi Shah </h3>
            <h6 className="muted"> Software Developer </h6>
          </Col>
          <Col
            xs={{ order: "second", span: 3, offset: 3 }}
            sm={{ order: "last", span: 4, offset: 0 }}
            md={3}
            className="justify-content-end"
          >
            <img
              style={{ borderRadius: "50%", height: "80px", width: "100px" }}
              src={company}
              alt="pic2"
            />
            <h6> Gateway Group </h6>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }}>Skills</p>
          </Col>
          <Col xs={8} sm={9} md={10} lg={10}>
            <p>
              ReactJS, NodeJS, ReactJS, NodeJS, ReactJS, NodeJS, ReactJS, NodeJS
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }} className="title">
              Location
            </p>
          </Col>
          <Col xs={8} sm={3} md={4} lg={4}>
            PNI
          </Col>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }} className="title">
              Experience
            </p>
          </Col>
          <Col xs={8} sm={3} md={4} lg={4}>
            4 years
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }} className="title">
              Duration
            </p>
          </Col>
          <Col xs={8} sm={3} md={4} lg={4}>
            2 Years
          </Col>
          <Col xs={4} sm={3} md={2} lg={2}>
            <p style={{ fontWeight: "bold" }} className="title">
              Status
            </p>
          </Col>
          <Col xs={8} sm={3} md={4} lg={4}>
            Employee
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={4}>
            <p style={{ fontWeight: "bold" }}>ShortList</p>
          </Col>

          <Col xs={6}>
            <PhoneFill /> +9190335566
          </Col>

          <Col xs={2}>
            <div className="show">
              <h6>Share Via</h6>
              <div className="showicon">
                <ShareFill />
              </div>
              <div className="showmedia">
                <FacebookShareButton url={"https://peing.net/ja/"}>
                  <FacebookIcon size={"2rem"} round /> Facebook
                </FacebookShareButton>

                <TwitterShareButton
                  title={"test"}
                  url={"https://peing.net/ja/"}
                  hashtags={["hashtag1", "hashtag2"]}
                >
                  <TwitterIcon size={"2rem"} round />
                  Twitter
                </TwitterShareButton>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
