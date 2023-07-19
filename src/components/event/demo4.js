/**
 * 把一系列 state 更新加入队列
 *
 * 设置组件 state 会把一次重新渲染加入队列。但有时你可能会希望在下次渲染加入队列之间对 state 的
 * 值执行多次操作。
 */

// React 会对 state 更新进行批处理
/**
 * React 会等到事件处理函数中的所有代码都运行完毕再处理你的 state 更新。
 * 这就是为什么重新渲染只会发生在所有这些 setNumber() 调用之后。
 *
 * 这可以让你更新多个 state 变量 -- 甚至来自多个组件的 state, 而不会触发太多的 重新渲染。
 * 但这也意味着你的事件处理函数及其中任何代码执行完成之后，UI 才会更新。这种特性就是 批处理。
 *
 * React 不会跨 多个 需要刻意触发的事件（如点击）进行批处理——每次点击都是单独处理的。
 */


/**
 * 在下次渲染前多次更新同一个 state
 *
 * 这时一个不常见的用例，但是如果你想在下次渲染之前多次更新同一个 state, 你可以像
 * setNumber(n => n + 1) 这样传入一个根据队列中的前一个 state 计算下一个 state 函数，而不是像 setNumber(n + 1)
 * 这样传入 下一个 state 值。
 *
 * 在这里 n => n + 1 被称为 更新函数。当你将它传递给一个 state 设置函数时:
 * 1. React 会将此函数加入队列，以便在事件处理函数中的所有其他代码运行后进行处理。
 * 2. 再下一次渲染期间，React 会遍历队列，并给你更新之后的最终 state.
 */

import { useState } from "react";

export default function Counter () {
	const [number, setNumber] = useState(0);
	
	// return (
	// 	<>
	// 		<h1>{number}</h1>
	// 		<button onClick={() => {
	// 			setNumber(number + 1);
	// 			setNumber(number + 1);
	// 			setNumber(number + 1);
	// 		}}>+3</button>
	// 	</>
	// )
	
	return (
		<>
			<h1>{number}</h1>
			<button onClick={() => {
				setNumber(n => n + 1);
				setNumber(n => n + 1);
				setNumber(n => n + 1);
			}}>+3</button>
		</>
	)
}