import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { BiSolidBowlHot } from "react-icons/bi";
import { TbBowlChopsticksFilled } from "react-icons/tb";
import { BiFoodMenu } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa6";
import { LiaHamburgerSolid } from "react-icons/lia";

export const categories = [
    {
        id: 1,
        name: "All",
        image: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 2,
        name: "Breakfast",
        image: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 3,
        name: "Soups",
        image: <BiSolidBowlHot className="w-[60px] h-[60px] text-green-600" />

    },
    {
        id: 4,
        name: "Pasta",
        image: <TbBowlChopsticksFilled className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 5,
        name: "main_course",
        image: <BiFoodMenu className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 6,
        name: "Pizza",
        image: <FaPizzaSlice className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id: 7,
        name: "Burger",
        image: <LiaHamburgerSolid className="w-[60px] h-[60px] text-green-600" />

    }
]   
 