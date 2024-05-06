import React from 'react'

const RecipeApp = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Recipe Title</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">The Creator</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Description</label>
                    <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Image</label>
                    <input type="file" name="" id="" class="form-control"></input>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Recipe Type</label>
                    <select name="" id="" className="form-select">
                      <option value="Select a recipe type">Select a recipe type</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                    </select>
                    
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Ingredients</label>
                    <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">Submit</button>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeApp
