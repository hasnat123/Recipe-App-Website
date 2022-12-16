import * as React from 'react';
import { ButtonGroupProps, ArrowProps, DotProps } from 'react-multi-carousel/lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface CustomLeftArrowProps extends ArrowProps {
  myOwnStuff: string;
}
interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
};

const CustomLeftArrow = ({ onClick }: any) => {
  return <FontAwesomeIcon icon={faChevronLeft} onClick={() => onClick()} className='arrow left'/>
}

const CustomRightArrow = ({ onClick }: any) => {
  return <FontAwesomeIcon icon={faChevronRight} onClick={() => onClick()} className='arrow right'/>
};

const CustomButtonGroup = ({ next, previous } :CarouselButtonGroupProps) => {
  if (next && previous)
  {
    return (
      <div>
        <button onClick={() => previous()} />
        <button onClick={() => next()} />
      </div>
    );
  }

};

const CustomDots = ({ index, active, onClick, carouselState }:DotProps) => {
  return <div onClick={() => onClick }>This is a Custom dots</div>
}

export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomDots
};