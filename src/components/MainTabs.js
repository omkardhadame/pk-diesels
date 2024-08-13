import React from "react";
import Header from "./Header/Header";
import ImageSlider from "./Body/ImageSlider";
import Service from "./Body/Service";
import { Divider } from "semantic-ui-react";

export const MainTabs = () => {

    return(
        <div>
        <Header />
            <div className=' w-full h-full'>
            <div className="bg-gray-300">
                <ImageSlider/>
            </div>
                <Divider />
                <Service />
            </div>
        </div>
    )
}