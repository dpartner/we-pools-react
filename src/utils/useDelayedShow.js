import { useEffect, useState } from "react";

/**
 * useDelayedShow - Хук для добавления анимации с задержкой
 * @param {boolean} condition Условие, при котором элемент становится видимым
 * @param {number} delay Задержка в миллисекундах перед активацией состояния
 * @returns {boolean} Флаг для активации класса
 */
const useDelayedShow = (condition, delay = 50) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    let timer;
    if (condition) {
      timer = setTimeout(() => {
        setIsShown(true);
      }, delay);
    } else {
      setIsShown(false);
    }

    return () => clearTimeout(timer);
  }, [condition, delay]);

  return isShown;
};

export default useDelayedShow;
