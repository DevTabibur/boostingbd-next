import React from "react";
import Layout from "../containers/common/common-layout";
import { Container, Row, Col } from "reactstrap";
const services = () => {
  return (
    <>
      <Layout pathList={["Service"]} pathTitle="Look Our Services">
        <section className="event team-sec speaker set-relative" id="speaker">
          <Container>
            <Row>
              <Col md="3" sm="6" className="speker-container ">
                <div className="text-center">
                  <div className="employee shadow p-4 rounded">
                    <h5 className="e-name text-center font-secondary">
                      Marketing
                    </h5>
                    <h6 className="post text-start ">
                      <li>Digital Marketing</li>
                      <li>Facebook Marketing</li>
                      <li>Google Ads</li>
                      <li>Sms Marketing</li>
                      <li>Linkedin marketing </li>
                      <li>Email Marketing</li>
                      <li>TVC</li>
                      <li>News paper ads</li>
                      <li>Youtube Ads</li>
                    </h6>
                  </div>
                </div>
              </Col>

              <Col md="3" sm="6" className="speker-container">
                <div className="text-center">
                  <div className="employee shadow p-4 rounded">
                    <h5 className="e-name text-center font-secondary">
                      Development
                    </h5>
                    <h6 className="post text-start ">
                      <li>Website Development</li>
                      <li>Business Website</li>
                      <li>Garments Websites</li>
                      <li>Education website</li>
                      <li>Consultancy Website</li>
                      <li>Man power business Website</li>
                      <li>Mobile apps development</li>
                      <li>IOS apps development</li>
                      <li>Android apps development</li>
                    </h6>
                  </div>
                </div>
              </Col>

              <Col md="3" sm="6" className="speker-container">
                <div className="text-center">
                  <div className="employee shadow p-4 rounded">
                    <h5 className="e-name text-center font-secondary">
                      E-Commerce Solution
                    </h5>
                    <h6 className="post text-start ">
                      <li>Ecommerce Website</li>
                      <li>Ecommerce apps</li>
                      <li>POS</li>
                      <li>Printing & packaging</li>
                      <li>Ecommerce Consultancy</li>
                      <li>product Sourcing</li>
                    </h6>
                  </div>
                </div>
              </Col>

              <Col md="3" sm="6" className="speker-container">
                <div className="text-center">
                  <div className="employee shadow p-4 rounded">
                    <h5 className="e-name text-center font-secondary">
                      Design
                    </h5>
                    <h6 className="post text-start ">
                      <li>Creative Design </li>
                      <li>Logo Design</li>
                      <li>UI UX design </li>
                      <li>Facebook Cover design</li>
                      <li>Facebook post design</li>
                      <li>Youtube Cover page design </li>
                      <li>Linkedin cover page design </li>
                      <li>Google ads Design </li>
                      <li>Email template Design </li>
                    </h6>
                  </div>
                </div>
              </Col>

              <Col md="3" sm="6" className="speker-container">
                <div className="text-center">
                  <div className="employee shadow p-4 rounded">
                    <h5 className="e-name text-center font-secondary">
                      Domain Hosting
                    </h5>
                    <h6 className="post text-start ">
                      <li>.com Domain</li>
                      <li>Shared hosting</li>
                      <li>Reseller Hosting </li>
                      <li>VPS hosting </li>
                      <li>Dedicated Hosting</li>
                      <li>Cloud Hosting </li>
                      <li>Wordpress Hosting</li>
                    </h6>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default services;
