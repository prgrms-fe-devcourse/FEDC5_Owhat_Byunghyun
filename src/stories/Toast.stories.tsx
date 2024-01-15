import Toast from '~/common/components/Toast';

export default {
  title: 'Common/Components/Toast',
};

export const Default = () => {
  return <button onClick={() => Toast.show('hi', 3000)}>Show Toast</button>;
};
