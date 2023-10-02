import React from "react";

// Bootstrap elements
import { Container, Row, Col } from "react-bootstrap";

const Experience = () => {
  return (
    <section className="bg-light pt-3 pb-3">
      <Container>
        <Row>
          <Col>
            <h1>Experience</h1>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <ul className="timeline-3">
                  <li>
                    <p className="fw-bold fs-5">
                      Devex, Barcelona - Product Owner
                    </p>
                    <p className="badge bg-secondary">JUNE 2022 - PRESENT</p>
                    <p>
                      As a Product working on the Jobs team, understanding our
                      users, based on data, and together with the stakeholders
                      and ui/ux experts, defining the product requirements.
                    </p>
                    <p>
                      As part of my job I am in charge of representing and
                      communicating the Road Map, defining Users Stories,
                      managing the Backlog and facilitating the Scrum
                      Ceremonies.
                    </p>
                  </li>
                  <li>
                    <p className="fw-bold fs-5">
                      Devex, Barcelona - Frontend Developer
                    </p>
                    <p className="badge bg-secondary">MARCH 2018 - JUNE 2022</p>
                    <p>
                      As a Frontend developer I have worked on the News team,
                      implementing features for our paid and non paid users.
                    </p>
                    <p>
                      Working very closely with ui/ux Designers and the Product
                      Owner, together with the Back-ends, using Scrum as a
                      framework, and using React and Ruby on Rails as main tech
                      stack.
                    </p>
                  </li>
                  <li>
                    <p className="fw-bold fs-5">
                      Flowlens, Belfast - Frontend Developer
                    </p>
                    <p className="badge bg-secondary">
                      APRIL 2014 - MARCH 2018
                    </p>
                    <p>
                      As a Frontend developer I have worked on developing new
                      functionalities for the platform, fixing issues and
                      improving the platform in general.
                    </p>
                    <p>
                      The platform was developed on Ruby on Rails and I have
                      developed an App version for iOS and Android using
                      PhoneGap.
                    </p>
                  </li>
                  <li>
                    <p className="fw-bold fs-5">
                      Concentrix, Belfast - Technical Advisor at Electronic Arts
                    </p>
                    <p className="badge bg-secondary">
                      JANUARY 2014 - APRIL 2014
                    </p>
                    <p>
                      I have worked providing technical support and
                      troubleshooting through the use of telephone, email and
                      online chat which involves managing customer’s billing,
                      privacy and security data.
                    </p>
                  </li>
                  <li>
                    <p className="fw-bold fs-5">
                      Concentrix, Belfast - Sales Advisor at Apple
                    </p>
                    <p className="badge bg-secondary">
                      SEPTEMBER 2013 - JANUARY 2014
                    </p>
                    <p>
                      I have worked providing technical support and
                      troubleshooting through the use of telephone, email and
                      online chat which involves managing customer’s billing,
                      privacy and security data.
                    </p>
                  </li>
                  <li>
                    <p className="fw-bold fs-5">
                      Freelance, Mataró - Web Developer
                    </p>
                    <p className="badge bg-secondary">
                      JANUARY 2012 - MARCH 2013
                    </p>
                    <p>
                      Developing corporate and e-commerce websites in some
                      platforms such as Drupal, Joomla, Wordpress.
                    </p>
                    <p>
                      Developing a new CRM for a real estate company (Urbenia
                      Serveis Immobiliaris SL) and a new website on the CakePHP
                      platform. This app allows the real estate management,
                      customers and owners, to synchronize information, alerts
                      and mailing.
                    </p>
                    <p>
                      SEO and SEM positioning to promote the website, creating
                      several campaigns in Google AdWords, analyzing statistics.
                    </p>
                  </li>
                  <li>
                    <p className="fw-bold fs-5">
                      Sala Assessor Informàtic S.L., Mataró - Web Developer
                    </p>
                    <p className="badge bg-secondary">
                      MARCH 2008 - DECEMBER 2011
                    </p>
                    <p>
                      Developing some custom CRM for different kinds of
                      companies in eBD, such as textile or delivery of goods.
                      Working at all stages: customer’s meetings, gathering
                      requirements, analysis, design, development, and test.
                    </p>
                    <p>
                      Corporate and e-commerce websites development on some
                      platforms such as Drupal, Joomla, Wordpress; but also
                      custom programming in PHP, such as modules,components or
                      templates.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
