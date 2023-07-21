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

// let nextId = 3;
// const initialArtist = [
// 	{ id: 0, name: 'name-0' },
// 	{ id: 1, name: 'name-1' },
// 	{ id: 2, name: 'name-2' },
// ];

// export default function List () {
// 	const [name, setName] = useState('');
// 	const [artists, setArtists] = useState(initialArtist);

// 	function handleChange (e) {
// 		setName(e.target.value);
// 	}

// 	function handleClick (e) {
// 		const insertAt = 1;
// 		const nextArtists = [
// 			...artists.slice(0, insertAt),
// 			{ id: nextId ++, name: name },
// 			...artists.slice(insertAt)
// 		];

// 		setArtists(nextArtists);
// 	}

// 	return (
// 		<>
// 			<h1>振奋人心的雕塑家们：</h1>
// 			<input 
// 				value={ name }
// 				onChange={handleChange}
// 			/>
// 			<button onClick={handleClick}>插入</button>

// 			<ul>
// 				{
// 					artists.map(artist => (
// 						<li 
// 							key={artist.id }
// 						>
// 							{ artist.name }
// 						</li>
// 					))
// 				}
// 			</ul>
// 		</>
// 	)
// }


/**
 * 其他改变数组的情况
 * 
 * 总会有一些事，是你仅仅靠展开运算符和 map() 或者 filter() 等不会直接修改原值的方法所无法做到的。 
 * 例如，你可能想翻转数组，或是对数组排序。而 Js 中的 reverse() 和 sort() 方法会改变原数组，所以
 * 你无法直接使用它们。
 * 
 * 然而，你可以先拷贝这个数组，再改变这个拷贝之后的值。
 */

// let nextId = 3;
// const initialList = [
// 	{ id: 0, title: 'content-0' },
// 	{ id: 1, title: 'content-1' },
// 	{ id: 2, title: 'content-2' },
// ];

// export default function List () {

// 	const [list, setList] = useState(initialList);

// 	function handleClick () {
// 		// 使用 [...list] 展开运算符创建了一份数组的拷贝值。
// 		// 然而，即使你拷贝了数组，你还是不能直接修改其内部的元素。
// 		// 这是因为数组的浅拷贝使浅拷贝 -- 新的数组中依然保留了于原始数组相同的元素。
// 		const nextList = [...list];
// 		nextList.reverse();
// 		setList(nextList);
// 	}

// 	return (
// 		<>
// 			<button onClick={handleClick}>
// 				翻转
// 			</button>
// 			<ul>
// 				{ 
// 					list.map((item) => (
// 						<li key={ item.id }>{ item.title }</li>
// 					))
// 				}
// 			</ul>
// 		</>
// 	)
// }


/**
 * 更新数组内部的对象
 * 
 * 对象并不是真的位于数组 "内部"。可能他们在代码中看起来像是在数组"内部"，
 * 但其实数组中的每个对象都是这个数组"指向"的一个存储于其它位置的值。
 * 
 * 当你更新一个嵌套的 state 时，你需要从想要更新的地方创建拷贝值，一直这样，直到顶层。
 */

// let nextId = 3;
// const initialList = [
// 	{ id: 0, title: 'title-0', seen: false },
// 	{ id: 1, title: 'title-1', seen: false },
// 	{ id: 2, title: 'title-2', seen: true }
// ];

// export default function BucketList () {

// 	const [myList, setMyList] = useState(initialList);
// 	const [yourList, setYourList] = useState(initialList);

// 	function handleToggleMyList (id, nextSeen) {
// 		const nextList = myList.map(item => {
// 			if (item.id === id ) {
// 				return { ...item, seen: nextSeen }
// 			}

// 			return item;
// 		});
		
// 		setMyList(nextList);
// 	}

// 	function handleToggleYourList (id, nextSeen) {
// 		const nextList = yourList.map(item => {
// 			if (item.id === id ) {
// 				return { ...item, seen: nextSeen }
// 			}

// 			return item;
// 		});
		
// 		setYourList(nextList);
// 	}

// 	return (
// 		<>
// 			<h1>艺术愿望清单</h1>
// 			<h2>我想看的艺术清单：</h2>
// 			<ItemList 
// 				artLists={myList}
// 				onToggle={handleToggleMyList}
// 			/>
// 			<h2>你想看的艺术清单：</h2>
// 			<ItemList 
// 				artLists={yourList}
// 				onToggle={handleToggleYourList}
// 			/>
// 		</>
// 	)
// }

// function ItemList ({ artLists, onToggle }) {

// 	return (
// 		<ul>
// 			{ 
// 				artLists.map(artwork => (
// 					<li
// 						key={artwork.id}
// 					>
// 						<input 
// 							type="checkbox" 
// 							onChange={ (e) => onToggle(artwork.id, e.target.checked) }
// 							checked={ artwork.seen }
// 						/>
// 						{ artwork.title }
// 					</li>
// 				))
// 			}
// 		</ul>
// 	)
// }


/**
 * 使用 Immer 编写简洁的更新逻辑
 * 
 * 在没有 mutation 的前提下，更新嵌套数组可能会变得有点重复。就像对对像一样：
 */

import { useImmer } from "use-immer";

let nextId = 3;
const initialList = [
	{ id: 0, title: 'title-0', seen: false },
	{ id: 1, title: 'title-1', seen: false },
	{ id: 2, title: 'title-2', seen: true }
];

export default function BucketList () {

	const [myList, updateMyList] = useImmer(initialList);
	const [yourList, updateYourList] = useImmer(initialList);

	function handleToggleMyList (id, nextSeen) {
		updateMyList(draft => {
			const artwork = draft.find(a => a.id === id);
			artwork.seen = nextSeen;
		})
	}

	function handleToggleYourList (id, nextSeen) {
		updateYourList(draft => {
			const artwork = draft.find(b => b.id === id);
			artwork.seen = nextSeen;
		})
	}

	return (
		<>
			<h1>艺术愿望清单</h1>
			<h2>我想看的艺术清单：</h2>
			<ItemList 
				artLists={myList}
				onToggle={handleToggleMyList}
			/>
			<h2>你想看的艺术清单：</h2>
			<ItemList 
				artLists={yourList}
				onToggle={handleToggleYourList}
			/>
		</>
	)
}

function ItemList ({ artLists, onToggle }) {

	return (
		<ul>
			{ 
				artLists.map(artwork => (
					<li
						key={artwork.id}
					>
						<input 
							type="checkbox" 
							onChange={ (e) => onToggle(artwork.id, e.target.checked) }
							checked={ artwork.seen }
						/>
						{ artwork.title }
					</li>
				))
			}
		</ul>
	)
}