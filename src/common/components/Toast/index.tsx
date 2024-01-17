import { createRoot } from 'react-dom/client';

import ToastManager from './ToastManager';
import { ToastCreate } from './type';

class Toast {
  portal: HTMLElement | null = null;
  createToast: ToastCreate | undefined;

  constructor() {
    const portalId = 'toast-portal';
    const portalElement = document.getElementById(portalId);

    if (portalElement) {
      this.portal = portalElement;

      return;
    } else {
      this.portal = document.createElement('div');
      this.portal.id = portalId;

      document.body.appendChild(this.portal);
    }

    createRoot(this.portal).render(
      <ToastManager
        bind={createToast => {
          this.createToast = createToast;
        }}
      />,
    );
  }

  show(message: string, duration = 2000) {
    if (!this.createToast) throw new Error('ToastManager is not initialized');

    this.createToast(message, duration);
  }
}

export default new Toast();
