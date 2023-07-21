const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    background: 'black',
    color: 'pink'
  } 
}

export default function TodoList () {
  return (
    <div>
      <h1>{ person.name }'s Todos</h1>
      <img 
        className="avator"
        src="https://img2.woyaogexing.com/2023/07/16/d98b60b03b4b022f2f0183f689c1bb66.jpg" 
        alt="Gregorio Y. Zara" 
      />
      <ul>
        <li>Improve the videophone1</li>
        <li>Improve the videophone2</li>
        <li>Improve the videophone3</li>
      </ul>
    </div>
  )
}
