import React from 'react'
import ReactPaginate from 'react-paginate';

function Pagination({setPageNumber,pageNumber,info}) {

  const handlePageClick=(e)=>{
      setPageNumber(e.selected + 1)
  }

  return (
    <ReactPaginate className='pagination justify-content-center gap-4 my-5'
     onPageChange={handlePageClick}
     forcePage={pageNumber===1 ? 0 : pageNumber-1 }
     activeClassName='active'
     pageClassName='page-item'
     nextClassName='d-none'
     previousClassName='d-none'
     pageLinkClassName='page-link'
     pageCount={info&&info.pages} />
  )
}

export default Pagination

