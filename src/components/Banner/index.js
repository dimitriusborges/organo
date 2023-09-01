import './Banner.css'
//components always with UpperCase
function Banner(){
    /*
    JSX -> JavaScript XML. In summary, it is how React reads HTML elements and append it to the DOM
    it is NOT html, so it will have some differences, i.e., the "class" param from html is "className" in JSX
    because class is a JS reserved word
     */
    return (
        <header className="banner">
        <img src="/imgs/banner.png" alt="O banner principal do Organo"/>
        </header>
    )
}

export default Banner