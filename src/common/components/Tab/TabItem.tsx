import { ComponentProps } from 'react';

import Text from '~/common/components/Text';
import { cn } from '~/utils/cn';

export interface TabItemProps extends ComponentProps<'div'> {
  title: string;
  label: string;
  active?: boolean;
}

const TabItem = ({ title, active, className, ...props }: TabItemProps) => {
  return (
    <div
      {...props}
      className={cn(
        'inline-flex h-xlarge cursor-pointer items-center justify-center border-b-2 border-solid',
        active ? 'border-black' : 'border-gray-400',
        className,
      )}
    >
      <Text strong={active} className={!active ? 'text-gray-400' : ''}>
        {title}
      </Text>
    </div>
  );
};

TabItem.defaultProps = {
  __type: 'Tab.Item',
};

export default TabItem;
