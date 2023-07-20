/**
 * 更新 State 中的数组
 * 
 * 数组是另外一种可以存储在 state 中的 JavaScript 对象，它虽然是可变的，
 * 但是却应该被视为不可变。
 * 同对象一样，但你想要更新存储于 state 中的数组时，你需要创建一个新的数组（或者创建
 * 一份已有数组的拷贝值），并使用新数组设置 state。
 */

/**
 * 1. 在没有 mutation 的前提下更新数组
 * 
 * 在 js 中，数组只是另一种对象。 同对象一样，你需要将 React state 中的数组视为只读。
 * 这意味着你不应该使用类似于 arr[0] = 'bird' 这样的方式来重新分配数组中的元素，也不应该
 * 使用会直接修改原始数组的方法，push() 和 pop()。
 * 
 * 相反，每次要更新一个数组时，你需要把一个新的数组传入 state 的 setting 方法中。
 * 为此，你可以通过 filter() 和 map() 这样不会直接修改原始值的方法，从原始数组生成一个新的数组。
 * 然后你就可以将 state 设置为这个新生成的数组。
 * 
 * 数组方法： 
 * 
 * 改变原数组： 
 *   1. 添加元素： push, unshift
 *   2. 删除元素：pop, shift, splice
 *   3. 替换元素：splice, arr[i]= ...赋值
 *   4. 排序：reverse, sort
 * 
 * 不改变原数组：（推荐）
 *   1. concat, [...arr]展开语法
 *   2. filter， slice
 *   3. map
 *   4. 先将数组复制一份 
 */

/**
 * 向数组中添加元素
 */

import { useState } from "react";

// let nextId = 0;

// export default function List () {
// 	const [name, setName] = useState('');
// 	const [artists, setArtists] = useState([]);

// 	return (
// 		<>
// 			<h1>振奋人心的雕塑家们:</h1>
// 			<input 
// 				value={name}
// 				onChange={e => setName(e.target.value)}
// 			/>
// 			<button
// 				onClick={() => {
// 					// artists.push({
// 					// 	id: nextId ++,
// 					// 	name: name
// 					// })
// 					setArtists([
// 						{ id: nextId++, name: name },
// 						...artists,
// 					])
// 				}}
// 			>
// 				添加
// 			</button>
// 			<ul>
// 				{
// 					artists.map(artist => (
// 						<li key={artist.id}>{ artist.name }</li>
// 					))
// 				}
// 			</ul>
// 		</>
// 	)
// }

/**
 * 从数组中删除元素
 * 
 * 从数组中删除一个元素最简单的方法就是将它过滤出去。换句话说，你需要生成一个不包含该元素的新数组。
 * 这可以通过 filter 方法实现。
 */

// let initialArtist = [
// 	{ id: 0, name: 'content-0' },
// 	{ id: 1, name: 'content-1' },
// 	{ id: 2, name: 'content-2' },
// ];

// export default function List () {
// 	const [artists, setArtists] = useState(initialArtist);

// 	return (
// 		<>
// 			<h1>振奋人心的雕塑家们：</h1>
// 			<ul>
// 				{
// 					artists.map(artist => (
// 						<li key={ artist.id }>
// 							{ artist.name }{' '}
// 							<button
// 								onClick={() => {
// 									setArtists(
// 										artists.filter(i => i.id !== artist.id)
// 									)
// 								}}
// 							>del</button>
// 						</li>
// 					))
// 				}
// 			</ul>
// 		</>
// 	)
// }

/**
 * 转换数组
 * 
 * 如果你想要改变数组中的某些或全部元素，你可以用 map() 创建一个新数组。
 * 你传入 map 的函数决定了要根据每个元素的值或索引(或二者都要)对元素做何处理。
 */

// let initialShapes = [
// 	{ id: 0, type: 'circle', x: 50, y: 100 },
// 	{ id: 1, type: 'square', x: 150, y: 100 },
// 	{ id: 2, type: 'circle', x: 250, y: 100 },
// ];

// export default function ShapeEditor () {
// 	const [shapes, setShapes] = useState(initialShapes);

// 	function handleClick () {
// 		const nextShapes = shapes.map(shape => {
// 			if (shape.type === 'square') {
// 				return shape;
// 			} else {
// 				return {
// 					...shape,
// 					y: shape.y + 100
// 				}
// 			}
// 		})

// 		setShapes(nextShapes);
// 	}

// 	return (
// 		<>
// 			<button
// 				onClick={handleClick}
// 			>所有圆形向下移动！</button>

// 			{
// 				shapes.map(shape => (
// 					<div
// 						key={ shape.id }
// 						style={{
// 							background: 'purple',
// 							position: 'absolute',
// 							left: shape.x,
// 							top: shape.y,
// 							borderRadius: shape.type === 'circle' ? '50%' : '',
// 							width: 20,
// 							height: 20,
// 						}}
// 					></div>
// 				))
// 			}
// 		</>
// 	)
// }

/**
 * 替换数组中的元素
 * 
 * 想要替换数组中一个或多个元素是非常常见的。类似 arr[0] = 'bird' 这样的赋值语句会直接修改原始数组，所以在这种情况下，你也应该
 * 使用 map。
 * 
 * 要替换一个元素，请使用 map 创建一个新数组。在你的 map 回调里，第二个参数是元素的索引。使用索引来判断
 * 最终是返回原始的元素（即回调的第一个参数）还是替换成其他值:
 */

// let initialCounters = [
// 	0, 0, 0
// ];

// export default function CounterList () {

// 	const [counters, setCounters] = useState(initialCounters);

// 	function handleClick (i) {
// 		const nextCounters = counters.map((counter, index) => {
// 			if (i === index) {
// 				return counter + 1;
// 			} else {
// 				return counter;
// 			}
// 		});

// 		setCounters(nextCounters);
// 	}

// 	return (
// 		<ul>
// 			{
// 				counters.map((counter, index) => (
// 					<>
// 						<li>
// 							{ counter }{' '}
// 							<button onClick={() => handleClick(index)}>+1</button>
// 						</li>
// 					</>
// 				))
// 			}
// 		</ul>
// 	)
// }


/**
 * 向数组中插入元素
 * 
 * 有时，你也许想向数组特定位置插入一个元素，这个位置既不在数组开头，也不在末尾。
 * 为此，你可以将数组展开运算符 ... 和 slice() 方法一起使用。
 * slice() 方法让你从数组中切出"一片"。为了将元素插入数组，你需要展开原数组在插入点之前的切片，然后插入
 * 新元素，最后展开原数组中剩下的部分。
 */

let nextId = 3;
const initialArtist = [
	{ id: 0, name: 'name-0' },
	{ id: 1, name: 'name-1' },
	{ id: 2, name: 'name-2' },
];

export default function List () {
	const [name, setName] = useState('');
	const [artists, setArtists] = useState(initialArtist);

	function handleChange (e) {
		setName(e.target.value);
	}

	function handleClick (e) {
		const insertAt = 1;
		const nextArtists = [
			...artists.slice(0, insertAt),
			{ id: nextId ++, name: name },
			...artists.slice(insertAt)
		];

		setArtists(nextArtists);
	}

	return (
		<>
			<h1>振奋人心的雕塑家们：</h1>
			<input 
				value={ name }
				onChange={handleChange}
			/>
			<button onClick={handleClick}>插入</button>

			<ul>
				{
					artists.map(artist => (
						<li 
							key={artist.id }
						>
							{ artist.name }
						</li>
					))
				}
			</ul>
		</>
	)
}