import Description from '../Description';
import './styles.css'

function MainContent({ descriptionMode }) {
    return (
      <div className='main'>
        <div>
            <h1>Anna Claudia barros</h1>
            <h2>22 anos</h2>
            <a href="https://www.linkedin.com/in/anna-claudia-barros-silveira/" target="_blank" rel="noopener noreferrer"><button type="button" className='social-media'>linkedin</button></a>
            <a href="https://www.github.com/annacbsdev" target="_blank" rel="noopener noreferrer"><button type="button" className='social-media'>github</button></a>
        </div>
        <Description mode={descriptionMode} />
      </div>
    );
}

export default MainContent;