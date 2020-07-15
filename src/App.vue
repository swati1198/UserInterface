<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar bg-white shadow justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://minthcm.org/" target="_blank">
           MintHCM
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          
          <li class="nav-item">
            <router-link class="nav-link pr-0" to="/support">Support</router-link>
          </li>
          <li dovclass="nav-item">
            <b-nav pills class="pr-3">
              <b-nav-item-dropdown
                id="my-nav-dropdown"
                toggle-class="nav-link-custom"
                right
              >
                <b-dropdown-item href="documentation" >Documentation</b-dropdown-item>
                <b-dropdown-item href="installation-guide" >Installing MintHCM</b-dropdown-item>
                <b-dropdown-item href="configuration-guide" >Configuring MintHCM</b-dropdown-item>
                <b-dropdown-item href="forum" >Using MintHCM</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-nav>
          </li>
           <li class="nav-item">
            <router-link class="nav-link pr-3" to="/download">Download</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/contact">Contact Us</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/signup">Sign up</router-link>
          </li>
          <li class="nav-item" style="margin-left:15px;margin-top:3px">
            <SelectLocale />
          </li>
        </ul>
      </div>
    </nav>
    
    <div class="App">
      <router-view />
    </div>
  </div>
</template>
<script>
import SelectLocale from './components/SelectLocale.vue'

export default {
  name: 'App',
  components: {
    SelectLocale
  }
}
</script>

