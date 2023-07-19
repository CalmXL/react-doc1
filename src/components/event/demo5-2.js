/**
 * 使用展开语法复制对象
 *
 * 在之前的例子中，始终会根据当前指针的位置创建出一个新的 position 对象。
 * 但是通常，你会希望把 现有 数据作为你所创建的新对象的一部分。
 *
 * 请注意 ... 展开语法本质是浅拷贝 -- 它只会复制一层。这使得它的执行速度很快，
 * 但是也意味着当你想要更新一个嵌套属性时，你必须得多次展开语法。
 */

import { useState } from 'react';

// export  default function Form () {
//
// 	const [person, setPerson] = useState({
// 		firstName: 'xu',
// 		lastName: 'lei',
// 		email: '942255012@qq.com'
// 	});
//
// 	function handleFirstNameChange (e) {
// 		setPerson({
// 			...person,
// 			firstName: e.target.value
// 		})
// 	}
//
// 	function handleLastNameChange (e) {
// 		setPerson({
// 			...person,
// 			lastName: e.target.value
// 		})
// 	}
//
// 	function handleEmailChange (e) {
// 		setPerson({
// 			...person,
// 			email: e.target.value
// 		})
// 	}
//
// 	return (
// 		<>
// 			<label>
// 				First name:
// 				<input
// 					value={person.firstName}
// 					onChange={handleFirstNameChange}
// 				/>
// 			</label>
// 			<label>
// 				LastName:
// 				<input
// 					value={person.lastName}
// 					onChange={handleLastNameChange}
// 				/>
// 			</label>
// 			<label>
// 				Email:
// 				<input
// 					value={person.email}
// 					onChange={handleEmailChange}
// 				/>
// 			</label>
// 			<p>
// 				{person.firstName}{' '}
// 				{person.lastName}{' '}
// 				({person.email})
// 			</p>
// 		</>
// 	)
// }


export  default function Form () {
	
	const [person, setPerson] = useState({
		firstName: 'xu',
		lastName: 'lei',
		email: '942255012@qq.com'
	});
	
	function handleFirstNameChange (e) {
		setPerson({
			...person,
			[e.target.name]: e.target.value
		})
	}
	
	function handleLastNameChange (e) {
		setPerson({
			...person,
			[e.target.name]: e.target.value
		})
	}
	
	function handleEmailChange (e) {
		setPerson({
			...person,
			[e.target.name]: e.target.value
		})
	}
	
	return (
		<>
			<label>
				First name:
				<input
					name="firstName"
					value={person.firstName}
					onChange={handleFirstNameChange}
				/>
			</label>
			<label>
				LastName:
				<input
					name="lastName"
					value={person.lastName}
					onChange={handleLastNameChange}
				/>
			</label>
			<label>
				Email:
				<input
					name="email"
					value={person.email}
					onChange={handleEmailChange}
				/>
			</label>
			<p>
				{person.firstName}{' '}
				{person.lastName}{' '}
				({person.email})
			</p>
		</>
	)
}
