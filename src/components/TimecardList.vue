<template>
<div>
   <v-data-table
    v-model="selected"
    item-key="id"
    :headers="headers"
    :items="timecards"
    :items-per-page="5"
     show-select
    class="elevation-1"
     :single-select="true"

  >
    <template  v-slot:item.data-table-select="{ item, select }">
        <v-simple-checkbox color="green" :value="item.approved" @input="update(item, $event)"></v-simple-checkbox>
      </template>
    
        <template v-slot:item.author="{ item }">
        {{ item.employee.attributes.username }}
      </template>
     
  
  </v-data-table>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import Timecard from "@/models/Timecard";

import toastr from "toastr";
import { extend } from "vue-parse";

@Component({
    parse: {
        timecards: extend({
            object: Timecard,
            subscribe: true,
            // result: r => r.author.getUsername()
        })
        
    }
})
export default class extends Vue {
    data () {
      return {
headers:  [
    { text: 'approved', align: 'center', sortable: false, value: 'approved' },
    { text: 'Employee', align: 'center', sortable: false, value: 'employee' },
    { text: 'Clock In', align: 'center', sortable: false, value: 'clockIn' },
    { text: 'Clock Out', align: 'center', sortable: false, value: 'clockOut' },
    // { text: 'finished', align: 'center', sortable: false, value: 'finished' }
  ],
  selected:[]
     
      }}

    remove(timecard: Timecard) {
        try {
            timecard.destroy();
            toastr.success(`${timecard.id} successfully deleted`);
        } catch (e) {
            toastr.error(`Error while deleting timecard: ${e.message}`);
        }
    }

    update(timecard: Timecard, state: boolean) {
        try {
            timecard.approved = state;
            timecard.save();
            toastr.success(`${timecard.id} successfully updated`);
        } catch (e) {
            toastr.error(`Error while updating timecard: ${e.message}`);
        }
    }
}
</script>
