import Card from './Card';
function Tours(props){
    function removeHandler(id) {
        console.log(id);
        props.removeTours(id);
    }
    return(
        <div className='container'>
            <div>
            <h2 className='title'>Plan your Vacation with Vijay</h2>
            </div>
            <div className='cards'>
                {
                props.tour.map( (tour)=> {
                   return <Card {...tour} key={tour.id}  removeTour={removeHandler}></Card>
                })
            }
            </div>
        </div>
    );
}

export default Tours;