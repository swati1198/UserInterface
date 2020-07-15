<template>
<div style="margin-top:55px">
    <div class="jumbotron text-left bg-info text-white" >
        <h1>USING MINTHCM</h1>
    </div>
    
    <div class="container-fluid" >
        


        <div class="container mt-5" style="height:50px">
            <div class="float-left mt-4 ml-1 text-secondary">
                <a href="/" class="p-1"><u>Home</u></a>
                ><a href="/" class="p-1"><u>Forum</u></a>
                <span>> Using MintHCM</span>
            </div>
        </div>

        <div class="container">
            <div class="bg-info m-2">
                <div class="border border-secondary p-2">
                    <p class="text-white">This forum is empty.</p>
                </div>
            </div>
            <div class="bg-warning m-2">
                <div class="border border-secondary p-2">
                    <p class="text-dark">Oh, bother! No topics were found here.</p>
                </div>
            </div>
            <div class="bg-warning m-2">
                <div class="border border-secondary p-2">
                    <p class="text-dark">You must be logged in to create new topics.</p>
                </div>
            </div>

        </div>

        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-3">
                    <div class="container" >
                        <login></login>
                    </div>
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
    
    import Login from './Login.vue'

    export default {
        components:{
            "login":Login
        },
        
    }
  
</script>
