import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import Loading from '../Loading';
import { buttonVarients } from './Button.variants';

export interface ButtonProps
  extends VariantProps<typeof buttonVarients>,
    ComponentProps<'button'> {
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
        fullwidth ? 'w-full' : '',
        disabled ? 'border-gray-300 bg-gray-300 text-white' : '',
      )}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loading />
        </div>
      )}
      <span className={`${loading ? 'invisible' : 'flex'} justify-center `}>
        {children}
      </span>
    </button>
  );
};

export default Button;
