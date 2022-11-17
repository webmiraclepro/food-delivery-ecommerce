
import { useState } from "react"
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../state/store';
import { addPerson, removePerson, getPersons } from '../../state/person/reducer';
import NextJsCarousel from "../../components/Carousel";

export default function HomePage() {

    const dispatch = useDispatch<AppDispatch>();
    const persons = useSelector(({ people }: RootState) => getPersons(people.persons));
    const [name, setName] = useState<string>("")

    
    const removeUser = (id: string) => {
        dispatch(removePerson(id))
    }

   
    return (
        <div className='flex flex-col justify-center items-center'>
            <NextJsCarousel/>
                <div className='flex flex-col my-5 text-blue-400'>
                    <div className='flex flex-row items-center justify-between justify-center'>
                       
                    </div>
                </div>
               
        </div>
    )
}
