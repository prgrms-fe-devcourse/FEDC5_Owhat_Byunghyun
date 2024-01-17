import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import Loading from '~/common/components/Loading';
import { cn } from '~/utils/cn';

import { buttonVarients } from './Button.variants';

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVarients> {
  children: React.ReactNode;
  loading?: boolean;
  fullwidth?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  loading = false,
  fullwidth,
  className,
  disabled,
  styleType,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        buttonVarients({ styleType }),
        className,
        fullwidth && 'w-full',
      )}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loading />
        </div>
      )}
      <span className={cn(loading ? 'invisible' : 'visible', 'text-inherit')}>
        {children}
      </span>
    </button>
  );
};

export default Button;
