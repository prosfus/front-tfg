interface Props {
  children: JSX.Element;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="backgroundShadow -z-10 absolute w-screen h-[200px]"></div>
      {children}
    </>
  );
};
