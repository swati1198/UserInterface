<template>
  <div id="app">
    <div>
      <b-navbar class="nav">
        <b-navbar-nav>
          <h1>
            <span class="span">DOWNLOAD</span></h1>
        </b-navbar-nav>
      </b-navbar>
    </div>
        <b-row id="row">
          <b-col>
            <b-container class="bv-example-row">
          <b-row>
            <span id="span1">RELEASE 3.0.5</span>
          </b-row>
          <b-row>
            <span id="span2">29.04.2020</span>
          </b-row>
          <b-row></b-row>
          <b-row>
            <b-col></b-col>
            <b-col id="col">
              <b-button variant="outline-light" class="btn">DOWNLOADS🔗</b-button>
            </b-col>
            <b-col id="col">
              <b-button variant="outline-light" class="btn">RELEASE NOTES📝</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
      <b-col>
        <img src="../assets/man.svg" alt />
      </b-col>
    </b-row>
    <b-container class="bv-example-row" id="container"></b-container>
    <b-container class="bv-example-row" id="container"></b-container>
    <b-container class="bv-example-row" id="container"></b-container>

    <div>
      <b-card-group>
        <b-card
          id="b1"
          style="max-width: 20rem;"
          img-src="../assets/list.svg"
          img-alt="number"
          img-top
        >
          <b-button variant="outline-light" class="btn">ORDER RELEASES</b-button>
          <br />
          <br />
          <b-card-text>Read about and download previous releases.</b-card-text>
        </b-card>

        <b-card
          id="b1"
          style="max-width: 20rem;"
          img-src="../assets/cloud.svg"
          img-alt="cloud"
          img-top
        >
          <b-button variant="outline-light" class="btn">CLOUD SOLUTION</b-button>
          <br />
          <br />
          <b-card-text>Looking for a HCM system in a cloud?</b-card-text>
        </b-card>
        <b-card
          id="b1"
          style="max-width: 20rem;"
          img-src="../assets/book.svg"
          img-alt="book"
          img-top
        >
          <template v-slot:header></template>
          <b-button variant="outline-light" class="btn">DOCUMENTATION</b-button>
          <br />
          <b-card-text>We prepared a whole Wiki for you.</b-card-text>
          <template v-slot:footer></template>
        </b-card>
      </b-card-group>
    </div>



    <br />
    <br />
    <br />
    <br />
    <br />




 <div>
      
<h3 style="margin-top:50px;">STAY UP TO DATE:</h3>
    <b-form>
    <b-form-group
      >  
        <b-form-input
          id="input"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
       <b-form-group id="input-group-4">
        <b-form-checkbox-group  id="checkboxes">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="light"  class="btn">Submit</b-button>
      
    </b-form>
  </div>
 </div>
</template>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#btn {
  background-color: white;
  color: black;
  font-size: 16px;
  cursor: pointer;
}
.btn {
  border-color: #75daad;
  color: black;
  font-weight: bold;
  margin-left: 50px;
}
.btn:hover {
  background-color: #75daad;
  color: white;
}
#container {
  height: 150px;
  display: grid;
  justify-content: space-evenly;
}
#b1 {
  padding: 3em;
  margin-inline-start: 8%;
  border: 0;
  height: 200px;
  
}
#row {
  height: 100px;
  margin-top: 10%;
  
  
}
#span1 {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 20px;
  line-height: 80%;
  font-weight: bold;
  margin-left: 14%;
}
#span2 {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 12px;
  line-height: 80%;
  font-weight: bold;
  margin-left: 14%;
  margin-top: 10px;
}

#btn{
  
 
  background-color: white;
  color: black;
  font-size: 16px;
  cursor: pointer;
}
.btn{
  border-color: #75daad;
  color:black;
  font-weight: bold;
  margin-left: 50px;
  
 
}
.btn:hover {
  
  background-color: #75daad;
  color: white;
}



#input{
width: 40%;
margin-left: 30%;
margin-right: 30%;
}
</style>
