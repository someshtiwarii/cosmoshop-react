const Category = ({ categoryName, imgURL , id}) => {
    return (
      <div className="category-card category-card-1">
      <img src={imgURL} alt="spacesuit" />
      <p>{categoryName}</p>
       </div>
    );
  };
  
  export {Category};