// import PropTypes from 'prop-types'
import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

const Form = () => {
  const {register, handleSubmit, watch, errors} = useForm()
  let [formStatus, setFormStatus] = useState('waiting')

  const onSubmit = data => {
    console.log(data)
    setFormStatus('submitting')
  }

  // console.log(watch('firstName')) // watch input value by passing the name of it

  return (
    <form className='w-full flex flex-col text-xl' onSubmit={handleSubmit(onSubmit)}>
      <label className='flex flex-col mb-4'>
        <span className='label'>First Name*</span>
        <input className='input' name='firstName' ref={register({required: true})} />
      </label>
      {errors.firstName && <span className='validation -mt-3 mb-4'>This field is required</span>}

      <label className='flex flex-col mb-4'>
        <span className='label'>Email Address*</span>
        <input className='input' name='email' ref={register({required: true})} />
      </label>
      {errors.email && <span className='validation -mt-3 mb-4'>This field is required</span>}

      {formStatus !== 'sent' && formStatus !== 'error' && (
        <>
          <input
            disabled={formStatus !== 'waiting'}
            className={`button ml-auto mb-4 ${formStatus !== 'waiting' ? `opacity-50 pointer-events-none` : ``}`}
            type='submit'
            value={formStatus === 'waiting' ? `Send` : `Sending...`}
          />
        </>
      )}

      {formStatus === 'sent' && (
        <div className='bg-yellow text-black rounded p-4 font-bold mb-2'>
          Thank you for getting in touch. We will be in contact soon.
        </div>
      )}

      {formStatus === 'error' && (
        <div className='bg-red-600 text-white rounded p-4 font-bold mb-2'>
          Unfortunately an error has occurred. Please try again later or contact us by another method.
        </div>
      )}

    </form>
  )
}

Form.propTypes = {
//   siteTitle: PropTypes.string
}

Form.defaultProps = {
//   siteTitle: ``
}

export default Form
