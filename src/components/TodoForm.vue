<template lang="pug">
    el-form(:inline="true" :model="todo")
        el-form-item(label="Title")
            el-input(v-model="todo.title")
        el-form-item
            el-button(@click="create()") Create
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import Todo from "@/models/Todo";

import toastr from "toastr";
import { User, Cloud } from "parse";

@Component({})
export default class TodoForm extends Vue {
    todo = { title: "" };

    async create() {
        try {
            const todo = await this.$parse.run("createTodoForUser", this.todo);
            toastr.success(`${todo.id} successfully created`);
        } catch (e) {
            toastr.error(`Error while creating todo: ${e.message}`);
        }
    }
}
</script>
