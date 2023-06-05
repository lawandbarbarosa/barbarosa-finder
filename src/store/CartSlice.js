import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  JobDetail: [],
  selectedJob: null,
  input: "",
  location:'',
  requires:[],
  require:'',
};

export const cartSlice = createSlice({
  name: "job",
  initialState: initialState,
  reducers: {
    setSelectedJob: (state, action) => {
      const productId = action.payload;
      state.selectedJob = state.JobDetail.find((J) => J.id === productId);
    },

    setInputValue: (state, action) => {
      state.input = action.payload;
      console.log(state.input);
    },

    setLocationValue:(state,action)=>{
        state.location = action.payload;
        console.log(state.location)
    },

    AddingJob:(state,action)=>{
        const {input,location} = state
        const newJob ={
            id:state.JobDetail.length + 1,
            input,
            location
        };
        state.JobDetail.push(newJob)
    },
    setAddrequire:(state,action)=>{
 state.require = action.payload
    },

    setAddRequirePlan:(state,action)=>{
    const require = action.payload;
    const newRequire = {
      id:state.requires.length +1,
      require,
    };
    state.require.push(newRequire)
    },

    addToFavourite:(state,action)=>{
      const newItem = action.payload.job
      const cartJob = state.items.find((job)=> job.product.id)


      if(cartJob){
        cartJob.quantity +=1
      }else{
        state.items.push({job:newItem,quantity:1})
      }
    }

  }
});

export const { setSelectedJob, setInputValue, setLocationValue, AddingJob, setAddRequirePlan, setAddrequire } = cartSlice.actions;


export default cartSlice.reducer;
