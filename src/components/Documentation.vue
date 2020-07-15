<template>
<div style="margin-top:55px">
    <div class="jumbotron text-left bg-info text-white" >
        <h1>DOCUMENTATION</h1>
    </div>
    
    <div class="container-fluid" >

        <div class="container">
            <div class="text-dark d-flex p-3" style="text-align:center;">  
                <div class="col-lg-6">
                    <div class="float-left" style="width:100%">
                        <img :src="img1" width="100%">
                    </div>
                </div>
                <div class="col-lg-6 p-2 mt-5">                    
                    <button type="button" 
                    class="btn btn-info mt-5" 
                    >GO TO WIKI</button>
                    <p class="m-5" style="white-space: nowrap;">Read through the documentation</p>
                </div>
            </div>
        </div>
        
    </div>
    
    
    <div class="container-fluid mt-5 p-0 bg-dark pt-4">
        <div class="row">
            <div class="col-lg-6">
                <div class="container text-light text-center" >
                    <h2>NEWSLETTER</h2><br>
                    <p class="text-secondary">Subscribe to our newsletter to stay up to date with 
                        novelties from the world of open source IT business systems. 
                        You will receive 1-2 emails a month. </p>
                   <input type="checkbox" id="defaultCheck" name="example2">
                    <label for="defaultCheck" class="text-secondary ml-2">I agree to <a class="text-secondary" href=""><u>Privacy Policy</u></a></label>
                    <br>
                    <button type="button" class="btn btn-dark btn-outline-light m-2">SUBSCRIBE</button>
                                 
                </div>
            </div>
            <div class="col-lg-6">
                <div class="container text-light text-center" >
                    <h2>QUESTIONS?</h2><br>
                    <p class="text-secondary">Join our support forum, search for answears 
                        and contribute to the community.</p>
                    <button type="button" class="btn btn-dark btn-outline-light m-2">VIEW FORUM</button>
                    <button type="button" class="btn btn-dark btn-outline-light m-2">REGISTER</button>
  
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid mb-0 p-0 bg-dark pt-4">
        <p class="text-light small ml-3 pb-2"> © 2018-2020 MintHCM </p>
    </div>
    
</div> 
    
    

</template>


<script>

    export default {

        data(){
            return{
                img1: require('@/assets/Mint-Wiki-mockup-700x525.png'),
            }
        }
                
    }
  
</script>
