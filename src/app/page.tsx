
import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import BarChart  from './components/Barchat';
import Image from 'next/image';
import Link from "next/link";

export default function Home() {


  return (
    <div className="font-nuito text-black relative ">
            <Navbar />
      <Nav/>
      
      <div className='px-[78px] pt-[150px]'>
      <h1 className='font-[900] text-[20px] py-[16px]'>Welcome,Ahmed</h1>

    <div className="flex items-start justify-center gap-[20px]">
      <div className="px-[22px] pt-[16px] pb-[10px] w-auto h-auto border border-[1px] border-[#E4E4E4] rounded-[8px] ">
        <div className='flex items-start justify-between gap-[48px] '>
          <div className="">
          <h1 className="font-extrabold text-[20px] pb-[14px] ">Sales Overview</h1>
          <p className='text-[#606060] text-[12px] font-[400]'>Showing overview Jan 2022 - sep 2022</p>
          </div>
          {/*div for view transactions and the years*/}
          <div className="flex flex-col justify-center items-end  gap-[17px]">
          <button className="border border-[1px] py-[15px]   px-[30px] border-[#E4E4E4] rounded-full hover:bg-black hover:text-white">View Transactions</button>
          {/*div for the years*/}
           <ul className="flex justify-center items-center gap-[12px]">
            <li className="hover:bg-[#F5F5F5] px-[20px] py-[8px] text-[#3D3D3D]  rounded-[8px]">1 Week</li>
            <li className="hover:bg-[#F5F5F5] px-[20px] py-[8px] text-[#3D3D3D] rounded-[8px]">1 Month</li>
            <li className="hover:bg-[#F5F5F5] px-[20px] py-[8px] bg-[#F5F5F5] text-[#3D3D3D] font-[800] rounded-[8px]">1 Year</li>
           </ul>
          </div>
        </div>
        <hr className="mt-[12px] mb-[12px]   border-[#E4E4E4]"/>
        {/* BarChart component and total inflow div*/}
        <div className=" flex items-start justify-center ]">
          {/*div for barchart*/}
          <div className="">
            <BarChart />
          </div>
          {/*div for total inflow/mmr/gmv/cr*/}
          <div className="w-auto h-auto flex flex-col items-center justify-center gap-[14px] pt-[20px] ">
            {/*div for total inflow and mmr */}
            <div className="flex justify-center items-center gap-[16px]">
              {/*div for total inflow*/}
              <div className="flex flex-col gap-[8px] pl-[15px] pr-[21px] py-[13px]  border border-[1px] border-[#E4E4E4] rounded-[12px]"><h1 className=" text-[#4545FE] text-[19px] font-[900]">₦120,000,000.00</h1> <p className="text-[10px] font-[600] flex  gap-[4px]">Total Inflow <span className="text-[10px] text-[#12B76A] font-[600] flex gap-[4px] "><Image src='/Frame.svg' alt="arrow" width={14} height={14} className=""/>2.5%</span></p></div>
              {/*div for mmr */}
               <div className="flex flex-col gap-[8px] pl-[15px] pr-[21px] py-[13px]  border border-[1px] border-[#E4E4E4] rounded-[12px]"><h1 className=" text-[#12B76A] text-[19px] font-[900]">₦50,000,000.00</h1> <p className="text-[10px] font-[600] flex gap-[4px]">MMR <span className="text-[10px] text-[#12B76A] font-[600] flex gap-[4px]"><Image src='/Frame.svg' alt="arrow" width={14} height={14} className=""/>2.5%</span></p></div>
            </div>
            {/*div for gmv and cr */}
            <div className="flex justify-center items-center gap-[16px]">
                 {/*div for cr*/}
               <div className="flex flex-col gap-[8px] pl-[15px] pr-[21px] py-[13px]  border border-[1px] border-[#E4E4E4] rounded-[12px]"><h1 className=" text-[#14B8A6] text-[19px] font-[900]">₦200,000,000.00</h1> <p className="text-[10px] font-[600] flex  gap-[4px] ">Commission Revenue <span className="text-[10px] text-[#14B8A6] font-[600] flex gap-[4px]"><Image src='/Frame-2.svg' alt="arrow" width={14} height={14} className=""/>0.5%</span></p></div>
              {/*div for gmv */}
                 <div className="flex flex-col gap-[8px] pl-[15px] pr-[21px] py-[13px]  border border-[1px] border-[#E4E4E4] rounded-[12px]"><h1 className=" text-[#F04438] text-[19px] font-[900]">₦100,000,000.00</h1> <p className="text-[10px] font-[600] flex  gap-[4px]">GMV <span className="text-[10px] text-[#F04438] font-[600] flex gap-[4px]"><Image src='/Frame-1.svg' alt="arrow" width={14} height={14} className=""/>0.5%</span></p></div>
            </div>
          </div>
        </div>

      </div>
      {/*div for listing overview and users overview*/}
      <div className="w-[407px]  h-[325px] flex flex-col  gap-[30px]">
              {/*div for listing overview, total active and archived*/}
      <div className=' border border-[1px] flex flex-col  border-[#E4E4E4] rounded-[8px]  pb-[16px]'>
          {/*div for listing overview*/}    
      <div className="flex items-center w-full px-[16px] py-[16px] bg-[#F9FAFB] border-b-[0.5px] border-[#E4E4E4] rounded-t-[8px] justify-between"><p className="flex items-center justify-start gap-[10px]"><Image src='/solar_home-linear.png' alt='Solar Home' width={24} height={24} /> <span className="font-[700] text-[14px] text-[#292929]">Listing Overview</span></p> <p className='text-[#4545FE] font-[700] text-[12px]'>View all &gt;</p></div>
      {/*div for total active and archived*/}
      <div className="flex items-center justify-between px-[16px] pb-[16px] pt-[30px]">
        <div><h2 className="text-[#525252] font-[700] text-[14px]">Total</h2> <h1 className="text-[#141414] text-[24px] font-[800]">1.8k</h1></div>
      <div><h2 className="text-[#525252] font-[700] text-[14px]">Active</h2> <h1 className="text-[#141414] text-[24px] font-[800]">80</h1></div>
      <div><h2 className="text-[#525252] font-[700] text-[14px]">Archived</h2> <h1 className="text-[#141414] text-[24px] font-[800]">1k</h1></div>
      </div>
      </div>
              {/*div for user overview, total riders  and subscribed*/}
      <div className=' border border-[1px] border-[#E4E4E4] rounded-[8px]  pb-[16px]'>
          {/*div for user overview*/}    
      <div className="flex items-center  w-full px-[16px] py-[16px] bg-[#F9FAFB] border-b-[0.5px] border-[#E4E4E4] rounded-t-[8px] justify-between"><p className="flex items-center justify-start gap-[10px]"><Image src='/prof.png' alt='porfile' width={24} height={24} /> <span className="font-[700] text-[14px] text-[#292929]">Users Overview</span></p> <p className='text-[#4545FE] font-[700] text-[12px]'>View all &gt;</p></div>
      {/*div for total riders and subscribed*/}
      <div className="flex items-center justify-between px-[16px] pb-[16px] pt-[30px]">
        <div><h2 className="text-[#525252] font-[700] text-[14px]">Total</h2> <h1 className="text-[#141414] text-[24px] font-[800]">20.7</h1></div>
      <div><h2 className="text-[#525252] font-[700] text-[14px]">Riders</h2> <h1 className="text-[#141414] text-[24px] font-[800]">8.5k</h1></div>
      <div><h2 className="text-[#525252] font-[700] text-[14px]">Subscribers</h2> <h1 className="text-[#141414] text-[24px] font-[800]">7.5k</h1></div>
      </div>
      </div>
</div>
    </div>
      </div>
       <Image src="/Footer.png" alt="chatbot" width={57} height={57} className="absolute fixed z-999 right-0 mr-[70px] mt-[60px] cursor-pointer hover:transform-[scale-1]" />
      {/*for slideshow div */}
      <div className="flex items-center justify-center gap-[15px] mx-[78px] py-[20px] object-cover">
        <Image src="/ Metric item.png" alt="Slideshow" width={418} height={286} className="flex-1 object-cover" />
        <Image src="/Metric item-2.png" alt="Slideshow" width={418} height={286} className="flex-1 object-cover" />
        <Image src="/Metric item-1.png" alt="Slideshow" width={418} height={286} className="flex-1 object-cover" />
      </div>
    <h1 className="text-center text-blue-700"><Link href='https://dan-victor.netlify.app ' target="_blank">Made by Dan-Victor</Link></h1>
</div>
  );
}
