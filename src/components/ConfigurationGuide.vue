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
                        <h4 class="row float-left mt-4 border-bottom mr-4">Users Configuration</h4>
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
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Process Name</b></span><span><a href="" class="text-success">Process:Administration Guide</a></span></div>
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Parent Step </b></span><span>ev-Technical Process</span></div>
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Title</b></span><span>Users Configuration</span></div>
                                                <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Sequence </b></span><span>1</span></div>
                                            </b-card-text>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card 
                                    border-variant="secondary" 
                                    header="Related To" 
                                    header-bg-variant="secondary"
                                    header-text-variant="white"
                                    class="text-center mt-5 ">
                                    
                                    <b-card-text class="m-0 small">
                                        <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Related Modules </b></span><span></span></div>
                                        <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Related Action </b></span><span></span></div>
                                        <div class="d-flex justify-content-between border-bottom my-2" ><span><b>Main screen </b></span><span>No screen</span></div>
                                    </b-card-text>
                                    
                                </b-card>
                                <b-card 
                                    border-variant="secondary" 
                                    header="Administration Guide" 
                                    header-bg-variant="secondary"
                                    header-text-variant="white"
                                    class="text-center mt-5 ">
                                    
                                    <b-card-text class="m-0 small">
                                        <div class="d-flex justify-content-between border-bottom my-2" ><span>1. <a href="" class="text-success">Search Settings</a></span></div>
                                        <div class="d-flex justify-content-between border-bottom my-2" ><span>2. <a href="" class="text-success">System configuration</a></span></div>
                                        <div class="d-flex justify-content-between border-bottom my-2" ><span>3. <a href="" class="text-success">Dashboard Management</a></span></div>
                                        <div class="d-flex justify-content-between border-bottom my-2" ><span>4. <a href="" class="text-success">Email Settings</a></span></div>
                                        <div class="d-flex justify-content-between border-bottom my-2" ><span>5. <a href="" class="text-success">Google Apps</a></span></div>
                                        <div class="d-flex justify-content-between border-bottom my-2" ><span>6. <b>Users Configuration</b></span></div>
                                        <div class="d-flex justify-content-between border-bottom my-2" ><span>7. <a href="" class="text-success">Developer Tools</a></span></div>
                                        <div class="d-flex justify-content-between border-bottom my-2" ><span><b></b></span><span><a class="text-success" href="">Add a Sub-Process Step</a></span></div>
                                    </b-card-text>
                                    
                                </b-card>
                            </div>
                        </div>
                        
                        <h4 class="row float-left my-4 border-bottom  mr-4">Short Description</h4>
                        <p class="row float-left">Users Create, edit, activate and deactivate users in MintHCM.</p>
                        
                        <h4 class="row float-left my-4 border-bottom  mr-4">User Management</h4>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img1" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">Users Management</span>    
                        </div>
                        <p class="row float-left">Basic view of this section is a list of MintHCM users. </p>
                        <p class="row float-left">From this point you can create new user, using Create New User button on the left side panel. </p>
                        <p class="row float-left">Also you can edit each user by proceeding to its record view and clicking Edit button or instantly by clicking Pencil Icon. </p>
                        
                        <h5 class="row float-left mb-4 mt-2">Create new user</h5>
                        <p class="row float-left">In this section you can create a new user of MintHCM. It opens after clicking Create New User button. </p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img2" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">Create New User</span>    
                        </div>
                        <p class="row float-left"> The section contains many fields in four tabs. </p>
                        <div class="row float-left"><p class=" float-left mr-3" align="left">First tab - <b>User Profile </b> - contains general user information,
                        such as position, status and personal data, Username, status and Last Name fields are required.</p> </div>                    
                        <p class="row float-left">At the bottom of this tab, there are Email Settings. </p>
                        <p class="row float-left">Note Email Client field, where you can choose how the user will send emails. You can choose from:</p>
                        <ul>
                            <li class="float-left">
                                <p>MintHCM Mail Client: Send emails using the email client in the MintHCM application.</p>
                            </li>
                            <li class="float-left">
                                <p>    External Mail Client: Send email using an email client outside of the MintHCM application, such as Microsoft Outlook.</p>
                            </li>
                        </ul>
                        <div class="row float-left"><p class=" float-left mr-3" align="left">In second tab - <b>Password</b> - you can set new password for thew user.</p> </div>                    
                        <p class="row float-left">If in Password Management you chose system generated password, this tab is not available. </p>
                        <div class="row float-left"><p class=" float-left mr-3" align="left">In <b>Advanced</b> tab you configure usere's export/import preferences, reminders, date, 
                        time and currency format and so on. </p> </div>                    
                        <p class="row float-left">Here you can also configure Calendar Options.</p>
                        <p class="row float-left mr-3" align="left">Publish Key - set to prevent unauthorized publishing of your calendar. If set, it generates URLs in fields below:
                            Publish at my location, Publish at my location, iCal integration URL (Use this URL to subscribe to the MintHCM calendar within iCal). 
                        </p>
                        <p class="row float-left">Also, you can choose a First Day of Week displayed in Week, Month, and Year Views in Calendar. </p>
                        
                        <h4 class="row float-left my-4 border-bottom  mr-4">Role Management</h4>
                        <p class="row float-left">In this section you can manage role membership and properties. Roles allows to grant or restrict permission to access each module. </p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img3" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">Roles</span>    
                        </div>
                        <p class="row float-left mr-3" align="left">Roles are used to allow or restrict access to each pice of data in MintHCM, particularly modules and their records. 
                            There is a vast variety of configuration possibilities, so that each role can fit the needs of users. </p>
                        <p class="row float-left">Roles can be assigned to individual users or Security Groups. </p>
                        <div class="row float-left"><p class=" float-left mr-4" align="left">Using left sidebar options, you can easily navigate through roles - using 
                            <b>List Roles</b>. And by using <b>List Roles By User</b> option you can select each user to preview their permission matrix and check to which roles they are assigned to. </p> 
                        </div> 

                        <h5 class="row float-left mb-4 mt-2">Create Role</h5>
                        <p class="row float-left">To create new Role, click Create Role button at top left side of Roles section. </p>
                        <p class="row float-left">Its quite simple, you just have to fill Name field (it is required) and eventually provide Description. </p>
                        <div class="row float-left"><p class=" float-left mr-4" align="left">In second step, you should proceed to newly created Role record. 
                            Here you can set role's permissions for <b>Accessing</b> each MintHCM module. You can either <b>Enable</b> or <b>Disable</b> permission. 
                            You can also leave it as <b>Not Set</b>, which in fact equals to Enabled.
                            </p> 
                        </div> 
                        <div class="row float-left"><p class=" float-left mr-4" align="left">However, if user has several roles, that are contrary to each other, system will behave 
                            differently - it will take into consideration the most strict settings. So, if one role permission for module is Not Set and another is Disabled, 
                            in general permission is Disabled. If one role permission is Enabled and another is Disabled, in general, permission is also Disabled. 
                            </p> 
                        </div> 
                        <p class="row float-left">To edit permission click on Not Set text and choose permission value form the list. After all permission are set as wished, remember to save changes. </p>
                        <div class="row float-left"><p class=" float-left mr-4" align="left">For <b>Delete, Edit, Export, Import, List, Mass Update</b> and <b>View</b> actions you can set several more options. 
                            </p> 
                        </div> 
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>All</b> - users will have access to all records. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Group</b> - users will have access to all records assigned 
                        to members of the same group. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Owner</b> - users will users access only to their own records. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>None</b> - users will not have access to this function for 
                        this module. </p></div>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img4" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">Role Record View</span>    
                        </div>
                        <h5 class="row float-left mb-4 mt-2">Assigning Users</h5>
                        <div class="row float-left"><p class=" float-left mr-4" align="left">To assign each user to a particular role, you have to go to role's
                            record view and scroll to the bottom of the page.There, in the users subpanel, you can link an existing user to the role. 
                            To find a particular users, you can use filters. </p> 
                        </div>

                        <h4 class="row float-left my-4 border-bottom  mr-4">Password Management</h4>
                        <p class="row float-left">In this section you can manage password requirements and expiration </p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img5" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">Password Management</span>    
                        </div>
                        
                        <h5 class="row float-left mb-4 mt-2">System-Generated Passwords</h5>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Enable System-Generated Passwords Feature</b> - when this feature is enabled,
                            users will be emailed a system-generated link to reset their passwords. Requirements for this feature are: 
                            1) a outbound email server must be configured properly in <a href="" class="text-success">Email Settings</a>, 2) users must have valid email addresses in their user records </p> 
                        </div> 
                        <p class="row float-left">System-Generated Password Expiration - this option is enabled, only if system-generated password is also enabled. You can choose from: </p>
                        <ul>
                            <li class="float-left">
                                <p>None</p>
                            </li>
                            <li class="float-left">
                                <p class=" float-left mr-4" align="left">Password Expires in [ ] [ ] - here you can set amount of time, after which the password will expire. You can choose between days, 
                                    weeks and months and determine their number.</p>
                            </li>
                            <li class="float-left">
                                <p class=" float-left mr-4" align="left">Password Expires upon [ ] logins - determine number of logins after, which the password will expire.</p>
                            </li>
                        </ul>

                        <h5 class="row float-left mb-4 mt-2">Password Security Settings</h5>
                        <p class="row float-left">Here you can set requirements that passwords must fulfill. </p>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Password minimum length Information</b>- if selected, password minimum length. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Password should contain uppercase characters</b> - if selected, password should contain uppercase characters. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Password should contain lowercase characters</b> - if selected, password should contain lowercase characters. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Password should contain numbers</b> - if selected, password should contain numbers. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Password should contain special characters</b> - if selected, password should contain special characters. </p></div>

                        <h5 class="row float-left mb-4 mt-2">User Reset Password</h5>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Enable Forgot Password feature</b> - when enabled, users will have the ability to reset their own passwords at the Login page. 
                            Requirements to use this feature: 1) users must have email addresses provided in their user records, and 2) an outbound email server must be configured in the Email Settings page. </p> 
                        </div> 
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Generated Link Expiration</b> - when enabled, a link is generated by the system and sent to the user to allow the 
                        user to access the Reset Password page. You can also determine time, after which link will expire.</p> 
                        </div> 
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Enable reCAPTCHA Validations</b> - when enabled, user will have to do reCAPTCHA Validation. 
                        Captcha is a challenge-response test used to ensure that the response is not generated by a computer. Obtain a Public key and a Private key from reCAPTCHA at <a href="">http://recaptcha.net/</a>.</p> 
                        </div> 

                        <h5 class="row float-left mb-4 mt-2">Email Templates</h5>
                        <div class="row float-left"><p class=" float-left mr-4" align="left">In this section you can choose, create or edit email templates for emails regarding system-generated password,
                             system-generated link to reset password and system-generated two-factor authentication code.
                            </p> 
                        </div>

                        <h5 class="row float-left mb-4 mt-2">LDAP Support</h5>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Enable LDAP AuthenticationI</b> - when LDAP authentication is enabled, passwords can only be handled through LDAP. 
                        None of the MintHCM Password Management feature settings will apply. You can find more information in your LDAP provider documentation. </p> 
                        </div>

                        <h5 class="row float-left mb-4 mt-2">SAML Authentication</h5>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Enable SAML Authentication</b> - when SAML authentication is enabled, 
                        passwords can only be handled through SAML. None of the MintHCM Password Management feature settings will apply. You can find more information in your SAML provider documentation. </p> 
                        </div>

                        <h4 class="row float-left my-4 border-bottom  mr-4">Security Group Management</h4>
                        <p class="row float-left">In this section you can create and manage Security Groups. </p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img6" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">MintHCM - Administration - Users - Security Groups Management</span>    
                        </div>
                        <p class="row float-left"> Security Groups allow to define set of permissions for given group of users. In some cases this might be more efficient way of granting permissions. </p>
                        <p class="row float-left">To set permissions for a group, firstly you have to create a role and set its permissions. Instruction how to do it is provided above. </p>
                        <div class="row float-left"><p class=" float-left mr-4" align="left">To create new Security Group click <b>Create a Security Group</b> button. </p> 
                        </div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left">While creating a new Security Group you have to provide its Name (this fields is required). 
                            You may also write a <b>Description</b> or check <b>Not Inheritable</b> option. </p> 
                        </div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Not Inheritable</b> - if selected, the group will not automatically be attached to any record. </p>
                        </div>
                        <p class="row float-left">As new group is created, you need to add users to it. </p>
                        <div class="row float-left"><p class=" float-left mr-4" align="left">To complete the process add a role to the group. 
                            By this action, all users added to the group will share permissions given by the role related to the group. </p> 
                        </div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left">For example: If you will create a role with all permissions set to Owner only,
                             all members of the group will have Owner permissions. So in case presented below John smith and Anna Williams have Owner permissions to modules,
                              because that is how the Owner only role is configured. Any other user added to the group will be granted the same permissions.</p> 
                        </div>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img7" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">MintHCM - Administration - Users - Security Groups Record View</span>    
                        </div>

                        <h4 class="row float-left my-4 border-bottom  mr-4">Security Groups Settings</h4>
                        <p class="row float-left">In this section you can configure advanced options of Security Groups. </p>
                        <div class="border float-left mb-3" style="width:80%">
                            <img :src="img8" width="99%" class="m-1 border">
                            <span class="ml-1 float-left small">MintHCM - Administration - Users - Security Groups Settings</span>    
                        </div>

                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Additive Rights</b> - user gets greatest rights of all roles assigned to the user or the user’s groups. TODO </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Strict Rights</b> - if a user is a member of several groups only the respective rights from the group assigned to the current record are used. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>New User Group Popup</b> - if this is checked, a Security Groups popup will open when a new user is created, allowing you to add the user to a security group. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>User Role Precedence</b> - if any role is assigned directly to a user that role should take precedence over any group roles. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Filter User List</b> - with this selected, non-admin users can only assign records to users who are in the same group. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Use Creator Group Select</b> - adds a panel to a record creation screen if a user is a member of more than one inheritable group that allows a user to select one or more groups 
                            (that the user belongs to) that should be associated with the newly created record. If a user is in just one group the normal inheritance rules will instead be applied. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Inherit from Created By User </b> - the record will inherit all the groups assigned to the user who created it. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Inherit from Assigned To User</b> - the record will inherit all the groups of the user assigned to the record. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Inherit from Parent Record</b> - e.g. If a case is created for a contact the case will inherit the groups associated with the contact. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Inbound email account</b> - locks down inbound email accounts in the email client to only list those that belong to the same group as the current user. </p></div>
                        <div class="row float-left"><p class=" float-left mr-4" align="left"><b>Default Groups for New Records</b> - using this mechanism you can set groups that will be always attached to record created in a chosen module. You can add several of this dependencies. </p></div>

                    

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
                { id: '2', message: "User Management", subitems:[
                    { id: '1', message: "Create new user", subitems:[] },
                ] },
                { id: '3', message: "Role Management", subitems:[
                    { id: '1', message: "Create Role", subitems:[] },
                    { id: '1', message: "Assigning Users", subitems:[] },
                ] },
                { id: '4', message: "Password Management", subitems:[
                    { id: '1', message: "System-Generated Passwords", subitems:[] },
                    { id: '2', message: "Password Security Settings", subitems:[] },
                    { id: '3', message: "User Reset Password", subitems:[] },
                    { id: '3', message: "Email Templates", subitems:[] },
                    { id: '3', message: "LDAP Support", subitems:[] },
                    { id: '3', message: "SAML Authentication", subitems:[] },
                ]},
                { id: '5', message: "Security Group Management", subitems:[] },
                { id: '6', message: "Security Groups Settings", subitems:[] },
                { id: '7', message: "Sub sections", subitems:[
                    { id: '1', message: "Mentioned in other articles", subitems:[] },
                ] }, 
            ],
            img1: require('@/assets/1350px-MintHCM_-_Administration-_Users_-_Users_Management.png'),
            img2: require('@/assets/1350px-MintHCM_-_Administration_-_Users_-_Users_Management_-_Create_New_User.png'),
            img3: require('@/assets/1350px-MintHCM_-_Administration_-_Users_-_Roles_-_List.png'),
            img4: require('@/assets/1350px-MintHCM_-_Administration_-_Users_-_Roles_-_Role_Record_View.png'),
            img5: require('@/assets/1350px-MintHCM_-_Administration_-_Users_-_Password_Management.png'),
            img6: require('@/assets/1350px-MintHCM_-_Administration_-_Users_-_Security_Groups_Management_-_Create_a_Security_Group.png'),
            img7: require('@/assets/1350px-MintHCM_-_Administration_-_Users_-_Security_Groups_Management_-_Security_Group_Record_View.png'),
            img8: require('@/assets/1350px-MintHCM_-_Administration_-_Users_-_Security_Groups_Settings.png'),
                       

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