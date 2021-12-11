import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Containter>
      <Background>
        <img src="https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg" />
      </Background>
      <ImageTitle>
        <img src="https://static1.squarespace.com/static/51cdafc4e4b09eb676a64e68/t/5ac4f08a6d2a73ba32fd68da/1540496405918/bau_poster.jpg" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span> Play</span>
        </PlayButton>
        <Trailer>
          <img src="/images/play-icon-white.png" />
          <span> Trailer</span>
        </Trailer>
        <AddButton>
          <span>+</span>
        </AddButton>
        <Groupwatch>
          <img src="/images/group-icon.png" />
        </Groupwatch>
      </Controls>
      <Subtitle>2018 * 7m * Family,Fantasy,Kids,Animation</Subtitle>

      <Description>
        The film is about an aging and lonely Chinese-Canadian mother, suffering
        from empty nest syndrome, who receives an unexpected second chance at
        motherhood when she makes a steamed bun (baozi) that comes to life.
      </Description>
    </Containter>
  );
}

export default Detail;

const Containter = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5wh + 5px);
  margin-left: 20px;
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 117px;
  min-width: 200px;
  margin-top: 60px;
  width: 15vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
    color: black;
  }
`;
const Trailer = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgb(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;
const Groupwatch = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  max-width: 700px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
