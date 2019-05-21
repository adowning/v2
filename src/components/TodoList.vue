<template lang="pug">
    el-table(:data="todos" style="width: 100%")
        el-table-column(prop="id" label="Id")
        el-table-column(prop="title" label="Title")
        el-table-column(label="Finished")
            el-checkbox(slot-scope="todo" 
                v-model="todo.row.finished" 
                @change="update(todo.row, arguments[0])")
        el-table-column(label="Operations" fixed="right")
            template(slot-scope="todo")
                el-button(size="mini" type="danger" @click="remove(todo.row)") Delete
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import Todo from "@/models/Todo";

import toastr from "toastr";
import { extend } from "vue-parse";

@Component({
    parse: {
        todos: extend({
            object: Todo,
            subscribe: true
        })
    }
})
export default class extends Vue {
    remove(todo: Todo) {
        try {
            todo.destroy();
            toastr.success(`${todo.id} successfully deleted`);
        } catch (e) {
            toastr.error(`Error while deleting todo: ${e.message}`);
        }
    }

    update(todo: Todo, state: boolean) {
        try {
            todo.finished = state;
            todo.save();
            toastr.success(`${todo.id} successfully updated`);
        } catch (e) {
            toastr.error(`Error while updating todo: ${e.message}`);
        }
    }
}
</script>
