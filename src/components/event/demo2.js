
import { useState } from "react";
import { sculptureList } from './data.js'; 

/**
 * 在 React 中，useState 以及任何其他以“use”开头的函数都被称为 Hook.
 * Hook 是特殊的函数，只在 React 渲染的时候有效。
 * 
 * 陷阱：
 *    Hooks -- 以 use 开头的函数 -- 只能在组件或自定义 Hook 的最顶层调用。
 * 你不能在条件语句、循环语句、或其他嵌套函数内调用 Hook。
 * 
 */

/**
 * 剖析 useState
 * 
 * 当你调用 useState 时，你是在告诉 React 你想让这个组件记住一些东西：
 * 
 * const [index, setIndex] = useState(0);
 * 
 * 注意：
 *    惯例是将这对返回值命名为 const [thing, setThing]。你也可以命名为任何你喜欢的名称，
 * 但遵照约定俗成的能使项目合作更容易理解。
 * 
 * 每次你的组件渲染的时候，useState 会返回给你一个包含俩个值的数组：
 * 1. state 变量 (index) 会保存上次渲染的值。
 * 2. state setter 函数 (setIndex) 可以更新 state 变量并触发 React 重新渲染组件。
 */

/**
 * State 是隔离的且私有的
 * 
 * State 是屏幕上组件实例内部的状态。换句话说，如果你渲染同一个组件俩次，每个副本都会有完全隔离的 state.
 * 改变一个不会影响另一个。
 * 
 */

export default function Gallery () {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick () {
    if (hasNext) {
      setIndex(0);
    }
    setIndex(index + 1);
  }

  function handleMoreClick () {
    setShowMore(!showMore);
  }

  let scupture = sculptureList[index];
  return (
    <div>
      <button onClick={handleNextClick}>Next { index }</button>
      <h2>
        <i>{ scupture.name }</i>
        by { scupture.artist }
      </h2>
      <h3>({ index + 1 } of { sculptureList.length })</h3>
      <button onClick={handleMoreClick}>{ showMore ? 'Hide' : 'Show'} details</button>
      <img 
        src={scupture.url}
        alt={scupture.alt}
      />
      <p>
        { scupture.description }
      </p>
    </div>
  )
}