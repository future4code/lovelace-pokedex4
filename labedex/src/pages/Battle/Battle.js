import { useHistory, useParams } from 'react-router-dom'

function Battle() {
  const params = useParams()

  console.log(params)

  return (
    <div className="App">
      <p> Battle</p>
    </div>
  );
  }
  
  export default Battle;
  