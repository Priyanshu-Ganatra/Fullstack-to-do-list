import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
}
)

const TodoModel = mongoose.model('todo', TodoSchema);

export default TodoModel;