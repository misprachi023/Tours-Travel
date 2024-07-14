import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImage from "../assets/images/hero-img01.jpg";
import heroImage2 from "../assets/images/hero-img02.jpg";
import Video from "../assets/images/Video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Travelling opens to door to Creating{" "}
                  <span className="highlight">memories</span>{" "}
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                  laudantium, autem qui sapiente, nihil vero accusamus aliquam
                  illo harum nostrum praesentium excepturi eaque voluptas soluta
                </p>
              </div>
            </Col>
            <Col lg="2">
            <div className="hero__img-box">
                <img src={heroImage} alt="" />
            </div>
            </Col>
            <Col lg="2">
            <div className="hero__img-box mt-4"  >
                <video src={Video} alt="" controls />
            </div>
            </Col>
            <Col lg="2">
            <div className="hero__img-box mt-5">
                <img src={heroImage2} alt="" />
            </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
