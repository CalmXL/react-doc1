/**
 * 保持组件的纯粹
 */

// let guest = 0;

// function Cup () {
//   guest = guest + 1;

//   console.log(guest);

//   return (
//     <h2>Tea cup for guest #{ guest }</h2>
//   )
// }

function Cup ({ guest }) {
  return <h2>Tea cup for guest #{ guest } </h2>
}

// 通过 传递一个 props 来使这个组件变得纯粹，而非修改已经存在的变量：
export default function TeaSet () {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  )
}