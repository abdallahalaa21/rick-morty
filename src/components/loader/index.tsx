import loadingImg from '@images/loading.gif';

type Props = {
  multi?: boolean;
};

const Loader = ({ multi }: Props) => {
  if (multi) {
    return (
      <>
        <img src={loadingImg} height='200px' />
        <img src={loadingImg} height='200px' />
        <img src={loadingImg} height='200px' />
        <img src={loadingImg} height='200px' />
      </>
    );
  }
  return <img src={loadingImg} />;
};

export default Loader;
