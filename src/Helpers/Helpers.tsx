import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export const HandleScroll = (e: React.MouseEvent<HTMLElement>): void =>
{
  const element = document.getElementById(e.currentTarget.getAttribute('data-scroll')!);

  if (element) element.scrollIntoView({ behavior: 'smooth' });
}

const customAnimation = keyframes
`
from {
  opacity: 0;
  transform: translate3d(0, 30px, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}`;

export function CustomAnimation({ children }: any) {
  return <Reveal keyframes={customAnimation} delay={1500} duration={700} triggerOnce={true}>{children}</Reveal>;
}