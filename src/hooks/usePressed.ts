import { useState } from "react";

export const usePressed = () => {
  const [pressed, setPressed] = useState<{
    isPressed: boolean;
    id: string | null;
  }>({ isPressed: false, id: null });

  const handleItemMouseDown = (id: string) => {
    setPressed({ isPressed: true, id });
  };

  const handleItemMouseUp = () => {
    setPressed((prevState) => ({ ...prevState, isPressed: false }));
  };

  const iconAnimate = (id: string) =>
    pressed.isPressed && pressed.id === id ? { scale: 0.8 } : { scale: 1 };

  return { pressed, handleItemMouseDown, handleItemMouseUp, iconAnimate };
};
