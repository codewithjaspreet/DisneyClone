import React from "react";
import styled from "styled-components";
function header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <Navmenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </Navmenu>

      <Userimg src="https://codewithjaspreet.github.io/Portfolio-Website/images/WhatsApp%20Image%202021-11-11%20at%2016.47.30-modified.png" />
    </Nav>
  );
}

export default header;

const Nav = styled.nav`
  height: 78px;
  display: flex;
  overflow-x: hidden;

  background: #090b13;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const Navmenu = styled.div`
  display: flex;
  margin-left: 25px;
  align-items: center;
  flex: 1;
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 12px;
    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        opacity: 0;
        left: 0;
        right: 0;
        tranform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        bottom: -6px;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;

const Userimg = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
