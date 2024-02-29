import Counter from "./Counter"

const Body = (props) => {
  // { name: "Tony", age: 26}
  const { name, age } = props
  return (
    <>
      <div>Body component</div>
      <p>Age of {name} is {age}</p>
      <Counter />
    </>
  )
}

export default Body