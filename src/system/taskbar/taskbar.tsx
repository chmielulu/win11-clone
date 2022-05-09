import React, { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { usePressed } from "../../hooks/usePressed";
import { useClock } from "../../hooks/useClock";

const StyledWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: rgba(32, 32, 32, 0.75);
  display: flex;
  justify-content: center;
  backdrop-filter: saturate(3) blur(20px);
  align-items: center;
`;

const StyledItem = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0);
  border-radius: 5px;
  transition: background 0.2s ease-in-out;
  margin-right: 5px;
  user-select: none;

  :last-of-type {
    margin-right: 0;
  }

  :hover {
    background: rgba(255, 255, 255, 0.1);
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const StyledTimeAndDate = styled.div`
  color: #fff;
  font-size: 11px;
  letter-spacing: 0.4px;
  font-weight: 300;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  padding: 8px;
  border-radius: 5px;
  height: 40px;
  transition: background 0.2s ease-in-out;
  line-height: 1.2;

  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const displayTime = (time: number) => (time < 10 ? `0${time}` : time);

const Taskbar: FC<Props> = ({ items }) => {
  const { iconAnimate, handleItemMouseUp, handleItemMouseDown } = usePressed();
  const clock = useClock();

  return (
    <StyledWrapper>
      {items.map(({ id, icon, title: _title, invertColor }) => (
        <StyledItem
          onMouseDown={() => handleItemMouseDown(id)}
          onMouseUp={handleItemMouseUp}
        >
          <motion.img
            src={icon}
            alt=""
            style={invertColor && { filter: "invert(1)" }}
            animate={iconAnimate(id)}
          />
        </StyledItem>
      ))}

      <StyledTimeAndDate>
        <div>
          {displayTime(clock.getHours())}:{displayTime(clock.getMinutes())}:
          {displayTime(clock.getSeconds())}
        </div>
        <div>
          {displayTime(clock.getDate())}.{displayTime(clock.getUTCMonth())}.
          {clock.getFullYear()}
        </div>
      </StyledTimeAndDate>
    </StyledWrapper>
  );
};

interface Props {
  items: { icon: string; title: string; id: string; invertColor?: true }[];
}

export default Taskbar;
