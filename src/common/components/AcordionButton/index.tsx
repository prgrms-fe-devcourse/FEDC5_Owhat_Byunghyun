import './style.css';

import { useEffect, useRef, useState } from 'react';

import Button from '../Button';
import Icon from '../Icon';
import ThemeButton from '../ThemeButton';
const AcordionButton = () => {
  const [buttonState, SetButtonState] = useState<boolean>(false); //false 시 close 된 상태 true 시 버튼이 나타나는 상태
  const openUl = useRef<HTMLUListElement>(null);
  const closeUl = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (buttonState) {
      if (openUl.current && closeUl.current) {
        closeUl.current.style.opacity = '0';
        closeUl.current.style.display = 'none';
        openUl.current.classList.remove('AcordionDisappear');
        openUl.current.classList.add('AcordionAppear');
      }
    } else {
      if (openUl.current && closeUl.current) {
        closeUl.current.style.opacity = '1';
        closeUl.current.style.display = 'block';
        openUl.current.classList.remove('AcordionAppear');
        openUl.current.classList.add('AcordionDisappear');
      }
    }
  }, [buttonState]);

  return (
    <div className="AcordionContainer relative w-auto">
      <ul className="openUl" ref={openUl}>
        <li>
          <ThemeButton className="p-1" />
        </li>
        <li>
          <Button
            className="rounded-full bg-transparent  p-1 dark:bg-transparent"
            styleType="secondary"
          >
            <Icon id="edit" />
          </Button>
        </li>
        <li>
          <Button
            className="AcordionButton AcordionCloseButton rounded-full p-1 shadow-md shadow-gray-700"
            onClick={() => SetButtonState(false)}
          >
            <Icon id="close" />
          </Button>
        </li>
      </ul>

      <ul className="closeUl" ref={closeUl}>
        <li>
          <Button
            className="AcordionButton AcordionOpenButton rounded-full p-1 shadow-md shadow-gray-700"
            onClick={() =>
              buttonState ? SetButtonState(false) : SetButtonState(true)
            }
          >
            <Icon id="add" />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default AcordionButton;
