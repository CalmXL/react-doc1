/**
 * 更新一个嵌套对象
 */

/**
 * 对象并非真正的 "嵌套的"
 *
 * let obj = {
 *   name: 'xulei',
 *   artwork: {
 *     title: 'Blue',
 *     city: 'Hamburg',
 *     image: 'https://i.imgur.com/Sd1AgUOm.jpg',
 *   }
 * }
 *
 * 然而，当我们思考对象的特性时，"嵌套" 并不是一个非常准确的方式。
 * 当这段代码运行得时候，不存在"嵌套"的对象。你实际上看到的是俩个不同的对象：
 *
 * let obj1 = {
 *   title: 'Blue',
 *   city: 'Hamburg',
 *   image: 'https://i.imgur.com/Sd1AgUOm.jpg',
 * }
 *
 * let obj2 = {
 *   name: 'xulei',
 *   artwork: obj1
 * }
 *
 * 对象 obj1 并不处于 obj2 的"内部"。
 */
import { useState} from "react";

export default function Form () {
	const [person, setPerson] = useState({
		name: 'xulei',
		artwork: {
			title: 'Blue Nana',
			city: 'Hamburg',
			image: 'https://i.imgur.com/Sd1AgUOm.jpg'
		}
	});
	
	function handleNameChange (e) {
		setPerson({
			...person,
			name: e.target.value
		})
	}
	
	function handleTitleChange (e) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				title: e.target.value
			}
		})
	}
	
	function handleCityChange (e) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				city: e.target.value
			}
		})
	}
	
	function handleImageChange (e) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				image: e.target.value
			}
		})
	}
	
	
	return (
		<>
			<label>
				Name:
				<input
					value={person.name}
					onChange={handleNameChange}
				/>
			</label>
			<label>
				Title:
				<input
					value={person.artwork.title}
					onChange={handleTitleChange}
				/>
			</label>
			<label>
				City:
				<input
					value={person.artwork.city}
					onChange={handleCityChange}
				/>
			</label>
			<label>
				Image:
				<input
					value={person.artwork.image}
					onChange={handleImageChange}
				/>
			</label>
			
			<p>
				<i>{person.artwork.title}</i>
				{' by '}
				{person.name}
				<br />
				(located in {person.artwork.city})
			</p>
			<img
				src={person.artwork.image}
				alt={person.artwork.title}
			/>
		</>
	)
}