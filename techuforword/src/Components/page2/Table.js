import React from 'react';
import './Tables.css';

const Table = ({ data }) => {
    
  return (
    <>
      <div>
        <h1>Code Snippet Submitted Data Information</h1>
      </div>

      <div className='container1'>
        <table>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Coding Language</th>
              <th>TimeStamp</th>
              <th>SourceCode</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.UserName}</td>
                <td>{item.Language}</td>
                <td>{item.TimeStamp}</td>
                <td>{item.SourceCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
