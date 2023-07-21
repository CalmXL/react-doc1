
import { useState } from 'react';

/**
 * 当 React 重新渲染一个组件时： 
 * 1. React 会再次调用你的函数
 * 2. 你的函数会返回新的 JSX 快照
 * 3. React 会更新界面来匹配你的快照
 *
 * 作为一个组件的记忆，state不同于在你的函数返回之后就会消失的普通变量。
 * state实际上“活“在 React 本身中 -- 就像被摆在一个架子上！位于你的函数之外。
 * 当 React 调用你的组件时，它会为特定的那一次渲染提供了一张 state 快照。
 * 你的组件会在其 JSX 中返回一张包含一整套新的 props 和事件处理函数的 UI 快照，其中
 * 所有的值都是 『根据那一次渲染中 state 的值』被计算出来的！
 */
export default function Form () {
	const [isSent, setIsSent] = useState(false);
	const [message, setMessage] = useState('Hi');

	if (isSent) {
		return <h1>You message is on its way!</h1>
	}

	return (
		<form
			onSubmit={
				(e) => {
					e.preventDefault();
					setIsSent(true);
				}
			}
		>
			<textarea 
				placeholder="Message"
				value={ message }
				onChange={ e => setMessage(e.target.value) }
			></textarea>
			<button type="submit">
				Send
			</button>
		</form>
	)
}