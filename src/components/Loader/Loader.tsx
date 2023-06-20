import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.scss';

export default function LoadingComponent() {
  return (
    <div className={css.loader}>
      <InfinitySpin color="#fc842d" />
    </div>
  );
}
