export const getExampleTasks = async () => {
    const response = await fetch("/list-checker-react/exampleTask.json");
    if(!response.ok) {
        new Error(response.statusText); 
    } 
    
    return await response.json(); 
};