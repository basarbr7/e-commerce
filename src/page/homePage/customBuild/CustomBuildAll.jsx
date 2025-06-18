import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../../../component/ProductCard";
import Container from "../../../layer/Container";
import { useSelector } from "react-redux";

const CustomBuildAll = () => {
  const data = useSelector((state) => state.products.products);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  if (!data || data.length === 0) {
    return <p className="text-center">Loading Products...</p>;
  }

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <Container className="py-10">
      <div className="flex flex-wrap gap-x-1 gap-y-10 mb-20">
        {currentItems.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center gap-2 text-sm"
        pageClassName="border rounded cursor-pointer hover:bg-gray-200 "
        pageLinkClassName="block px-3 py-1"         
        activeLinkClassName="bg-blue-600 text-white" 
        previousClassName="mr-5 border rounded cursor-pointer hover:bg-gray-200"
        previousLinkClassName="block px-3 py-1 "
        nextClassName="ml-5 border rounded cursor-pointer hover:bg-gray-200 "
        nextLinkClassName="block px-3 py-1"
        disabledClassName="opacity-50 cursor-not-allowed"
      />

    </Container>
  );
};

export default CustomBuildAll;
