import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import Loading from '../Loading';

export interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode;
  loading?: boolean;
  fullwidth?: boolean;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  border?: boolean;
}

const ButtonStyle =
  'rounded-md p-1 px-3 hover:opacity-50 transition-opacity relative ';

const Button = ({
  children,
  loading = false,
  fullwidth,
  type,
  className,
  border = true,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        ButtonStyle,
        { 'border-2 border-primary': border },
        className,
        `${fullwidth ? 'w-full' : ''}`,
      )}
      type={type}
      disabled={disabled || loading}
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
