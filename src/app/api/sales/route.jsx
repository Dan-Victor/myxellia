




export async function GET() {
  return Response.json({
    sales_overview: [
      { 
        "total-inflow": "120,000,000.00" ,
       "mmr": "50,000,000.00" ,
       "commission": "200,000,000.00" ,
       "gmv": "100,000,000.00"
     }
    ],
    listing_overview: [
      { 
        total: "1.8k", 
       active: "80" ,
       archived: "1k"
     }
    ],
    user_overview: [
      { 
        total: "20.7k" ,
      riders: "8.5k" ,
       subscribers: "7.5k"
     }
    ]
  })
}
