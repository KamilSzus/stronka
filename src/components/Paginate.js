
import ReactPaginate from "react-paginate";
import React, {useEffect, useState} from "react";

function Paginate() {

    const [items, setItems] = useState([]);

    const [pageCount, setPageCount] = useState(0);

    let itemsNumber = 18;

    useEffect(()=> {
        fetch(`http://localhost:8080/items/books/pageNumber1/NumberOfItems${itemsNumber}`
        )
            .then(res => res.json())
            .then((result) => {
                setItems(result);
                }
            )
    },[])

    const fetchComments = async (pageNumber) => {
        const res = await fetch(
            `http://localhost:8080/items/books/pageNumber${pageNumber}/NumberOfItems${itemsNumber}`
        );
        return await res.json();
    };

    const handlePageClick = async (data) => {
        let pageNumber = data.selected + 1;
        const commentsFormServer = await fetchComments(pageNumber);
        setItems(commentsFormServer);
    };
    return (
        <div>
            <div className="container">
                <div className="row m-2">
                    {items.map((item) => {
                        return (
                            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
                                <div className="card shadow-sm w-100" style={{minHeight: 225}}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center h2">Id :{item.title} </h5>
                                        <h6 className="card-subtitle mb-2 text-muted text-center">
                                            {item.author}
                                        </h6>
                                        <p className="card-text">{"d"}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <ReactPaginate
                    pageCount={2}
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
        </div>
    )

}
export default Paginate