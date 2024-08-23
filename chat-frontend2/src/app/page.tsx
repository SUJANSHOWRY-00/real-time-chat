'use client';

import MyComponent from './myComponent';
import { useState } from 'react';
export default function Home() {
	const [name, setName] = useState<string>("");
	const [roomId, setRoomId] = useState<string>("");
	const [flag, setFlag] = useState<Boolean>(false);
	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			{
				!flag ? <>
					<h1>Welcome !</h1>
					<input onChange={(e) => setName(e.target.value)} className="bg-black text-white w-64 h-12 p-3 m-2 rounded-lg" type="text" name="Name" placeholder="Enter Your Name!" />
					<input onChange={(e) => setRoomId(e.target.value)} className="bg-black text-white w-64 h-12 p-3 rounded-lg" type="text" name="Name" placeholder="Enter RoomId To Join!" />
					<input type="button" value="Submit" onClick={() => setFlag(true)} className="bg-black text-white m-3 w-64 h-12 p-3 rounded-lg hover:bg-gray-800 cursor-pointer" />

				</> :
					<MyComponent name={name} roomId={roomId}/>
			}
		</main>
	);
}
