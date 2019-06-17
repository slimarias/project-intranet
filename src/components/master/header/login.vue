<template>
	<div>
		<q-btn icon="person" label="Iniciar Sesión" @click="opened = true" dense no-caps flat size="xs"/>
		<q-modal v-model="opened" :content-css="{minWidth: '50vw', minHeight: '80vh'}">
			<q-modal-layout>
				<q-toolbar slot="header">
		      <q-btn
		        flat
		        round
		        dense
		        v-close-overlay
		        icon="keyboard_arrow_left"
		      />
    		</q-toolbar>

				<div class="layout-padding">
					
					<h4 class="text-primary text-center q-mt-none q-mb-md q-pb-sm" style="border-bottom: 2px solid #f1f1f1; font-size: 34px">
          	INICIAR SESIÓN
        	</h4>

	        <!-- USER -->
	        <q-field
	          :error="$v.form.username.$error"
	          error-label="This field is required"
	          class="q-mb-md">
	          <q-input name="email"
							autofocus
							autocomplete="off"
							v-model="form.username"
							type="text"
							:before="[{icon: 'person'}]"
							float-label="Email"/>
        	</q-field>
        
	        <!-- PASS -->
	        <q-field
	          :error="$v.form.password.$error"
	          error-label="This field is required"
	          class="q-my-md"
	          style="border-bottom: 2px solid #f1f1f1; font-size: 34px">
	          <q-input v-model="form.password"
							type="password"
							name="password"
							:before="[{icon: 'lock'}]"
							float-label="Contraseña"/>
	        </q-field>
        
        	<!--=== LOGIN ===-->
        	<div class="text-center q-pt-lg">
          	<q-btn :loading="loading_login"
							color="primary"
							name="submit"
							@click="authenticate()">
            	Iniciar Sesión
            	<span slot="loading">
								<q-spinner-hourglass class="on-left"/>
                VALIDATING...
              </span>
          	</q-btn>
        	</div>

				</div>
			</q-modal-layout>
		</q-modal>
	</div>
</template>

<script>
  /*Plugins*/
  import {required, email, numeric, minLength} from 'vuelidate/lib/validators';
  import {alert} from '@imagina/qhelper/_plugins/alert'
  import {helper} from '@imagina/qhelper/_plugins/helper'

  export default {
    data() {
      return {
      	opened: false,
        form: {
          username: null,
          password: null
        },
        rememberData: true,
        loading_login: false
      }
    },
    validations: {
      form: {
        username: {required},
        password: {required}
      }
    },
    methods: {
      async authenticate() {
        this.$v.$touch();

        if (this.$v.$error) {
          alert.error('Please review fields again.', 'bottom');
        } else {
          this.loading_login = !this.loading_login; 
          const {username, password} = this.form;

          this.$store.dispatch("auth/AUTH_REQUEST", {username, password}).then(response => {
            //this.loading_login = !this.loading_login;
          });
        }
      },

    }
  }
</script>

<style lang="stylus">
  @import "~variables";
  #form_login
    width 240px

  #form-login-left
    min-height 150px
    .bg-color
      background-color $primary
      height 100%
      width 100%
</style>
