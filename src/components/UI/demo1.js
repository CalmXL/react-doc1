function Profile () {
  return (
    <img 
      style={{ 
        width: '400px',
        height:'400px'
      }}
      src="https://img2.woyaogexing.com/2019/08/30/f4076197e60e4582bd439cb71c29b79c!600x600.jpeg" 
      alt="Katherine Johnson" 
    />
  )
}


export default function Gallery () {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}