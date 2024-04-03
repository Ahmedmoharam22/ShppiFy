
import './categorieslist.css'

const CategoriesList = ({
  handleAllClick,
  handleCategorie,
  active,
  dataItems,
}) => {
  const { data } = dataItems;

  return (
    <>
      <ul className="ul-cate px-0 px-lg-2 mb-3 mb-lg-0">
        <li
          className={`py-2 ${active === 0 ? "active" : ""}`}
          onClick={handleAllClick}
        >
          <label htmlFor="all">
            <input id="all" type="radio" name="categories" />
            <span>All</span>
            
          </label>
        </li>
        
        
        {data &&
          data.map((cate, index) => (
            <li
              key={index}
              className={` py-2 ${active === index + 1 ? "active" : ""} `}
              data-val={cate}
              onClick={(e) => handleCategorie(e, index)}
            >
              <label htmlFor={cate}>
                <input type="radio" name="categories" id={cate} />
                <span>{cate}</span>
              
              </label>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CategoriesList;
