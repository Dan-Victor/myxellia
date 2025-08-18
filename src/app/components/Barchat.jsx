'use client';

import { use } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';


const data = [
 { name: 'Jan', sales1: 35,sales2: 25, sales3: 10  },
 { name: 'Feb', sales1: 5,sales2: 25, sales3: 10  },
 { name: 'Mar', sales1: 15,sales2: 7, sales3: 3  },
 { name: 'Apr', sales1: 15,sales2: 23, sales3: 10  },
 { name: 'May', sales1: 10,sales2: 5, sales3: 8  },
 { name: 'Jun', sales1: 40,sales2: 50, sales3: 10  },
 { name: 'Jul', sales1: 25,sales2: 35, sales3: 15  },
 { name: 'Aug', sales1: 25,sales2: 5, sales3: 15  },  
 { name: 'Sep', sales1: 40,sales2: 35, sales3: 8  },
];




const Barchat = () => {
  return (
     <BarChart width={510} height={221} data={data}  barCategoryGap="25%"  >
    <XAxis dataKey="name"  tickLine={false} // removes the small tick marks
  axisLine={false}/>
    <YAxis  tickLine={false} ticks={[0, 10, 20,30, 40, 50]}  domain={[0, 50]}  tickFormatter={(value) => `${value}m`} />
    <Tooltip  tickFormatter={(value) => `${value}m`} />
     <Bar dataKey="sales1" barSize={6} fill="#4545FE" />
    <Bar dataKey="sales2" barSize={6}  fill="#12B76A" /> {/* You can change the color */}
     <Bar dataKey="sales3" barSize={6}  fill="#F04438" /> {/* You can change the color */}
  </BarChart>
  )
}

export default Barchat