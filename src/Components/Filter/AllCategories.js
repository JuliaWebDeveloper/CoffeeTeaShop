import Filter from "./Filter";

function AllCategories() {
   
    return(
        <div className="container">
            {['Все','Чай','Кофе','Аксессуары для чая','Аксессуары для кофе','Подарочный набор чая и кофе'].map(category => <Filter category={category} />)}
        </div>
    )
}
export default AllCategories;