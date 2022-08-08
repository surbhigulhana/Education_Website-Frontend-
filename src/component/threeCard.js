import React from 'react'

const ThreeCard = () => {
  return (
    <div>
     
  <div class="row" style={{width:"100%"}}>
    <div class="col-md-4">
      <div class="crd card-1" style={{outlineColor:"white"}}>
        <h5>Ionic Native</h5>
        <p>A curated set of   ES5/ES6/TypeScript  </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="crd card-2" style={{outlineColor:"white"}}>
        <h5>UI Components</h5>
        <p>Tabs, buttons, inputs, lists, cards, .</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="crd card-3" style={{outlineColor:"white"}}>
        <h5>Theming</h5>
        <p>Learn how to easily customize app’s</p>
      </div>
    </div>
  </div><br/><br/>
</div>
    
  )
}

export default ThreeCard