export const selectCategoriesMap = (state)=>state.categories.categories. reduce((acc,category)=>{
      const {title,items}=category;
      console.log("cat",category)
      acc[title.toLowerCase()]=items;
      console.log("acc",acc)
      return acc
    },{});