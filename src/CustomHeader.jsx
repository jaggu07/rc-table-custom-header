import React, { useState } from "react";

const CustomHeader = ({ expanded, handleExpand, summaryData }) => {
  return (
    <>
      <thead>
        <tr>
          <th colSpan={7}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Summary</span>
              {
                <span onClick={handleExpand} style={{ cursor: "pointer" }}>
                  {expanded ? "[-]" : "[+]"}
                </span>
              }
            </div>
          </th>
        </tr>
      </thead>
      {expanded && (
        <>
          {summaryData.map((s, index) => {
            return (
              <tr>
                {index === 0 && (
                  <td colSpan={4} rowspan={summaryData.length} fixed>
                    <p>summary chart</p>
                  </td>
                )}
                {Object.keys(s).map((k) => {
                  return (
                    <td>
                      <p>{s[k]}</p>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </>
      )}
    </>
  );
};

export default CustomHeader;
