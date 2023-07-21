/**
 * 渲染列表
 */
import { people } from "../data/data";

export default function List () {
  const listItem = people.map(person => 
    <li key={ person.id }>
      <img 
        src={getImageUrl(person)} 
        alt={ person.name }
      />
      <p>
        <b>{ person.name }:</b>
        { '  ' + person.profession + '  '}
        known for { person.accomplishment }
      </p>
    </li>  
  )

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{ listItem }</ul>
    </article>
  )
}


export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}