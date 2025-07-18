import type { ReactNode } from 'react';

export type ButtonLinkProps = {
  to: string;
  label: string;
  variant?:
    | 'default'
    | 'link'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children?: ReactNode;
  classButton?: string;
};
