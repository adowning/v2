<template lang="pug">
    el-form(:model="user")
        el-form-item(label="Username" prop="name")
            el-input(v-model="user.name")
        el-form-item(label="Password" prop="pass")
            el-input(type="password" v-model="user.pass")
        el-form-item(prop="pass")
            el-button(@click="login()") Auth
            el-button(@click="create()") Create account
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "parse";
import toastr from "toastr";
export default Vue.extend({
    data() {
        return {
            user: {
                name: "",
                pass: ""
            }
        };
    },
    methods: {
        async login() {
            try {
                await User.logIn(this.user.name, this.user.pass);
                this.$emit("login");
                toastr.success(`Successfully authorized`);
            } catch (e) {
                toastr.error(`Authorization error: ${e.message}`);
            }
        },
        async create() {
            try {
                const user = new User();
                user.setUsername(this.user.name);
                user.setPassword(this.user.pass);
                await user.save();
                this.login();
                toastr.success(`Successfully registered`);
            } catch (e) {
                toastr.error(`Registration error: ${e.message}`);
            }
        }
    }
});
</script>
