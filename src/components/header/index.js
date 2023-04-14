import "./style.css"

const Header = ({handleNews}) => {

  const handleText = (e) => {
    e.preventDefault()
    const searchText = e.target.value.toLowerCase()
    handleNews(searchText)
  }

  return (
    <header className='header'>
        <div className='top-header'>
            <h3>Codelândia</h3>
            <h3>Blog</h3>
        </div>
        <div>
          <form onChange={handleText}>
              <input type="text" placeholder='Pesquisar no blog' maxLength={250} />
          </form>
        </div>
    </header>
  )
}

export default Header