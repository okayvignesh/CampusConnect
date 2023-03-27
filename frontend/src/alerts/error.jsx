import React from 'react'

function error({ message }) {
    console.log(message)
    return (
        <section className='error'>
            <div className="alert alert-danger alert-dismissible fade show d-flex align-items-center" role="alert">
                {message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </section>
    )
}

export default error