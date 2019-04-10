Parse.Cloud.define("createTodoForUser", (request, response) => {
    if (!request.user) {
        response.error("Unathorized");
        return;
    }
    const Todo = Parse.Object.extend("Todo");
    const todo = new Todo();
    todo.set("author", request.user);
    todo.set("title", request.params.title);
    todo.set("finished", false);
    todo.save(null, {
        useMasterKey: true,
        success(result) {
            response.success(result);
        },
        error(error) {
            response.error(
                "Error while creating todo " +
                    error.code +
                    " - " +
                    error.description
            );
        }
    });
});
