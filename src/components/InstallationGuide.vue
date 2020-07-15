<template>
<div  style="margin-top:55px">
    <div class="container-fluid p-0 mt-5 bg-white">
        <div class="row ml-3">
            <div class="col-lg-2">
                <div class="container mt-4 ml-0">
                    <p class="font-weight-bolder mt-4 m-0">Navigation</p><br>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Privacy Policy</a></p>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Recent changes</a></p>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Random Page</a></p>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Help</a></p>

                    <p class="font-weight-bolder mt-4 m-0">Process</p><br>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Business Processes</a></p>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Technical Processes</a></p>

                    <p class="font-weight-bolder mt-4 m-0">Modules</p><br>
                    <p class="font-weight-normal"><a class="text-secondary" href="">All Modules</a></p>

                    <p class="font-weight-bolder mt-4 m-0">Integrations</p><br>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Integrations</a></p>

                    <p class="font-weight-bolder mt-4 m-0">All Files</p><br>
                    <p class="font-weight-normal"><a class="text-secondary" href="">All Files</a></p>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Diagrams</a></p>
                    <p class="font-weight-normal"><a class="text-secondary" href="">Screens</a></p>
                    
                   
                                 
                </div>
            </div>
            <div class="col-lg-10 border-left">
                <div class="m-3 mr-5 pr-5">
                    <div class="d-flex flex-md-row text-center mt-4" >
                        <span class=" ml-2 mt-2"><a class="text-dark" href=""><u>Process</u></a></span>
                        <span class=" ml-4 mt-2">Discussion</span>
                        <div>
                            <b-dropdown id="dropdown-1" variant="light" text="Views" class="ml-2 mb-0">
                                <b-dropdown-item>What links here</b-dropdown-item>
                                <b-dropdown-item>Related changes</b-dropdown-item>
                                <b-dropdown-item>Upload file</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item disabled>Tools</b-dropdown-item>
                                <b-dropdown-item>Special pages</b-dropdown-item>
                                <b-dropdown-item>Printable version</b-dropdown-item>
                                <b-dropdown-item>Permanent link</b-dropdown-item>
                                <b-dropdown-item>Page information</b-dropdown-item>
                                <b-dropdown-item>View Form</b-dropdown-item>
                                <b-dropdown-item>Cite this page</b-dropdown-item>
                            </b-dropdown>
                        </div>  
                    </div>
                    <div class="row flex-column text-center ml-4">
                        <h4 class="row float-left mt-4 border-bottom mr-4">Installation Guide</h4>
                        <div class="container row my-3 pr-5">
                            <div class="col-lg-4">
                                <b-card no-body >
                                    <b-card-header header-tag="header" class="p-0" role="tab">
                                        <b-button block v-b-toggle.accordion-1 variant="light">
                                            <span class="float-left m-1">Contents</span> 
                                            <span class="when-opened float-left text-success mt-1 small">
                                                <span>[Hide]</span>
                                            </span>
                                            <span class="when-closed float-left text-success mt-1 small">
                                                <span>[Show]</span>
                                            </span>
                                            
                                        </b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel" visible>
                                        <b-card-body>
                                            <b-card-text>
                                                <span v-for="item in items" :key="item.id" class="small">
                                                    <span class=" float-left">{{ item.id }}. <a href="" class="text-success">{{ item.message }}</a></span><br>
                                                    <span v-if="item.subitems.length" v-for="subitem in item.subitems" :key="subitem.id" >
                                                        <span class=" float-left ml-4">{{ item.id }}.{{ subitem.id }} <a href="" class="text-success">{{ subitem.message }}</a></span><br>
                                                    </span>
                                                </span>
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>
                            <div class="col-lg-3">
                            </div>
                            <div class="col-lg-5">
                                <b-card no-body >
                                    <b-card-header header-tag="header" class="p-0" role="tab">
                                        <b-button block v-b-toggle.accordion-2 variant="light">
                                            <span class="m-1">Info</span> 
                                            <span class="when-opened float-right text-success mt-1 small">
                                                <span>[Collapse]</span>
                                            </span>
                                            <span class="when-closed float-right text-success mt-1 small">
                                                <span>[Expand]</span>
                                            </span>
                                            
                                        </b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-2" accordion="my-accordion2" role="tabpanel">
                                        <b-card-body>
                                            <b-card-text class="m-0 small">
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Process Name</b></span><span>Installation guide</span></div>
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Process Type </b></span><span>ev-Technical Process</span></div>
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Related Processes</b></span><span></span></div>
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Related Modules</b></span><span></span></div>
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card 
                                    border-variant="secondary" 
                                    header="Installation guide" 
                                    header-bg-variant="secondary"
                                    header-text-variant="white"
                                    class="text-center mt-5 ">
                                    
                                    <b-card-text class="m-0 small">
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b></b></span><span><a class="text-success" href="">Add a Process Step</a></span></div>
                                    </b-card-text>
                                    
                                </b-card>
                            </div>
                        </div>

                        <h4 class="row float-left my-4 border-bottom mr-4">Short Description</h4>
                        <p class="row float-left">Installation guide for MintHCM </p>
                        
                        <h4 class="row float-left my-4 border-bottom mr-4">Preparing for installation</h4>
                        <p class="row float-left">To install MintHCM you will need Linux or Windows platform, 
                            a web server with PHP installed and a database. </p>
                        <p class="row float-left ml-3">1. Download MintHCM zip file from <a href="">https://minthcm.org/download/</a></p>
                        <p class="row float-left ml-3">2. Copy the zip file to your server and unzip it in directory of your choice</p>
                        <p class="row float-left ml-3">3. Change files permissions in that directory accordingly with your platform demands</p>
                        <p class="row float-left">For Ubuntu Linux/Apache it will be: </p>
                        <div class="bg-light border p-2" style="width:700px">
                            <code class="row float-left m-1 ml-3" style="text-align: justify;">cd ../&lt;yourMintHCMdirectory&gt;<br>
                                sudo chown -R www-data:www-data *<br>
                                sudo chmod -R 755 *</code>
                        </div>

                        <h4 class="row float-left my-4 border-bottom mr-4">Installation of MintHCM</h4>
                        <p class="row float-left">Once you have your files prepared, 
                            you can start actual installation. To do so, follow the steps below: </p>
                        <p class="row float-left">1. Put following URL into your web browser:</p>
                        <div class="bg-light border p-2 mb-3" style="width:700px">
                            <code class="row float-left m-1 ml-3" style="text-align: justify;">http://&lt;yourServer&gt;/&lt;yourMintHCMdirectory&gt;/install.php<br>
                            </code>
                        </div>
                        <p class="row float-left">The installation wizard will start now. </p>
                        <p class="row float-left">2. On the first screen you have to accept the license agreement. 
                            After that you can click next button. </p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img1" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">MintHCM - Installation - Start</span>    
                        </div>
                        <p class="row float-left">3. In a moment another screen with system environment information will appear. </p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img2" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">MintHCM - Installation - System Environment</span>    
                        </div>
                        <p class="row float-left mr-3" align="left">What is really important here is an instruction how to set up a Crontab, 
                            that allows MintHCM to perform actions in the background of your server. 
                            You should do this only after the installation is concluded. </p>
                        <p class="row float-left">To do so, you have to edit your web server user's crontab file. You can open it with a command:</p>
                        <div class="bg-light border p-2" style="width:700px">
                            <code class="row float-left m-1 ml-3" style="text-align: justify;">sudo crontab -e -u www-data (or another actual user)</code>
                        </div>
                        <p class="row float-left mt-3">Now you have to add the following line to the crontab file: </p>
                        <div class="bg-light border p-2" style="width:700px">
                            <code class="row float-left m-1 ml-3" style="text-align: justify;">*    *    *    *    *     cd /var/www/MintHCM/MintHCM; php -f cron.php > /dev/null 2>&1</code>
                        </div>
                        <div class="row float-left mt-3"><p> Information about Crontab edition may be also found in <a href="" class="text-danger">Schedulers</a> in <a class="text-success" href="">Administration panel</a> of MintHCM after installation. </p> </div>
                        <p class="row float-left">Note that Windows or other systems have different background processes mechanisms.</p>
                        <p class="row float-left">4. On the next screen you have to provide basic database configuration and administrator user data. </p>
                        <p class="row float-left mr-3" align="left">If your database is on the same server that MintHCM instance, you may put 'localhost' in Host Name field. If it is somewhere else, put there a proper host of your database.</p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img3" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">MintHCM - Installation - Database configuration</span>    
                        </div>
                        <p class="row float-left"> MintHCM Database User is by default set to root. If you want to choose another user, change it here. </p>
                        <p class="row float-left">5. Set up your administrator user name and password, so you can log in MintHCM later. </p>
                        <div class="row float-left"><p class=" float-left mr-4" align="left">In these screen you can also configure basic <a href="" class="text-danger">global settings</a> of your MintHCM instance, such as email server settings, 
                            branding (including logo of your company), system settings (i.e. time and data format) and security options. 
                            All of those settings may be configured after the installation as well.</p> </div>
                        <p class="row float-left">6. If everything was alright with data provided, installation will begin. It may take a while. </p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img4" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">MintHCM - Installation - Installation in progress</span>    
                        </div>
                        <p class="row float-left">7. After installation is completed, you will see the last screen. Among others, it provides information of total time of installation and memory use. </p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img5" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">MintHCM - Installation - Finish</span>    
                        </div>

                        <h4 class="row float-left my-4 border-bottom mr-4">Troubleshooting</h4>
                        <p class="row float-left">During the installation process some errors may occur. </p>
                        
                        <h5 class="row float-left mb-4 mt-2">Permissions error</h5>

                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img6" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">Permissions error</span>    
                        </div>
                        <p class="row float-left mr-3" align="left">This may occur, when files permissions were not change before the installation.
                            Check your file permissions in MintHCM installation files directory,
                            if necessary run commends provided below and start installation again. </p>
                        <div class="bg-light border p-2" style="width:700px">
                            <code class="row float-left my-2 ml-3" style="text-align: justify;">sudo chown -R www-data:www-data *<br>
                                sudo chmod -R 755 *<br></code>
                        </div>    
                        <p class="row float-left mt-3">or if this will not work, try: </p>
                        <div class="bg-light border p-2 my-2" style="width:700px">
                            <code class="row float-left m-1 ml-3" style="text-align: justify;">sudo chown -R www-data:www-data .<br>
                                sudo chmod -R 755 .<br></code>
                        </div>
                        
                        <h5 class="row float-left mb-4 mt-2">Database could not be established</h5>
                        <p class="row float-left mr-3" align="left">"The provided database host, username, and/or password is invalid, 
                            and a connection to the database could not be established. Please enter a valid host, username and password" 
                        </p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img7" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">Database configuration error</span>    
                        </div>
                        <p class="row float-left mr-3" align="left">This error is most probably caused by invalid data provided by user, 
                            such as database host name or password. To solve this, double check your host, user name, password, etc. 
                            Also, check if your MintHCM Database user matches the actual user you can and want to use in this instance of MintHCM.  
                        </p>   
                        
                        <h5 class="row float-left mb-4 mt-2">Config.php file is missing</h5>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img8" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">MintHCM - Installation - Config.php error</span>    
                        </div>
                        <p class="row float-left mr-3" align="left">This error may also be caused by file permission restrictions. 
                            You can check them and eventually restart installation. Or you can create config.php file manually.  
                        </p>
                        <p class="row float-left mr-3" align="left">To do so, just create config.php file in your MintHCM instance directory, 
                            paste the code form the installer and save the file. After that, you can go to your instance 
                            (i.e. through URL http://&lt;yourServer&gt;/&lt;yourMintHCMdirectory&gt;). 
                                The instance should be running and you should see basic configuration options after logging in.  
                        </p>
                        
                        <h4 class="row float-left my-4 border-bottom mr-4">Process Steps</h4>
                        
                        <h4 class="row float-left my-4 border-bottom mr-4">Mentioned in other articles</h4>
                        
                        <div class="bg-light border p-3 mb-3" style="width:700px">
                            <span class="float-left text-secondary">
                            <a href="" class="m-1 mr-2 text-success" style="text-align: justify;">Categories</a>:
                            <a href="" class="m-1 mr-2 text-success" style="text-align: justify;">Tech</a>|
                            <a href="" class="m-1 mr-2 text-success" style="text-align: justify;">Technical Processes</a>|
                            <a href="" class="m-1 mr-2 text-success" style="text-align: justify;">Processes</a>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="ml-2 m-2 py-3 border-top">
            <div class="ml-3">
                <p class="text-secondary" ><a class="text-secondary" href="">Powered by MediaWiki</a>
                - <a class="text-secondary" href="">Powered by Semantic MediaWiki</a></p>
                <p class="text-secondary">This page was last edited on 21 January 2020, at 11:59.</p>
                <p class="text-secondary" ><a class="text-secondary" href="">Privacy policy</a>
                - <a class="text-secondary" href="">About MintHCM Wiki</a>
                - <a class="text-secondary" href="">Disclaimers</a></p>
            </div>
        </div>
    </div>
</div>

</template>

<script>
  export default {
    data() {
        return {
            items: [
                { id: '1', message: "Short Description", subitems:[] },
                { id: '2', message: "Preparing for installation", subitems:[] },
                { id: '3', message: "Installation of MintHCM", subitems:[] },
                { id: '4', message: "Troubleshooting", subitems:[
                    { id: '1', message: "Permissions error", subitems:[] },
                    { id: '2', message: "Database could not be established", subitems:[] },
                    { id: '3', message: "Config.php file is missing", subitems:[] },
                ]},
                { id: '5', message: "Process Steps", subitems:[] },
                { id: '6', message: "Mentioned in other articles", subitems:[] }, 
            ],
            img1: require('@/assets/1350px-MintHCM_-_Installation_-_Start.png'),
            img2: require('@/assets/1350px-MintHCM_-_Installation_-_System_Environment.png'),
            img3: require('@/assets/1350px-MintHCM_-_Installation_-_Database_configuration.png'),
            img4: require('@/assets/1350px-MintHCM_-_Installation_-_Installation_in_progress.png'),
            img5: require('@/assets/1350px-MintHCM_-_Installation_-_Finish.png'),
            img6: require('@/assets/1350px-MintHCM_-_Installation_-_Permissions_error.png'),
            img7: require('@/assets/1350px-MintHCM_-_Installation_-_Database_configuration_error.png'),
            img8: require('@/assets/1350px-MintHCM_-_Installation_-_Config.php_error.png'),
            

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