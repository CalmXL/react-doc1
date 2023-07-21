
export default function Profile () {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'xulei',
          imageId: "2"
        }}
      />
    </Card>
  )
}

function Avatar ({ person, size }) {
  return (
    <img 
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

function Card ({ children }) {
  return (
  < div className="card">
      { children }   
    </div>
  )
}

function getImageUrl (person, size='s') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}