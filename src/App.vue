<template lang="pug">
    el-row(style="margin-top: 32px;")
        el-col(:offset="2" :span="20")
            el-card.box-card(v-if="user")
                div(slot="header")
                    span Todos
                    span(style="float: right; padding: 3px 0") {{ user.getUsername() }}
                        el-button(style="margin-left: 16px" type="text" @click="logout") Logout
                todo-list(style="height: 50vh; margin-bottom: 16px;")
                todo-form
            el-card.box-card(v-else)
                div(slot="header")
                    span Authorization
                login-form(@login="onlogin")
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import Todo from "@/models/Todo";

import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";
import LoginForm from "@/components/LoginForm.vue";

@Component({ components: { TodoList, TodoForm, LoginForm } })
export default class App extends Vue {
    user = this.$parse.user;

    onlogin() {
        this.user = this.$parse.user;
    }

    async logout() {
        await this.$parse.logOut();
        this.user = null;
    }
}
</script>
