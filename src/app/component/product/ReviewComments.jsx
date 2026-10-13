import React from 'react'

const ReviewComments = ({ reviews }) => {
    return (
        <div className='grid grid-cols-4 h-[100vh]'>
            <div className="COMMENT-HEAD">
                {
                    reviews.map((review) => {
                        return (
                            <div key={review.reviewerEmail} className="flex flex-row">
                                <img
                                    className='w-7 rounded-3xl'
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQmrtYg3x087MVPCXTjIsx2VAZChtyjD1KJUTZN8N8A&s=10"
                                    alt=""
                                />
                                <div className=''>{review.reviewerName}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ReviewComments
