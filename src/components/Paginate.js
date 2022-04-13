import ReactPaginate from "react-paginate";
import React, {useState} from "react";

function Paginate() {

    const [items,setItems] = useState([]);

    const handlePageClick = (data) => {
        console.log(data);
    }
    return (
        <div>
            <ReactPaginate
                pageCount={4}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                nextClassName={'page-item'}
                activeClassName={'active'}
            />
        </div>
    )

}
export default Paginate