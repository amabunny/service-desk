import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const LandingPageTemplate = ({ children }: Props) => {
  return <div>{children}</div>;
};
