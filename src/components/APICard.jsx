import StyleCSS from '../style/StyleCSS.module.css';

const APICard = ({quotes}) => {

    return (
      <div className={StyleCSS.cardSize}>
        <div className={StyleCSS.container}>
          <div className={StyleCSS.contentHeader}>
            <h3 className={StyleCSS.content}>{quotes.quote}</h3>
            <div className={StyleCSS.contentBody}>
              <p>Source: {quotes.source}</p>
              <p>Year: {quotes.year}</p>
            </div>
          </div>
        </div>
      </div>
    )
}
 
export default APICard;