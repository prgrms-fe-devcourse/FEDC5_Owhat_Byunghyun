import { ComponentProps } from 'react';

import Text from '~/common/components/Text';
import { cn } from '~/utils/cn';

export interface TabItemProps extends ComponentProps<'div'> {
  title: string;
  subText?: string | number;
  label: string;
  active?: boolean;
}

const TabItem = ({
  title,
  subText = '',
  active,
  className,
  ...props
}: TabItemProps) => {
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
      <Text className={`ml-small text-sm ${!active && 'text-gray-400'}`}>
        {subText}
      </Text>
    </div>
  );
};

TabItem.defaultProps = {
  __type: 'Tab.Item',
};

export default TabItem;
