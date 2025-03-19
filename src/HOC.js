const HOC = (WrappedComponent) => {
    return (props) => (
      <div>
        <h1>{props.user.id}</h1>
        <h1>{props.user.name}</h1>
        <WrappedComponent {...props} />
      </div>
    );
  };
  
  export default HOC;
  