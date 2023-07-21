export default function ToolBar ({ 
  onPLayMovie,
  onUploadImage
}) {
  return (
    <div>
      <Button onClick={ onPLayMovie }>
        Play Movie
      </Button>
      <Button onClick={ onUploadImage }>
        UploadImage
      </Button>
    </div>
  )
}

function Button ({ onClick, children }) {
  return (
    <button onClick={ onClick }>
      { children }
    </button>
  )
}

