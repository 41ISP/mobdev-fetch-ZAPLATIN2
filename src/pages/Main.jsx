import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Main = () => {
    const [textField, setTextField] = useState('Hello')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (textField.trim() === "") return
        navigate("/search?q=" + encodeURIComponent(textField.trim()))
    }
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="eyebrow">OPEN ASS</div>
                <h1>
                    Книги, которые
                    <br />
                    <br />
                    хочется какать.
                </h1>
                <p>
                    Зарабатывай миллионы , на 1xbet.
                </p>
                <form onSubmit ={handleSubmit}
                className="search" id="searchForm">
                    <span className="search-icon">⌕</span>
                    <input
                        id="searchInput"
                        type="text"
                        value={textField}
                        onChange={(e) => setTextField(e.target.value)}
                        placeholder="Название книги, автор или ISBN..."
                    />
                    <button type="submit">Найти</button>
                </form>
            </div>
            <div className="hero-decoration">
                <div className="floating-book book-one">
                    <div className="book-cover">
                        <span>THE</span>
                        <strong>BOOK</strong>
                    </div>
                </div>
                <div className="floating-book book-two">
                    <div className="book-cover">
                        <span>READ</span>
                        <strong>MORE</strong>
                    </div>
                </div>
                <div className="floating-book book-three">
                    <div className="book-cover">
                        <span>NEW</span>
                        <strong>WORLD</strong>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
