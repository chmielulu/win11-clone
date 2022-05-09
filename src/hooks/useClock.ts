import { useEffect, useState } from "react";

export const useClock = (): Date => {
  const [dateNow, setDateNow] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      setDateNow(new Date());
    });
  }, []);

  return dateNow;
};
