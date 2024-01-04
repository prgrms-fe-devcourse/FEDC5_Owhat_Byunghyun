import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import Loading from '~/common/components/Loading';
import { cn } from '~/utils/cn';

import { buttonVarients, fontColorVarients } from './Button.variants';

//TODO: invisible 사용고려 - loading을 감싸는 rounded가 통일 되지않아 튀어나오는 버그 -> main 머지 후 해결 가능
export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVarients>,
    VariantProps<typeof fontColorVarients> {
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
        buttonVarients({ styleType, disabled }),
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
      <span
        className={cn(
          loading ? 'invisible' : 'inline-block',
          'align-middle',
          fontColorVarients({ styleType, disabled }),
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
