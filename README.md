
# Fullstack Todo List

Todo list built using MERN stack, Redux, Tailwind CSS and Daisy ui.

## API Reference

#### Get all todos

```http
  GET /api/v1/todos
```

#### Add a todo

```http
  POST /api/v1/todos
```

| Key | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `string` | **Required**. Todo text |
| `completed` | `string` | **Optional**. Specify if this todo is completed already |

#### Delete the todo with the specified id

```http
  DELETE /api/v1/todos/${id}
```

#### Update a todo

```http
  PUT /api/v1/todos/${id}
```

| Key | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `string` | **Optional**. Todo text |
| `toggle` | `bool` | **Optional**. Specify if this todo should be toggled |

Atleast provide one out of both keys, as it is mandatory.

#### Delete all todos

```http
  DELETE /api/v1/todos
```

#### Mark all todos as completed

```http
  PATCH /api/v1/todos
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Priyanshu-Ganatra/Fullstack-to-do-list.git
```

Go to the project directory

```bash
  cd "Fullstack To-do List"
```

Go to the Frontend directory

```bash
  cd Frontend
```

Install frontend dependencies

```bash
  npm i
```

Run frontend dev server

```bash
  npm run dev
```

**Open another terminal**

Go to the project directory

```bash
  cd "Fullstack To-do List"
```

Go to the Backend directory

```bash
  cd Backend
```

Install backend dependencies

```bash
  npm i
```

Run backend dev server

```bash
  npm run dev
```
