import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      wrapperStyle={{
        justifyContent: 'center',
        marginTop: '100px',
        zIndex: '999',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#b3196e"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
};
