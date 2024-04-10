import { useDispatch, useSelector } from "react-redux";
import { filteredCategory, getSelectedCategory } from "../../redux/productsSlice";

function Filter({category}) {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    
    return(
        <div>
          <p onClick={() => {dispatch(filteredCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{category}</p>
        </div>
    )

}
export default Filter;