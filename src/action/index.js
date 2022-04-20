import { type } from "@testing-library/user-event/dist/type"

export const addItem = (data) => {
return{

    type: "Add",
payload: {

    id: new Date().getTime().toString(),
    data:data
}
}
}

export const deleteItem = (id) => {
return{

type:"delete",
id
}
} 