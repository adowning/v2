<template lang="pug">
    el-form(:inline="true" :model="todo")
        el-form-item(label="Title")
            el-input(v-model="todo.title")
        el-form-item
            el-button(@click="create()") Create
</template>

<script lang="ts">
import Vue from "vue";
import Todo from "@/models/Todo";
import { User, Cloud } from "parse";
import toastr from "toastr";
export default Vue.extend({
    data() {
        return {
            todo: { title: "" }
        };
    },
    methods: {
        async create() {
            try {
                const todo = await Cloud.run("createTodoForUser", this.todo);
                toastr.success(`${todo.id} successfully created`);
            } catch (e) {
                toastr.error(`Error while creating todo: ${e.message}`);
            }
        }
    }
});
</script>
