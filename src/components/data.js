import React from "react";


export const columns =  [
    {
      Header: 'Image',
      Cell: (row) => {
        return <div><img height={100} src={row.original.image}/></div>
      }
  },
    {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  },  {
    Header: 'Quantity',
    accessor: 'quantity'
  }, {
    Header: 'Price',
    accessor: 'price'
  }

]

