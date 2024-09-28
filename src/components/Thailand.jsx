import React from "react";
import Layout from "../../src/pages/Layout";  // Assuming Layout includes the Navbar
import video from "../assets/plan.mp4";
import VideoForEachCounty from "./VideoForEachCounty";
import PackageCardForCountryWise from "../components/PackageCardForCountryWise"
import { Heading,Text} from '@chakra-ui/react'
const Thailand = () => {
   const dummydata = [
    {
        "name":"package1",
        "text":"lorem ldfjdf dfdfkdjff fjdfjldkjf djfdjfdf",
        "money":"343434"
    },
    {
        "name":"package1",
        "text":"lorem ldfjdf dfdfkdjff fjdfjldkjf djfdjfdf",
        "money":"343434"
    },
    {
        "name":"package1",
        "text":"lorem ldfjdf dfdfkdjff fjdfjldkjf djfdjfdf",
        "money":"343434"
    }
   ]
  return (
    <Layout className="relative">
    <VideoForEachCounty src={video} name="Thailand" />
    <Heading className="text-center p-4">Overview</Heading>
    <Text className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, assumenda aliquid. A mollitia illum eos sequi laborum quidem eligendi reprehenderit quis qui!</Text>
    {/* //for card */}
    
    <div className=" bg-black">
    <Heading className="text-center text-white p-4">Popular destination</Heading>
    <div className="flex justify-center pb-10">
    {
    dummydata.map((items) => {
        return(
          
            <PackageCardForCountryWise packagemoney={items.money} packagename={items.name} packagetext={items.text}  />

        ) 
    })
   }
    </div>
  
    </div>
   
    </Layout>
  );
};

export default Thailand;
