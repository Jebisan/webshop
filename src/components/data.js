import React from "react";


export const data = [
        
        {
                id: "cfefb74b-fec8-472e-bd83-023eea8381e6",
                image: "https://babysam.azureedge.net/v-636796897903295051/c1/b4/de2d-5b02-439b-a380-61a54ef44fb1/download%20(71).png",
                name: "De Blide Kæmpers Børne-Zoo 10879",
                price: "179.95",
                quantity: 1
            },
                    {
                id: "9214fc3b-0033-4dc1-a5a4-048ffa29ec03",
                image: "https://babysam.azureedge.net/v-636894833598604763/64/fc/06b1-2b66-493a-9839-69ff39c3bab0/mine_foerste_aar_-_pige.jpg",
                name: "Mine Første År - Pige",
                price: "199.95",
                quantity: 1
            }, 
            {
                id: "41d7730d-3c6f-497c-ac52-02471dcd01d8",
                image: "https://babysam.azureedge.net/v-636923903109034839/51/bc/67f6-f606-4c42-bbb4-785805f8be13/9129.jpg",
                name: "Anti-Kolik Flaske 125ml",
                price: "79.95",
                quantity: 2
            }    
] 

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

