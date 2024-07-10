const Card = ({ children, classes }) => {
  return (
    <div className={`flex p-4 m-4 border rounded-lg ${classes}`}>
      {children}
    </div>
  );
};

export default Card;
