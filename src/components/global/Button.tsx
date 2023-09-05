const Button = ({ children, type, className, onClick }: any) => {
  return (
    <button onClick={onClick} type={type ? type : `submit`} className={`${className} p-2 rounded-xl`}>
      {children}
    </button>
  );
};

export default Button;
