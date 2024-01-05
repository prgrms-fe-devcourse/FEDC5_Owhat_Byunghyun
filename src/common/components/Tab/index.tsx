import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  ReactElement,
  ReactNode,
  useMemo,
  useState,
} from 'react';

import { cn } from '~/utils/cn';

import TabItem, { TabItemProps } from './TabItem';

interface TabProps extends ComponentProps<'div'> {
  children: ReactNode;
  activeLabel?: string;
}

const childrenToArray = (children: ReactNode, types: string | string[]) => {
  return Children.toArray(children).filter(element => {
    if (isValidElement(element) && types.includes(element.props.__type)) {
      return true;
    }

    console.warn(
      `Only accepts ${
        Array.isArray(types) ? types.join(', ') : types
      } as it's children.`,
    );

    return false;
  });
};

const Tab = ({ children, activeLabel, className, ...props }: TabProps) => {
  const [currentActive, setCurrentActive] = useState(() => {
    if (activeLabel) {
      return activeLabel;
    }

    const label = (
      childrenToArray(children, 'Tab.Item') as ReactElement<TabItemProps>[]
    )[0].props.label;

    return label;
  });

  const items = useMemo(() => {
    return (
      childrenToArray(children, 'Tab.Item') as ReactElement<TabItemProps>[]
    ).map(element => {
      return cloneElement(element, {
        ...element.props,
        key: element.props.label,
        active: element.props.label === currentActive,
        onClick: () => {
          setCurrentActive(element.props.label);
        },
      });
    });
  }, [children, currentActive]);

  const activeItem = useMemo(
    () => items.find(element => currentActive === element.props.label),
    [currentActive, items],
  );

  const activeItemContent = activeItem ? activeItem.props.children : null;

  return (
    <div>
      <div className={cn('mb flex w-full', className)} {...props}>
        {items}
      </div>
      <div>{activeItemContent}</div>
    </div>
  );
};

Tab.Item = TabItem;

export default Tab;
