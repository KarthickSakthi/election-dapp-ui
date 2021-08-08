import React from 'react'

const Body =()=>{
return(
 <div>   
<div class='pl-4 pr-4'> <div class="border border-warning "><h1 class="text-centre text-danger"><b>Live Election Results</b></h1></div></div>
<div class="container-sm  pt-5 ">          
  <table class="table table-dark table-striped table-hover table-bordered  ">
    <thead>
      <tr>
        <th>Candidate Id</th>
        <th>Candidate Name</th>
        <th>Votes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
<div className="my-5 mr-auto ml-auto text-left" style={{ width: "70%" }}>
        <h5 class='navtitle-color'>Cast Your Vote:</h5>
        <form onSubmit={onsubmit}>
          <select name="candidate" className="form-control" onChange={onchange}>
            <option defaultValue value="">
              Select
            </option>
            <option value="1">candidate1.name</option>
            <option value="2">candidate2.name</option>
          </select>
          <button className="btn btn-primary mt-2 btn-md w-100">
            Vote Candidate{""} {}
          </button>
        </form>
      </div>
</div>

);

}

export default Body