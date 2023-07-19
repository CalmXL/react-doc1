/**
 * 更新 state 中的对象
 *
 * state 中可以保存任意类型的JavaScript 值，包括对象。但是，你不应该直接修改存放在
 * React state 中的对象。相反，当你想要更新一个对象时，你需要创建一个新的对象（或者将其拷贝一份），
 * 然后将 state 更新为此对象。
 */

/**
 * 什么是 mutation ?
 *
 * const [x, setX] = useState(0);
 * 到目前为止，你已经尝试过在 state 中存放数字、字符串和布尔值，这些类型的值在 JavaScript 中
 * 是不可变的(immutable)的，这意味着它们不能被改变或者是只读的。你可以通过替换它们的值以触发一次重新渲染。
 * setX(5);
 *
 * state x 从 0 -> 5, 但是数字 0 本身并没有发生变化。在 JavaScript 中，无法对内置的原始值，如数字、字符串和布尔值，
 * 进行任何更改。
 *
 * 现在考虑 state 中存放对象的情况:
 * const [position, setPosition] = useState({x: 0, y: 0});
 *
 * 从技术上来讲。可以改变对象自身的内容。当你这样做的时候就制造了一个 mutation:
 * position.x = 5;
 *
 * 然而，虽然严格来说 React state 中存放的对象是可变的，当你应该像处理数字、布尔值、字符串一样将它们视为
 * 不可变的。因此你应该替换它们的值，而不是对它们进行修改。
 */

/**
 * 将 state 视为只读的
 *
 * 换句话说，你应该 把所有存放在 state 中的 JavaScript 对象都视为只读的。
 */

/**
 * onPointerMove={e => {
 * 	  	position.x = e.clientX;
 * 		  position.y = e.clientY;
 * 	 }
 * }
 *
 * 这段代码直接修改了上一次渲染中分配的 position 对象。但是因为并没有使用 state 的设置函数， React
 * 并不知道对象已更改。所有 React 没有做出任何响应。
 * 在这种情况下，为了真正的 触发一次重新渲染，你需要创建一个新的对象并把它传递给 state 的
 * 设置函数：
 *
 * 	onPointerMove={e => {
 * 			setPosition({
 * 				x: e.clientX,
 * 				y: e.clientY
 * 			})
 * 		}
 * 	}
 *
 * 	通过使用 setPosition, 你在告诉 React:
 * 	1. 使用这个新的对象替换 position 的值
 * 	2. 然后再次渲染这个组件
 */

import { useState } from 'react';

export default function MovingDot () {
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	});
	
	return (
		<div
			onPointerMove={e => {
					setPosition({
						x: e.clientX,
						y: e.clientY
					})
				}
			}
			
			style={{
				position: 'relative',
				width: '100vw',
				height: '100vh'
			}}
		>
			<div style={{
				position: 'absolute',
				backgroundColor: 'red',
				borderRadius: '50%',
				transform: `translate(${position.x}px, ${position.y}px)`,
				left: -10,
				top: -10,
				width: 20,
				height: 20,
			}} />
		</div>
	)
}