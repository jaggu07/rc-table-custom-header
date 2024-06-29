import React, { useState } from "react";
import Table from "rc-table";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import CustomHeader from "./CustomHeader";
import { data, summaryData } from "./data";

const Expand = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);

  const columns = [
    { title: "Col 1", dataIndex: "col1", key: "col1" },
    { title: "Col 2", dataIndex: "col2", key: "col2" },
    { title: "Col 3", dataIndex: "col3", key: "col3" },
    { title: "Col 4", dataIndex: "col4", key: "col4" },
    { title: "Col 5", dataIndex: "col5", key: "col5" },
    { title: "Col 6", dataIndex: "col6", key: "col6" },
    { title: "Col 7", dataIndex: "col7", key: "col7" },
  ];

  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <Table
        columns={columns}
        data={paginatedData}
        rowKey="key"
        pagination={true}
        components={{
          table: ({ children, ...props }) => (
            <table {...props}>
              <CustomHeader
                expanded={expanded}
                handleExpand={handleExpand}
                summaryData={summaryData}
              />
              {children}
            </table>
          ),
        }}
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={handlePageChange}
        showSizeChanger
        onShowSizeChange={handlePageChange}
      />
    </>
  );
};

export default Expand;
