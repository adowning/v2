import Parse, { User } from "parse";
import { prop, model } from "vue-parse";

@model()
export default class Todo extends Parse.Object {
    @prop() title: string;
    @prop() author: User;
    @prop() finished: boolean;
}
