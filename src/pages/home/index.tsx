
import { useState } from "react"
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../state/store';
import { addPerson, removePerson, getPersons } from '../../state/person/reducer';
import NextJsCarousel from "../../components/Carousel";
import CardService from "../../components/CardService";

const deliveryIcon = "/images/delivery.png"
const cashIcon = "/images/cash.png"
const checkIcon = "images/check.png"
const orderIcon = "images/order.png"


export default function HomePage() {

    const dispatch = useDispatch<AppDispatch>();
    const persons = useSelector(({ people }: RootState) => getPersons(people.persons));
    const [name, setName] = useState<string>("")


    const removeUser = (id: string) => {
        dispatch(removePerson(id))
    }


    return (
        <div className='flex flex-col justify-center items-center'>
            <NextJsCarousel />
            <div className='flex flex-row py-10 justify-around w-full'>
                <CardService icon={deliveryIcon} title="Fast Delivery" description="Fastest Delivery in Birmingham"/>
                <CardService icon={cashIcon} title="Card & Cash" description="Pay by cash or card"/>
                <CardService icon={checkIcon} title="Mouth Watering" description="Quality Food & Taste"/>
                <CardService icon={orderIcon} title="Easy to order" description="fast and easy order process"/>
            </div>

        </div>
    )
}
