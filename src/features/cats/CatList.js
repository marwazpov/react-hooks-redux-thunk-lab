const CatList = ({ catPics }) => {
    return (
      <div>
        <h1>Cat List</h1>
        {catPics?.map((pic) => (
          <img key={pic.id} src={pic.url} alt="cat" />
        ))}
      </div>
    );
  };
  
  export default CatList;