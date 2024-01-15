export type ToastCreate = (message: string, duration: number) => void;

export type Toast = {
  id: string;
  message: string;
  duration: number;
};
