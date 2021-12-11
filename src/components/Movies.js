import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommeded For You</h4>

      <Content>
        <Wrap>
          <img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" />
        </Wrap>
        <Wrap>
          <img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" />
        </Wrap>
        <Wrap>
          <img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" />
        </Wrap>
        <Wrap>
          <img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" />
        </Wrap>
        <Wrap>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  h4 {
    font-family: "Poppins";
    font-size: 30px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
const Wrap = styled.div`
  overflow: hidden;
  cursor:pointer;
  border-radius: 2px;
  border: 3px solid rgba(249 249 249 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition :  all 250ms cubic-bezier(0.25 ,0.46,0.45,0.94) 0s;

    rgb(0 0 0  / 73%) 0px 16px 10px -10px;
  img {
    width: 68px;
    height: 68px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px - 16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249 249 249 0.8);
  }

  width: 100%;
  height: 100%;
  objec-fit: cover;
`;
