import React from 'react'
import { fishData } from './fish'


const page = () => {
    return (
        <div className='overflow-x-auto w-auto'>
            <table className='table-auto'>
                <thead>
                    <tr >
                        <th>Name</th>
                        <th>Price</th>
                        <th>Time</th>
                        <th>Weather</th>
                        <th>Spr</th>
                        <th>Sum</th>
                        <th>Fal</th>
                        <th>WIN</th>
                        <th>Rarity</th>
                    </tr>
                </thead>
                <tbody>

                    {fishData.map(fish => (
                        <tr key={fish.Name} >
                            <td>{fish.Name}</td>
                            <td>{fish.Price}</td>
                            <td>{fish.Time}</td>
                            <td>{fish.Weather}</td>
                            <td>{fish.SPR}</td>
                            <td>{fish.SUM}</td>
                            <td>{fish.FAL}</td>
                            <td>{fish.WIN}</td>
                            <td>{fish.Rarity}</td>
                        </tr>))}


                </tbody>
            </table>
        </div>
    )
}

export default page