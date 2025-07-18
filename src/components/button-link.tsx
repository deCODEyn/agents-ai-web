import { Link } from 'react-router-dom';
import type { ButtonLinkProps } from './props/button-link-props';
import { Button } from './ui/button';

export function ButtonLink({
  to,
  label,
  variant,
  size,
  children,
  classButton,
}: ButtonLinkProps) {
  return (
    <Link to={to}>
      <Button className={classButton} size={size} variant={variant}>
        {children}
        {label}
      </Button>
    </Link>
  );
}
