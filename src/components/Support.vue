<template>
<div style="margin-top:55px">
    <div class="jumbotron text-left bg-info text-white" >
        <h1>Support</h1>
    </div>
    
    <div class="container-fluid" >
        <div class="container">
            <div class="text-dark d-flex p-3 small" style="text-align:center;">  
                <div class="col p-2 ">
                    <font-awesome-icon icon="server" size="4x" class="icon-cog mb-4" style="color:gray"/>
                    <h3>Installing MintHCM</h3>
                    <p>if you have any problems while setting up</p>
                    <button type="button" class="btn btn-light btn-outline-secondary" @click="$router.push('installation-guide')">SEE THE GUIDE</button>
                </div>
                <div class="col p-2">
                    <font-awesome-icon icon="sliders-h" size="4x" class="icon-cog mb-4" style="color:gray"/>
                    <h3>Configuring MintHCM</h3>
                    <p>if you want to know more about configuration</p>
                    <button type="button" class="btn btn-light btn-outline-secondary" @click="$router.push('configuration-guide')">CHECK THE GUIDE</button>
                </div>
                <div class="col p-2">
                    <font-awesome-icon icon="child" size="4x" class="icon-cog mb-4" style="color:gray"/>
                    <h3>Using MintHCM</h3>
                    <p style="white-space: nowrap;">if you encounter any problems while using MintHCM</p>
                    <button type="button" class="btn btn-light btn-outline-secondary" @click="$router.push('forum')">VIEW FORUM</button>
                </div>
            </div>
        </div>


        <div class="container mt-5" style="height:50px">
            <div class="float-left mt-4 ml-1">
                <a href="/" class="p-1"><u>Home</u></a>
                <span>> Forum</span>
            </div>
            <div class="float-right mt-2">
                <input type="text">
                <button type="button" class="btn-light m-1" >Search</button>
            </div>
        </div>

        <div class="container ">
             <table class="table bg-light small">
                <thead>
                    <tr class="danger bg-secondary text-white col-1">
                        <th class="col-7">Forum</th>
                        <th class="col-1">Topics</th>
                        <th class="col-1">Posts</th>
                        <th class="col-3">Last Post</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href=""><u>Configuring MintHCM</u></a>
                        </td>
                        <td>1</td>
                        <td>1</td>
                        <td><a href=""><u>4 months, 3 weeks ago</u><br><u>minthcmadmin</u></a></td>
                    </tr>
                    <tr>
                        <td>
                            <a href=""><u>General</u></a>
                        </td>
                        <td>2</td>
                        <td>2</td>
                        <td><a href=""><u>1 year, 10 months ago</u><br><u>minthcmadmin</u></a></td>
                    </tr>
                    <tr>
                        <td>
                            <a href=""><u>Installing MintHCM</u></a>
                        </td>
                        <td>3</td>
                        <td>3</td>
                        <td><a href=""><u>4 months, 3 weeks ago</u><br><u>minthcmadmin</u></a></td>
                    </tr>
                    <tr>
                        <td>
                            <a href=""><u>Using MintHCM</u></a>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>No Topics</td>
                    </tr>
                    <tr class="bg-secondary">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-3">
                    <div class="container text-left" >
                        <h2>FAQ</h2><br>
                        <hr class="bg-secondary float-left" style="height:1px; width:50px">
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="container p-3 bg-light">

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-0" role="tab">
                                <b-button block v-b-toggle.accordion-1 variant="secondary">
                                    <span class="when-opened float-left border border-dark">
                                        <i class="fa fa-minus p-2" aria-hidden="true" ></i>
                                    </span>
                                    <span class="when-closed float-left border border-dark">
                                        <i class="fa fa-plus p-2" aria-hidden="true"></i>
                                    </span>
                                    <span class="float-left m-1">How can I contribute to MintHCM?</span> 
                                </b-button>
                            </b-card-header>
                            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>Download the instance and keep on coding. 
                                    If you have questions along the way or feel like expressing 
                                    concerns – use our <a href="">forum</a>.</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-0" role="tab">
                                <b-button block v-b-toggle.accordion-2 variant="secondary">
                                    <span class="when-opened float-left border border-dark">
                                        <i class="fa fa-minus p-2" aria-hidden="true" ></i>
                                    </span>
                                    <span class="when-closed float-left border border-dark">
                                        <i class="fa fa-plus p-2" aria-hidden="true"></i>
                                    </span>
                                    <span class="float-left m-1">Can I contribute to MintHCM?</span> 
                                </b-button>
                            </b-card-header>
                            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>Yes, we invite you to participate in further development of the software. 
                                    Please <a href="">get in touch</a> about details of such contribution.</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-0" role="tab">
                                <b-button block v-b-toggle.accordion-3 variant="secondary">
                                    <span class="when-opened float-left border border-dark">
                                        <i class="fa fa-minus p-2" aria-hidden="true" ></i>
                                    </span>
                                    <span class="when-closed float-left border border-dark">
                                        <i class="fa fa-plus p-2" aria-hidden="true"></i>
                                    </span>
                                    <span class="float-left m-1">What is HCM?</span> 
                                </b-button>
                            </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>HCM stands for Human Capital Management and means a comprehensive set of practices 
                                    required for the recruitment, management and administrative aspects of human resources processes. 
                                    Sometimes you will also find it described as HRM – human resources management. </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-0" role="tab">
                                <b-button block v-b-toggle.accordion-4 variant="secondary">
                                    <span class="when-opened float-left border border-dark">
                                        <i class="fa fa-minus p-2" aria-hidden="true" ></i>
                                    </span>
                                    <span class="when-closed float-left border border-dark">
                                        <i class="fa fa-plus p-2" aria-hidden="true"></i>
                                    </span>
                                    <span class="float-left m-1">What does MintHCM do?</span> 
                                </b-button>
                            </b-card-header>
                            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>MintHCM was created to organize everything that falls under the definition of human capital management. 
                                    It is a professional business software that supports the procedures along the extended employee journey map. 
                                    It helps to create employer branding campaigns, handle the recruitment procedures, manage talents at the company, 
                                    cover the on- and offboarding operations and many more. 
                                    It also offers a full spectrum of advanced reporting and analytical functionalities. </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-0" role="tab">
                                <b-button block v-b-toggle.accordion-5 variant="secondary">
                                    <span class="when-opened float-left border border-dark">
                                        <i class="fa fa-minus p-2" aria-hidden="true" ></i>
                                    </span>
                                    <span class="when-closed float-left border border-dark">
                                        <i class="fa fa-plus p-2" aria-hidden="true"></i>
                                    </span>
                                    <span class="float-left m-1">Is MintHCM Open Source?</span> 
                                </b-button>
                            </b-card-header>
                            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>MintHCM is a free, open source, human capital management solution. 
                                    You can start using it right away. All you have to do is click download and install the software on your own server. 
                                    You will get the unlimited access to a world-class HCM solution entirely for free. 
                                    Because it is open source you can also customize it for your (or your boss’) particular requirements.</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>                    
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
  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>

    .collapsed > .when-opened,
    :not(.collapsed) > .when-closed {
        display: none;
    }

</style>