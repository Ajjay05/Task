const initialState= {
    list: []
}

const Todoreducer = (state=initialState , action) =>{

    switch(action.type) {

        case "Add":
            const {id, data} = action.payload;

            return{

                ...state,
                list :[
                    ...state.list,
                    {

                    id:id,
                    data:data,
                }]
            }

            case "delete": 
            const newList = state.list.filter((element) => element.id !== action.id)
            return{

                ...state,
                list:newList
            }

            default: return state;
    }

}
export default Todoreducer;