/**
 * 使用 Immer 编写简单的更新逻辑
 *
 * 如果你的 state 有多层的嵌套，你或许应该考虑将其 扁平化。
 * 但是，如果你不想改变 state 的数据结构，你可能更喜欢用一种便捷的方式来实现嵌套展开的效果。
 * Immer 是一个非常流行的库，它可以让你使用简便但可以直接修改语法编写代码，并会帮你处理好复制过程。
 * 通过使用 Immer ，你写出来的代码看起来就像"打破了规则"而直接修改了对象：
 */

import { useImmer } from "use-immer";

export default function Form () {
	const [person, updatePerson] = useImmer({
		name: 'xulei',
		artWork: {
			title: 'Blue',
			city: 'shanghai',
			image: 'https://i.img.jpg'
		}
	});
	
	function handleNameChange (e) {
		updatePerson(draft => {
			draft.name = e.target.value;
		})
	}
	
	function handleTitleChange (e) {
		updatePerson(draft => {
			draft.artWork.title = e.target.value;
		})
	}
	
	function handleCityChange (e) {
		updatePerson(draft => {
			draft.artWork.city = e.target.value;
		})
	}
	
	function handleImageChange (e) {
		updatePerson(draft => {
			draft.artWork.image = e.target.value;
		})
	}
	
	return (
		<>
			<label>
				name:
				<input
					value={person.name}
					onChange={handleNameChange}
				/>
			</label>
			<label>
				title:
				<input
					value={person.artWork.title}
					onChange={handleTitleChange}
				/>
			</label>
			<label>
				name:
				<input
					value={person.artWork.city}
					onChange={handleCityChange}
				/>
			</label>
			<label>
				image:
				<input
					value={person.artWork.image}
					onChange={handleImageChange}
				/>
			</label>
			
			<p>
				<i>{ person.artWork.title }</i>
				{ 'by' }
				{ person.name }
				<br/>
				(located in { person.artWork.city })
			</p>
			<img
				src={person.artWork.image}
				alt={person.artWork.title}
			/>
		</>
	)
}