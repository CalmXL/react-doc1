import { useState } from 'react';

/**
 * 设置 state 只会为下一次渲染变更 state 的值。
 *
 * 尽管你调用了三次 setNumber(number + 1), 但在这次渲染 的事件处理函数中 number 会一直是
 * 0，、所以你会三次将 state 设置成1.
 */


/**
 * 一个 state 变量的值永远不会在一次渲染的内部发生了变化，即使其事件处理函数的代码是异步的。
 * 在 那次渲染的 onClick 内部，number 的值即使在调用 setNumber(number + 5) 之后也还是0。
 * 它的值在 React 通过调用你的组件 “获取 UI 的快照” 时就被固定了。
 */

/**
 * React 会使 state 的值始终"固定" 在一次渲染的各个事件处理函数内部。
 * 你无需担心代码运行时 state 是否发生了变化。
 */

export default function Counter () {
	const [number, setNumber] = useState(0);

	// return (
	// 	<>
	// 		<h1>{ number }</h1>
	// 		<button onClick={ () => {
	// 			setNumber(number + 1);
	// 			setNumber(number + 1);
	// 			setNumber(number + 1);
	// 		}}>+3</button>
	// 	</>
	// )
	// 
	
	return (
		<>
			<h1>{ number }</h1>
			<button
				onClick={ () => {
					alert(number);
					setNumber(number + 5);
					setTimeout(() => {
						alert(number);
					}, 3000)
				}}
			>
				+5
			</button>
		</>
	)
}