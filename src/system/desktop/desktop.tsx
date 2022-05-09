import React, { FC } from "react";
import styled from "styled-components";
import { usePressed } from "../../hooks/usePressed";
import { motion } from "framer-motion";

const StyledWrapper = styled.div`
  padding: 10px 10px 60px;
  display: grid;
  gap: 10px;
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 1.4rem;
  user-select: none;
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }

  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Desktop: FC<Props> = ({ items }) => {
  const { iconAnimate, handleItemMouseUp, handleItemMouseDown } = usePressed();

  return (
    <StyledWrapper>
      {items.map(({ icon, title, id }) => (
        <StyledItem
          key={id}
          onMouseDown={() => handleItemMouseDown(id)}
          onMouseUp={handleItemMouseUp}
        >
          <motion.img src={icon} alt="" animate={iconAnimate(id)} />
          {title}
        </StyledItem>
      ))}
    </StyledWrapper>
  );
};

interface Props {
  items: { icon: string; title: string; id: string }[];
}

export default Desktop;
