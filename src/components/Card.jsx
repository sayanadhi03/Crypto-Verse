"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Card = ({ title, description, href, icon }) => {
  return (
    <StyledWrapper>
      <div className="cards">
        <figure className="card">
          <div className="card_icon">{icon}</div>
          <figcaption className="card_title">{title}</figcaption>
          <div className="card_description">{description}</div>
          <Link href={href}>
            <p className="card_link">Explore →</p>
          </Link>
        </figure>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards {
    perspective: 500px;
  }

  .card {
    width: 280px;
    height: 200px;
    background: linear-gradient(135deg, #16161d 0%, #1a1a2e 100%);
    border: 2px solid #10b981;
    border-radius: 12px;
    position: relative;
    transform-style: preserve-3d;
    will-change: transform;
    transition: transform 0.5s, border-color 0.3s;
    cursor: pointer;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card:hover {
    transform: translateZ(15px) rotateX(15deg) rotateY(15deg);
    border-color: #34d399;
    box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
  }

  .card_icon {
    font-size: 2.5rem;
    color: #10b981;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card:hover .card_icon {
    transform: translateZ(30px) scale(1.1);
  }

  .card_title {
    color: #fff;
    font-family: "Space Grotesk", "Inter", sans-serif;
    font-weight: 800;
    font-size: 1.4rem;
    margin: 10px 0 5px 0;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    letter-spacing: -0.02em;
  }

  .card:hover .card_title {
    transform: translateZ(40px) translateY(-2px);
  }

  .card_description {
    color: #a0a0a0;
    font-family: "Poppins", "Inter", sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease;
    letter-spacing: 0.01em;
  }

  .card:hover .card_description {
    transform: translateZ(20px);
    color: #c0c0c0;
  }

  .card_link {
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-top: 10px;
    padding: 8px 16px;
    background: #10b981;
    border: 1px solid #10b981;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    position: relative;
    overflow: hidden;
  }

  .card_link:hover {
    background: #059669;
    color: #fff;
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
    transform: translateY(-2px);
  }

  .card:hover .card_link {
    transform: translateZ(60px) translateY(-2px);
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
      max-width: 300px;
    }
  }
`;

export default Card;
