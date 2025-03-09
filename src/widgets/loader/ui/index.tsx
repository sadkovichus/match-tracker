import { LoaderAnimation, LoaderContainerStyle } from './styles';

export const Loader = () => {
  return (
    <LoaderContainerStyle>
      <LoaderAnimation name='update' size={50} />
    </LoaderContainerStyle>
  );
};
