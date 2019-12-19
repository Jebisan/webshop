import React from "react";


export const columns =  [
    {
      Header: 'Billede',
      Cell: (row) => {
        return <div><img height={100} src={row.original.image}/></div>
      }
  },
    {
    Header: 'Produkt',
    accessor: 'name' // String-based value accessors!
  },  {
    Header: 'Antal',
    accessor: 'quantity'
  }, {
      Header: 'Pris pr. stk',
      Cell: (row) => {
        return <div> {parseFloat(row.original.price).toFixed(2)  + " DKK"}</div>
      }
},
  {
            Header: 'Pris',
            Cell: (row) => {
              return <div> {(row.original.price*row.original.quantity).toFixed(2)  + " DKK"}</div>
            }
      }
]

