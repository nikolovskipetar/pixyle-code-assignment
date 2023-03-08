import styles from './style.module.scss'
import { useState } from 'react'
import { uploadImage } from '../../services'
import ResultSection from '../ResultSection'

const MainSection = () => {
  const [url, setUrl] = useState('')
  const [submittedImage, setSubmittedImage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [response, setResponse] = useState({})

  const handleFormSubmit = async (event) => {
    // Checking if url is valid to continue with request
    if (validURL(url)) {
      setErrorMessage('')
      setSubmitting(true)

      try {
        const { data } = await uploadImage({ image: url })
        // Setting response data to pass in Details Section

        setSubmittedImage(url)
        return setResponse(data)
      } catch (error) {
        setErrorMessage(error?.response?.data?.detail || 'Unknown error.')
      } finally {
        setSubmitting(false)
        setErrorMessage('')
      }
    }

    return setErrorMessage('Please enter valid url.')
  }

  function validURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }

  return (
    <>
      <main className={styles['main']}>
        <div className={styles['main__container']}>
          <img
            alt="main-image"
            className={styles['main__image']}
            src="https://demo.pixyle.ai/static/media/homeImg.013e9b7e49aea75a88c4.png"
          />
          <div>
            <h1 className={styles['main__header']}>
              Upload an image and automatically <span>generate rich tags</span>
            </h1>
            <div className={styles['main__form']}>
              <div className={styles['main__form--dropzone']}>
                {submitting ? (
                  <p>Please wait until image is uploaded...</p>
                ) : (
                  <div className={styles['main__form--control']}>
                    <input
                      className={styles['main__form--input']}
                      placeholder='Paste an image url'
                      onChange={(event) => setUrl(event.target.value)}
                    />
                    <button
                      className={styles['main__form--button']}
                      onClick={handleFormSubmit}
                    >
                      Upload an Image
                    </button>
                  </div>
                )}
              </div>
              <p className={styles['main__form--error']}>{errorMessage}</p>
            </div>
          </div>
          <hr/>
        </div>
      </main>
      {Object.keys(response).length !== 0 && (
        <ResultSection
          url={submittedImage}
          response={response}
        />
      )}
    </>
  )
}

export default MainSection
