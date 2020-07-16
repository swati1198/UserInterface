<template>
  <div id="app">
    <div>
         <b-navbar class="nav">
            <b-navbar-nav>
              <h1>
                <span class="span">CONTACT</span></h1>
            </b-navbar-nav>
          </b-navbar>
      </div>
      <div>
        <b-container class="bv-example-row" id="cont">
          <b-form @submit.prevent="submitData" method="post">
              <b-form-input type="text" v-model="post.fname" required placeholder="Enter first name" name="fname"/><br><br>
              <b-form-input type="text" v-model="post.lname" required placeholder="Enter last name" name="lname"/><br><br>
              <b-form-input type="text" v-model="post.company" required placeholder="Enter your comapny name" name="company"/><br><br>
              <b-form-input type="text" v-model="post.phone" required placeholder="Enter your contact number" name="phone"/><br><br>
              <b-form-input type="email" v-model="post.email" required placeholder="Enter your email Id" name="email"/><br><br>
              <b-form-textarea type="text" v-model="post.message" required placeholder="Enter Your message"  id="txtarea" name="message">
              </b-form-textarea> 
                  <b-form-group >
                    <b-form-checkbox-group >
                      <b-form-checkbox value="me">I agree to Privacy Policy</b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>   
                  <b-button type="submit" variant="light" class="btn" >SEND</b-button> 
          </b-form>
        </b-container>   
      </div>
  </div>
</template>
<script>
export default {
  
  name:"contact" ,
   data()
{
    return{
           post:{
                fname:null,
            lname:null,
            company:null,
            phone:null,
            email:null,
            message:null

           }
    }
},
methods:
{
    submitData(e)
    {
        this.$http.post('http://localhost:9090/users',this.post).then(resp=>{
            console.warn("result",resp)
            alert("Thank You....We Will Contact You Soon");
        })
       console.warn();
        e.preventDefault();
    }
}
    }
  </script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

   
.btn{
  background: #75daad;
  color:white;
  font-weight: bold;
}
#txtarea{
  height: 300px;
}
.btn:hover {
  border: black;
  background-color: white;
  color: black;
}
#input-6{
    height: 270px;
    width: 340px;
}
</style>
