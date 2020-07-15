<template>
    <div class="vue-tempalte">
        
            <h3>Welcome</h3>

            <button  v-on:click.prevent="logout" class="btn btn-dark btn-lg btn-block">Logout</button>
       
    </div>
</template>

<script>
    export default {
        data() {
            return {
            
            }
        },
        
        beforeCreate: function() {

            if (!this.$session.exists()) {
            this.$router.push('/login')
            }
        },
        methods: {
            logout: function () {
            this.$session.destroy()
            this.$router.push('/login')
            },
            
            callFunction: function () {
                var self = this

                setTimeout(function () {

                    self.$session.destroy()
                    self.$router.push('/login')

                }, 10000);

            }
            
        },
        mounted () {
              this.callFunction()

        }   
        
    }
</script>