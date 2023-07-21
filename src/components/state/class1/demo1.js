/**
 * 用 State 响应输入
 * 
 * React 控制 UI 的方式是生命式的。你不必直接控制 UI 的各个部分。只需要声明组件可以处于的不同的状态，
 * 并根据用户的输入在它们之间切换。
 */

/**
 * 声明式 UI 与 命令式 UI 的比较
 * 
 * 当你设计 UI 交互时，可能回去思考 UI 如何根据用户的操作而响应变化。想象一个允许用户提交一个答案的表单：
 * 
 */

let form = document.getElementById('form');
let textarea = document.getElementById('textarea');
let button = document.getElementById('button');
let loadingMessage = document.getElementById('loading');
let errorMessage = document.getElementById('error');
let successMessage = document.getElementById('success');

form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;

function handleFormSubmit (e) {
}