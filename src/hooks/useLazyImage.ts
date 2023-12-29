import { useEffect, useState } from 'react';

let observer = null;

const LOAD_IMG_EVENT_TYPE = 'loadImage';

const onIntersecrtion: IntersectionObserverCallback = (entries, io) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};

interface useObserverProps {
  lazy: boolean | undefined;
  ref: React.RefObject<HTMLImageElement>;
  threshold: number;
}

const useObserver = ({ lazy, ref, threshold }: useObserverProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }
    const handleLoadImage = () => setLoaded(true);
    if (ref) {
      const imgElement = ref.current;

      imgElement &&
        imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);

      return () => {
        imgElement &&
          imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
      };
    }
  }, [lazy, ref]);

  useEffect(() => {
    if (!lazy) return;
    observer = new IntersectionObserver(onIntersecrtion, { threshold });

    ref.current && observer.observe(ref.current);
  }, [lazy, threshold, ref]);
  return [loaded, setLoaded];
};

export default useObserver;
