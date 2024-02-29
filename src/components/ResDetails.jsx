import { useParams } from "react-router-dom"

const ResDetails = () => {
  const { resId } = useParams()
  console.log(resId)
  return (
    <div>ResDetails</div>
  )
}

export default ResDetails