import './styles.css'

function Sidebar({ setDescriptionMode, activeButton }) {
    const handleClick = (mode) => {
        setDescriptionMode(mode);
    };

    return (
        <div className='sidebar'>
            <nav>
                <button className={`nav-button ${activeButton === 'about' ? 'active' : ''}`} onClick={() => handleClick('about')}>sobre</button>
                <button className={`nav-button ${activeButton === 'personalInterests' ? 'active' : ''}`} onClick={() => handleClick('personalInterests')}>gostos pessoais</button>
                <button className={`nav-button ${activeButton === 'motivations' ? 'active' : ''}`} onClick={() => handleClick('motivations')}>motivações</button>
            </nav>
        </div>
    );
}

export default Sidebar;