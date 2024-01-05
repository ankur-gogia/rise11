import React from 'react';
import { BsGraphUpArrow, BsGraphDownArrow }
  from 'react-icons/bs'
import { PieChart, Pie, LabelList, Label, AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';
const COLORS = ['#FF8042', '#0047AB'];
function Home() {
  const data = [
    { name: 'Jan', 'Course Visit': 40, 'Course Sold': 24, amt: 24 },
    { name: 'Feb', 'Course Visit': 30, 'Course Sold': 13, amt: 22 },
    { name: 'Mar', 'Course Visit': 20, 'Course Sold': 78, amt: 22 },
    { name: 'Apr', 'Course Visit': 27, 'Course Sold': 39, amt: 20 },
    { name: 'May', 'Course Visit': 18, 'Course Sold': 48, amt: 21 },
    { name: 'Jun', 'Course Visit': 23, 'Course Sold': 38, amt: 25 },
    { name: 'Jul', 'Course Visit': 34, 'Course Sold': 43, amt: 21 },
    { name: 'Aug', 'Course Visit': 15, 'Course Sold': 32, amt: 18 },
    { name: 'Sep', 'Course Visit': 28, 'Course Sold': 59, amt: 22 },
    { name: 'Oct', 'Course Visit': 39, 'Course Sold': 36, amt: 29 },
    { name: 'Nov', 'Course Visit': 22, 'Course Sold': 42, amt: 20 },
    { name: 'Dec', 'Course Visit': 32, 'Course Sold': 53, amt: 24 },
  ];

  const data2 = [
    { day: 'Monday', value: 14 },
    { day: 'Tuesday', value: 98 },
    { day: 'Wednesday', value: 40 },
    { day: 'Thursday', value: 48 },
    { day: 'Friday', value: 38 },
  ];

  const data3 = [
    { name: 'current week', value: 2000 },
    { name: 'last week', value: 1500 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Hello, Ankur</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <p>Impressions</p>
            {/* Replace the icon with the LineChart */}

            <ResponsiveContainer className='card_icon'>
              <LineChart data={data2}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <h3>832</h3>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <p>Total audience</p>
            {/* Replace the icon with the LineChart */}

            <ResponsiveContainer className='card_icon'>
              <LineChart data={data2}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <h3>832</h3>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <p>Engagements</p>
            {/* Replace the icon with the LineChart */}

            <ResponsiveContainer className='card_icon'>
              <LineChart data={data2}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <h3>832</h3>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <p>Engaged audience</p>
            {/* Replace the icon with the LineChart */}

            <ResponsiveContainer className='card_icon'>
              <LineChart data={data2}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <h3>832</h3>
        </div>
      </div>
      <div className='charts'>
        <div className='cards'>
        <div className='table1'>
            <div className='row'>
              <div className='doubletext'>
                <p className='boldtext' style={{ fontWeight: '200' }}>Revenue</p>
              </div>
            </div>
          </div>
        <ResponsiveContainer width="100%" height="100%" maxHeight={300}>
          <AreaChart width={750} height={300} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} align='right' iconType='circle' />
            <Area type="monotone" dataKey="Course Visit" stroke="red" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="Course Sold" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
        </div>
        <div className='cards'>
        <div className='table1'>
            <div className='row'>
              <div className='doubletext'>
                <p className='boldtext' style={{ fontWeight: '200' }}>Visitors</p>
              </div>
            </div>
          </div>
        <ResponsiveContainer width="100%" height="100%" maxHeight={300}>
          <BarChart
            width={250}
            height={250}
            data={data2}
            barSize={10}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" >
              <LabelList dataKey="name" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        </div>
      

      </div>
      <div className='tri-cards'>
        <div className='cards'>
          <div className='table1'>
            <div className='row'>
              <div className='doubletext'>
                <p className='boldtext' style={{ fontWeight: '200' }}>Sale</p>
              </div>
            </div>
          </div>
          
          <PieChart width={300} height={200} >
            <Pie
              data={data3}
              cx={180}
              cy={80}
              innerRadius={60}
              outerRadius={70}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              <Label className='insidepie' value="3500" offset={0} position="center" />
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          <div className='table1'>
            <div className='row'>
              <div className='doubletext'>
                <p className='boldtext'>Current week</p>
              </div>
              <p className='boldtext'>2000</p>
              <div>
                
                <BsGraphUpArrow className='icon' style={{ color: 'green'}} />
                +0.3%
              </div>

            </div>

            <div className='row'>
              <div className='doubletext'>
                <p className='boldtext'>Last Week</p>
              </div>
              <p className='boldtext'>1500</p>
              <div>
                <BsGraphDownArrow className='icon' style={{ color: 'red'}} />
                -0.5%
              </div>

            </div>
          </div>
        </div>
        <div className='cards'>
          <div className='table1'>
            <div className='row'>
              <div className='doubletext'>
                <p className='boldtext' style={{ fontWeight: '200' }}>Weekly Sale Stats</p>
              </div>
            </div>
          </div>
          <AreaChart width={400} height={120} data={data2}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#color)" />
          </AreaChart>
          <div className='table1'>
            <div className='row'>
              <img src="src/assets/1.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
                <p className='boldtext'>Adobe xd 01</p>
                <p className='dimtext'>Fundamental</p>
              </div>
              <p className='rightmost'>20$</p>
            </div>

            <div className='row'>
              <img src="src/assets/1.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
                <p className='boldtext'>Adobe xd 02</p>
                <p className='dimtext'>Must Buy</p>
              </div>
              <p className='rightmost'>30$</p>
            </div>

            <div className='row'>
              <img src="src/assets/2.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
                <p className='boldtext'>Adobe xd 03</p>
                <p className='dimtext'>Bestseller</p>
              </div>
              <p className='rightmost'>40$</p>
            </div>
          </div>
        </div>
        <div className='cards'>
        <div className='table1'>
            <div className='row'>
              <div className='doubletext'>
              <p className='boldtext' style={{ fontWeight: '200' }}> Student Queries </p>
              </div>
            </div>
          </div>
          <div className='table1' style={{ marginTop: '20px' }}>
            <div className='row'>
              <img src="src/assets/3.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
                <p className='boldtext'>Adobe xd 1</p>
                <p className='dimtext'>sample text 1</p>
              </div>
              <p className='accept'>Approve</p>
              <p className='rightmost'>Decline</p>
            </div>

            <div className='row'>
              <img src="src/assets/4.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
                <p className='boldtext'>Adobe xd 1</p>
                <p className='dimtext'>sample text 1</p>
              </div>
              <p className='accept'>Approve</p>
              <p className='rightmost'>Decline</p>
            </div>

            <div className='row'>
              <img src="src/assets/5.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
               <p className='boldtext'>Adobe xd 1</p>
                <p className='dimtext'>sample text 1</p>
              </div>
              <p className='accept'>Approve</p>
              <p className='rightmost'>Decline</p>
            </div>
            <div className='row'>
              <img src="src/assets/6.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
                <p className='boldtext'>Adobe xd 1</p>
                <p className='dimtext'>sample text 1</p>
              </div>
              <p className='accept'>Approve</p>
              <p className='rightmost'>Decline</p>
            </div>
            <div className='row'>
              <img src="src/assets/6.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
                <p className='boldtext'>Adobe xd 1</p>
                <p className='dimtext'>sample text 1</p>
              </div>
              <p className='accept'>Approve</p>
              <p className='rightmost'>Decline</p>
            </div>
          </div>
        </div>
      </div>
      <div className='singular'>
      <div className='table1'>
            <div className='row'>
              <div className='doubletext'>
                <p className='boldtext' style={{ fontWeight: '200' }}>Course Status</p>
              </div>
            </div>
          </div>
      <div className='table1' style={{ marginTop: '50px' }}>
            <div className='row'>
              <img src="src/assets/2.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
                <p className='boldtext'>Advanced excel formulas and functions</p>
                <p className='dimtext'>learn backend</p>
              </div>
              <p>Design</p>
              <p>150</p>
              <p>⭐4.5</p>
              <p>$610</p>
              <p>24512</p>
              
            </div>
            <div className='row'>
              <img src="src/assets/3.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
                <p className='boldtext'>Advanced excel formulas and functions</p>
                <p className='dimtext'>learn backend</p>
              </div>
              <p>Design</p>
              <p>150</p>
              <p>⭐4.5</p>
              <p>$610</p>
              <p>24512</p>
              
            </div>
            <div className='row'>
              <img src="src/assets/4.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
                <p className='boldtext'>Advanced excel formulas and functions</p>
                <p className='dimtext'>learn backend</p>
              </div>
              <p>Design</p>
              <p>150</p>
              <p>⭐4.5</p>
              <p>$610</p>
              <p>24512</p>
              
            </div>
            <div className='row'>
              <img src="src/assets/5.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
                <p className='boldtext'>Advanced excel formulas and functions</p>
                <p className='dimtext'>learn backend</p>
              </div>
              <p>Design</p>
              <p>150</p>
              <p>⭐4.5</p>
              <p>$610</p>
              <p>24512</p>
              
            </div>
            <div className='row'>
              <img src="src/assets/6.jpeg" alt="image" className='tableimg' />
              <div className='doubletext'>
                <p className='boldtext'>Advanced excel formulas and functions</p>
                <p className='dimtext'>learn backend</p>
              </div>
              <p>Design</p>
              <p>150</p>
              <p>⭐4.5</p>
              <p>$610</p>
              <p>24512</p>
              
            </div>
            
          </div>
      </div>
    </main>
  )
}

export default Home