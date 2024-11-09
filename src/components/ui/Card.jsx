const Card = ({ title, children, className = "" }) => {
    return (
      <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
        {title && (
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
        )}
        <div>
          {children}
        </div>
      </div>
    );
  };
  
  export default Card;