import { FC } from 'react'
import { Star, StarFill, StarHalf } from 'react-bootstrap-icons'

interface StarComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number // rating from 0 to 5, can be
  showEmpties?: boolean
  showRatingValue?: boolean
}

const StarRating: FC<StarComponentProps> = (props) => {
  const { rating, showEmpties, showRatingValue, ...remainingDivProps } = props

  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1
    if (rating >= starValue) {
      return 'full'
    } else if (rating >= starValue - 0.5) {
      return 'half'
    } else {
      return 'empty'
    }
  })

  return (
    <div {...remainingDivProps}>
      {stars.map((star, index) => (
        <span key={index}>
          {star === 'full' ? (
            <StarFill color="gold" />
          ) : star === 'half' ? (
            <StarHalf color="gold" />
          ) : showEmpties ? (
            <Star />
          ) : (
            ''
          )}
        </span>
      ))}
      {showRatingValue && <span>({rating.toFixed(1)})</span>}
    </div>
  )
}

export default StarRating
