import styles from './style.module.scss'

const ResultSection = ({ response, url }) => {
  return (
    <div className={styles['result']}>
      <div className={styles['result__container']}>
        <img src={url} className={styles['result__image']}/>
        <div className={styles['result__details']}>
          <h3>category: <span>{response.result[0].category}</span></h3>
          {response.result[0].detected_attributes_types.map((attr, idx) => (
            <div className={styles['result__details--row']} key={idx}>
              <p>
                {attr.attribute_type}:{' '}
              </p>
              <p>
                {attr.attributes.correct[0]?.attribute}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResultSection
